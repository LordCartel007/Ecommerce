import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProduct, setgoToProduct] = useState(false);
  const router = useRouter();

  async function saveProduct(ev) {
    ev.preventDefault();
    if (_id) {
      const data = { title, description, price };
      await axios.put("/api/products", data);
    } else {
      await axios.post("/api/products", data);
      // redirecting back to page after new product is created
      setgoToProduct(true);
    }
  }
  if (goToProduct) {
    router.push("/products");
  }

  return (
    <form onSubmit={createProduct}>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product Name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Description</label>
      <textarea
        placeholder="description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <label>Price (in USD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
