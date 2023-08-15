// secret-data.schema.ts

import { Schema, model, Document, models } from 'mongoose';

export interface SecretData {
  email: string;
  secretKey: string;
}

export interface SecretDataDocument extends Document, SecretData {}

const secretDataSchema = new Schema<SecretData>({
  email: { type: String, required: true },
  secretKey: { type: String, required: true },
});

export const SecretDataModel =
  models.PostSecret || model<SecretDataDocument>('PostSecret', secretDataSchema);
