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

// Functions
// Post page
const Post = ({ source, frontMatter }: IPostProps) => {
  console.log(frontMatter.tags);
  return (
    <section>
      <section className="mb-16 flex flex-col gap-4 border-b border-gray-200 pb-16">
        <h1>{frontMatter.title}</h1>
        <h6 className="text-gray-500">{frontMatter.date}</h6>
        <p>{frontMatter.description}</p>
        <ul className="flex gap-3 md:gap-4">
          {frontMatter.tags.map((tag: TBlogPostTag) => (
            <li key={tag}>
              <BlogPostTag title={tag} />
            </li>
          ))}
        </ul>
      </section>
      <section className="mdx-wrapper border-b border-gray-200 pb-16">
        <MDXRemote {...source} />
      </section>
    </section>
  );
};

// Blog Post Tags
const BlogPostTags = ({ tags }: IBlogPostTagsProps) => {
  return (
    <ul className="flex gap-3 md:gap-4">
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
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
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
