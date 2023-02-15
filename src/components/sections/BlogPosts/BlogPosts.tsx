// Imports
import Link from "next/link";
import {
  IBlogPostProps,
  TBlogPostTag,
  IBlogPostTagsProps,
  IBlogPostTagProps,
} from "./BlogPosts.types";
import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";

// Framer
const blogPostsVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const blogPostVariants = {
  initial: {
    x: -25,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

// const noAnimationVariants = {
//   initial: {
//     opacity: 1,
//     x: 0,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//   },
// };

// Functions
// Blog Posts
const BlogPosts = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section>
      <motion.ul
        variants={blogPostsVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-8"
      >
        <BlogPost
          title="Stage blog week 1 en week 2"
          tags={["ReactNative", "Tests"]}
          date="14 februari 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
        <BlogPost
          title="Stage blog week 3 en week 4"
          tags={["Next.js", "Crypto"]}
          date="28 februari 2023"
          description="Kaas is geel en als het niet geel is dan is het waarschijnlijk niet positief. Het is een lang bekend feit dat een lezer..."
        />
        <BlogPost
          title="Stage blog week 5 en week 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
      </motion.ul>
    </section>
  );
};

// Blog Post
const BlogPost = ({ title, date, tags, description }: IBlogPostProps) => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.li variants={blogPostVariants} key={title}>
      <article className="flex flex-col gap-4 border-b border-gray-200 pb-8 md:flex-row md:gap-16">
        <section className="md:w-1/3">
          <p className="text-gray-500">{date}</p>
        </section>
        <section className="flex flex-col gap-6 md:w-2/3 md:gap-8">
          <section className="flex flex-col gap-4 md:gap-6">
            <h6 className="font-medium">{title}</h6>
            <BlogPostTags tags={tags} />
          </section>
          <p className="text-gray-500">{description}</p>
          <Link href="/" className="w-fit text-cyan-700">
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

// Exports
export default BlogPosts;
