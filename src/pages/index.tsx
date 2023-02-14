// Imports
import { type NextPage } from "next";
import BlogPosts from "../components/sections/BlogPosts/BlogPosts";

// Functions
const Home: NextPage = () => {
  return (
    <section className="flex flex-col gap-16">
      <h2>Joeri Breedveld</h2>
      <BlogPosts />
    </section>
  );
};

// Exports
export default Home;
