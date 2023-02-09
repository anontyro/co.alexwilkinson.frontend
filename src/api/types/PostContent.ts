export type GhostPost = {
  id: string;
  created_at: string;
  excerpt: string;
  feature_image: string;
  feature_image_alt: string;
  feature_image_caption: string;
  featured: boolean;
  html: string;
  publushed_at: string;
  reading_time: number;
  slug: string;
  title: string;
  updated_at: string;
  url: string;
  uuid: string;
  visibility: string;
};

export type PostContent = {
  posts: GhostPost[];
};
