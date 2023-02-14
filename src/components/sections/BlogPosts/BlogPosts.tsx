// Imports
import Link from "next/link";
import {
  IBlogPostProps,
  TBlogPostTag,
  IBlogPostTagsProps,
  IBlogPostTagProps,
} from "./BlogPosts.types";

// Functions
// Blog Posts
const BlogPosts = () => {
  return (
    <section>
      <ul className="flex flex-col gap-8">
        <BlogPost
          title="Blog post title"
          tags={["Blog post tag", "Blog post tag"]}
          date="14 februari 2023"
          description="Blog post description"
        />
        <BlogPost
          title="Blog post title"
          tags={["Blog post tag", "Blog post tag"]}
          date="14 februari 2023"
          description="Blog post description"
        />
        <BlogPost
          title="Blog post title"
          tags={["Blog post tag", "Blog post tag"]}
          date="14 februari 2023"
          description="Blog post description"
        />
      </ul>
    </section>
  );
};

// Blog Post
const BlogPost = ({ title, date, tags, description }: IBlogPostProps) => {
  return (
    <li>
      <article className="flex flex-col gap-16 border-b border-gray-200 pb-8 md:flex-row">
        <section className="md:w-1/3">
          <p className="text-gray-500">{date}</p>
        </section>
        <section className="flex flex-col gap-8 md:w-2/3">
          <section className="flex flex-col gap-6">
            <h6>{title}</h6>
            <BlogPostTags tags={tags} />
          </section>
          <p className="text-gray-500">{description}</p>
          <Link href="/" className="text-cyan-700">
            Lees meer -&gt;
          </Link>
        </section>
      </article>
    </li>
  );
};

// Blog Post Tags
const BlogPostTags = ({ tags }: IBlogPostTagsProps) => {
  return (
    <ul className="flex gap-4">
      {tags.map((tag: TBlogPostTag) => (
        <li>
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
