import { connect } from 'mongoose';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export async function connectToDatabase() {
  const uri =
    'mongodb+srv://padov6666:lublukiski777@cluster0.nh6yehy.mongodb.net/?retryWrites=true&w=majority';
  try {
    await connect(uri);
    console.log('Connected to MongoDB');
    console.log(uri);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
