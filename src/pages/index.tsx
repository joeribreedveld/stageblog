// Imports
import { type NextPage } from "next";
import BlogPosts from "../components/sections/BlogPosts/BlogPosts";
import { getAllPosts } from "../lib/api";
import { GetStaticProps } from "next";
import { IBlogPostsProps } from "../components/sections/BlogPosts/BlogPosts.types";

// Functions
const Home = ({ posts }: IBlogPostsProps) => {
  return (
    <section className="flex flex-col gap-16">
      <h2 className="font-semibold">Joeri Breedveld</h2>
      {/* Blog posts with passed markdown posts */}
      <BlogPosts posts={posts} />
    </section>
  );
};

// Data fetching
export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts(["date", "description", "tags", "title", "slug"]);

  return {
    props: { posts },
  };
};

// Exports
export default Home;
