// Imports
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import path from "path";
import fs from "fs";
import {
  TBlogPostTag,
  IBlogPostTagProps,
  IBlogPostTagsProps,
} from "../../components/sections/BlogPosts/BlogPosts.types";
import { motion } from "framer-motion";

// Types
type TPostType = {
  title: string;
  date: string;
  description: string;
  tags: string[];
};

interface IPostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: TPostType;
}

interface IGetStaticPropsProps {
  params: {
    slug: string;
  };
}

// Animations
const postVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

// Functions
// Post page
const Post = ({ source, frontMatter }: IPostProps) => {
  return (
    <section>
      {/* Markdown top content */}
      <section className="mb-16 flex flex-col gap-4 border-b border-gray-200 pb-16">
        <h2 className="md:mb-2">{frontMatter.title}</h2>
        <p className="font-medium text-gray-500 md:text-lg">
          {frontMatter.date}
        </p>
        <p>{frontMatter.description}</p>
        <BlogPostTags tags={frontMatter.tags} />
      </section>
      {/* Markdown field */}
      <motion.section
        variants={postVariants}
        initial="initial"
        animate="animate"
        className="mdx-wrapper border-b border-gray-200 pb-16"
      >
        <MDXRemote {...source} />
      </motion.section>
    </section>
  );
};

// Blog Post Tags
const BlogPostTags = ({ tags }: IBlogPostTagsProps) => {
  return (
    <ul className="flex flex-wrap gap-3 md:gap-4">
      {tags.map((tag: TBlogPostTag) => (
        <li key={tag}>
          <BlogPostTag title={tag} />
        </li>
      ))}
    </ul>
  );
};

// Blog Post Tag
const BlogPostTag = ({ title }: IBlogPostTagProps) => {
  return <div className="tag">{title}</div>;
};

// Data fetching
export const getStaticProps = async ({ params }: IGetStaticPropsProps) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

// Exports
export default Post;
