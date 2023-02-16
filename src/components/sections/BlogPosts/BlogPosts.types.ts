// Interfaces
// Blog Post
interface IBlogPostProps {
  title: string;
  date: string;
  tags: TBlogPostTag[];
  description: string;
  slug: string;
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

// Exports
export type {
  IBlogPostProps,
  TBlogPostTag,
  IBlogPostTagsProps,
  IBlogPostTagProps,
};
