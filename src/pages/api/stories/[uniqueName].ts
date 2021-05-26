import { NextApiRequest, NextApiResponse } from "next";
import GetStoryDetail from "../../../app/use-cases/GetStoryDetailUseCase";
import UpdateStoryDataUseCase from "../../../app/use-cases/UpdateStoryDataUseCase";
import Events from '../../../config/data.json';
import Story from "../../../domain/Story";

const updateStoryData = new UpdateStoryDataUseCase();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { uniqueName } = req.query as { uniqueName: string };
    const { updates } = req.body as { updates: Partial<Story> };

    try {
      await updateStoryData.execute({ uniqueName, updates });

      const data = {
        ok: true,
        message: 'Register updated',
      }
      
      res.status(200).json(data);

    } catch (error) {
      const data = {
        ok: false,
        message: 'An error has ocurred during update operation',
        error,
      }

      res.status(500).json(data);
    }
  } else {
    res.status(404);
  }
}