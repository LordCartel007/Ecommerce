import { model, Schema, models } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

// using the models.product object to avoid recompiling the model
export const Product = models.Product || model("Product", ProductSchema);
