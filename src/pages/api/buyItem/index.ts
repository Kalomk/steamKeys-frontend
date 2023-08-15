import { BuyedItemModel } from '@/mongo/schemas/buyed-item.schema';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../mongo/mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Extract the data from the request body
  const { buyerEmail, userName } = req.body;

  connectToDatabase();
  try {
    await BuyedItemModel.create({ buyerEmail, userName });
    res.status(200).json({ message: 'item buyed successfully' });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
