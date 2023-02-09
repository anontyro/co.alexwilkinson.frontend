// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PageContent from "@/api/types/PageContent";
import type { NextApiRequest, NextApiResponse } from "next";

export type PostError = {
  message: string;
  id: string;
  context: string;
};

type Data = {
  data: PageContent | null;
  errors: PostError[];
};

const getPost = async (projectId: string) => {
  const root = process.env.BLOG_URL;
  const ghostKey = process.env.GHOST_API_CONTENT_KEY;
  const url = `${root}/ghost/api/content/posts/${projectId}/?key=${ghostKey}`;

  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projectId = req.query.projectId;
  try {
    const errors: PostError[] = [];
    const post = await getPost(projectId as string);
    if (post.errors) {
      errors.push(...post.errors);
    }
    res.status(200).json({
      data: post,
      errors: [...errors],
    });
  } catch (err: unknown) {
    res.status(500).json({
      data: null,
      errors: [
        {
          message: (err as Error).message,
          id: projectId as string,
          context: "an error occurred while fetching the post",
        },
      ],
    });
  }
}
