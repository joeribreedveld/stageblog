// Interfaces
interface IBlogPostProps {
  title: string;
  date: string;
  tags: TBlogPostTag[];
  description: string;
  slug: string;
}

interface IBlogPostsProps {
  posts: IBlogPostProps[];
}

// Blog Post Tags
interface IBlogPostTagsProps {
  tags: TBlogPostTag[];
}

// Blog Post Tag
interface IBlogPostTagProps {
  title: TBlogPostTag;
}

// Types
type TBlogPostTag = string;

type TPost = {
  title: string;
  date: string;
  tags: TBlogPostTag[];
  description: string;
  slug: string;
};

// Exports
export type {
  IBlogPostProps,
  TBlogPostTag,
  IBlogPostTagsProps,
  IBlogPostTagProps,
  IBlogPostsProps,
  TPost,
};
