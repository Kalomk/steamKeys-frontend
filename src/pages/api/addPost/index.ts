import { NextApiRequest, NextApiResponse } from 'next';
import { SecretDataModel } from '../../../mongo/schemas/secret-data.schema';
import { connectToDatabase } from '../../../mongo/mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Extract the data from the request body
  const { email, secretKey } = req.body;

  try {
    // Connect to the MongoDB database
    await connectToDatabase();
    // Insert the data into the "post_secret" collection using Mongoose
    await SecretDataModel.create({ email, secretKey });

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
