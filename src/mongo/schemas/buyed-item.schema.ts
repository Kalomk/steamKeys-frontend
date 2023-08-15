// secret-data.schema.ts

import { Schema, model, Document, models } from 'mongoose';

export interface BuyedItem {
  buyerEmail: string;
  userName: string;
  postId: string;
}

export interface BuyedItemDocument extends Document, BuyedItem {}

const BuyedItemSchema = new Schema<BuyedItem>({
  buyerEmail: { type: String, required: true },
  userName: { type: String, required: true },
  postId: { type: String },
});

export const BuyedItemModel =
  models.BuyedItem || model<BuyedItemDocument>('BuyedItem', BuyedItemSchema);
