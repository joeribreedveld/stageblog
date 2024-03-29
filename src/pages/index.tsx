// Imports
import BlogPosts from "../components/sections/BlogPosts/BlogPosts";
import { getAllPosts } from "../lib/api";
import { GetStaticProps } from "next";
import { IBlogPostsProps } from "../components/sections/BlogPosts/BlogPosts.types";

// Functions
const Home = ({ posts }: IBlogPostsProps) => {
  return (
    <section className="flex flex-col gap-16">
      <h2>Joeri Breedveld</h2>
      {/* Blog posts with passed markdown posts */}
      <BlogPosts posts={posts} />
    </section>
  );
};

// Data fetching
export const getStaticProps: GetStaticProps = () => {
  const result = getAllPosts([
    "date",
    "description",
    "tags",
    "title",
    "slug",
    "id",
  ]);
  // sort by id
  const posts = result.sort((a, b) => {
    if (a.id && b.id) {
      if (a.id < b.id) {
        return -1;
      } else {
        return 1;
      }
    } else {
      // handle case where one or both dates are undefined
      return 0;
    }
  });

  return {
    props: { posts },
  };
};

// Exports
export default Home;
