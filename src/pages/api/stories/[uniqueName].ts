import { NextApiRequest, NextApiResponse } from "next";
import GetStoryDetail from "../../../app/use-cases/GetStoryDetailUseCase";
import Events from '../../../config/data.json';

const getStoryDetail = new GetStoryDetail();

export default async function(req: NextApiRequest, res: NextApiResponse) {
  const { uniqueName } = req.query as { uniqueName: string };

  const event = await getStoryDetail.execute({ uniqueName });
  
  const data = {
    ok: true,
    data: event
  }

  res.status(200).json(data);
} 