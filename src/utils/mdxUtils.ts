// Imports
import path from "path";
import * as fs from "fs";

// Path to the posts folder
export const POSTS_PATH = path.join(process.cwd(), "/public/posts");

// Get all posts from the posts folder
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
