import { NextApiRequest, NextApiResponse } from "next";
import Events from '../../../config/data.json';

export default function(req: NextApiRequest, res: NextApiResponse) {
  const event = Events.find(event => event.uniqueName == req.query.uniqueName);
  
  const data = {
    ok: true,
    data: event
  }

  res.status(200).json(data);
} 