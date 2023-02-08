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
  const projectId = req.query.projectId;
  //   const portfolioData = await fetch(apiDataRoute("portfolio"));
  //   const portfolioDataJson: PageContent = await portfolioData.json();
  //   res.status(200).json({
  //     data: portfolioDataJson,
  //     errors: [],
  //   });
}
