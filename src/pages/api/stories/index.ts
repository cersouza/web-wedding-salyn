import { NextApiRequest, NextApiResponse } from "next";
import Events from '../../../config/data.json';

export default function(req: NextApiRequest, res: NextApiResponse) {
  const eventsUniqueNames = Events.map(event => event.uniqueName);
  
  const data = {
    ok: true,
    data: eventsUniqueNames
  }

  res.status(200).json(data);
} 