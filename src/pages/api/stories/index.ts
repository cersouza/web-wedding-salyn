import { NextApiRequest, NextApiResponse } from "next";
import GetTopStories from "../../../app/use-cases/GetTopStoriesUseCase";

const getTopStories = new GetTopStories();

export default async function(req: NextApiRequest, res: NextApiResponse) {
  const eventsUniqueNames = await getTopStories.execute();
  
  const data = {
    ok: true,
    data: eventsUniqueNames
  }

  res.status(200).json(data);
} 