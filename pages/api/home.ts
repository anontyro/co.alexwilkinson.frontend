// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { apiDataRoute } from "@/api/routes";
import PageContent from "@/api/types/PageContent";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: PageContent;
  errors: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = apiDataRoute("home");
  const homeData = await fetch(url);
  const homeDataJson: PageContent = await homeData.json();
  res.status(200).json({
    data: homeDataJson,
    errors: [],
  });
}
