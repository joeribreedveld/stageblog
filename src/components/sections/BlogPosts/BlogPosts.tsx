// Imports
import Link from "next/link";
import {
  IBlogPostProps,
  TBlogPostTag,
  IBlogPostTagsProps,
  IBlogPostTagProps,
} from "./BlogPosts.types";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

// Functions
// Blog Posts
const BlogPosts = () => {
  return (
    <section>
      <ul className="flex flex-col gap-8">
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
          title="Stage blo234g week 5 en week 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
        <BlogPost
          title="Stage 3423blog week 5 en week 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
        <BlogPost
          title="Stage3 blog week 5 en week 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
        <BlogPost
          title="Stag23e blog week 5 en week 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
        <BlogPost
          title="Stage blo23423g week 5 en week 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
        <BlogPost
          title="Stage blog week 5 en wee234234k 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
        <BlogPost
          title="Stage blog 33423week 5 en week 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
        <BlogPost
          title="Stage blog week 2342345 en week 6"
          tags={["Samenwerken", "Webdev"]}
          date="14 maart 2023"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point..."
        />
      </ul>
    </section>
  );
};

// Blog Post
const BlogPost = ({ title, date, tags, description }: IBlogPostProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Framer motion animations
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

  const mobileBlogPostVariants = {
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

  return (
    <motion.li
      ref={ref}
      variants={isMobile ? mobileBlogPostVariants : blogPostVariants}
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
