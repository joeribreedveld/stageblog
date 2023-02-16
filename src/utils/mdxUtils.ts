import path from "path";
import * as fs from "fs";

export const POSTS_PATH = path.join(process.cwd(), "/public/posts");

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
