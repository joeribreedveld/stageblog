// Imports
import Link from "next/link";
import {
  IBlogPostProps,
  TBlogPostTag,
  IBlogPostTagsProps,
  IBlogPostTagProps,
  IBlogPostsProps,
  TPost,
} from "./BlogPosts.types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animations
const blogPostVariants = {
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
// Blog Posts
const BlogPosts = ({ posts }: IBlogPostsProps) => {
  return (
    <section>
      <ul className="flex flex-col gap-8">
        {/* Markdown posts map */}
        {posts.map((post: TPost) => (
          <BlogPost
            key={post.title}
            title={post.title}
            tags={post.tags}
            date={post.date}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </ul>
    </section>
  );
};

// Blog Post
const BlogPost = ({ title, date, tags, description, slug }: IBlogPostProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.li
      ref={ref}
      variants={blogPostVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      key={title}
    >
      <article className="flex flex-col gap-4 border-b border-gray-200 pb-8 md:flex-row md:gap-16">
        <section className="md:w-1/3">
          <p className="text-gray-500">{date}</p>
        </section>
        <section className="flex flex-col gap-6 md:w-2/3 md:gap-8">
          <section className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg font-medium">{title}</h3>
            {/* Tag list */}
            <BlogPostTags tags={tags} />
          </section>
          <p className="text-gray-500">{description}</p>
          <Link
            href={`/posts/${slug}`}
            className="w-fit text-cyan-700 hover:text-cyan-900"
          >
            Lees meer -&gt;
          </Link>
        </section>
      </article>
    </motion.li>
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

// Exports
export default BlogPosts;
