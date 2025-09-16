import { useEffect, useState } from "react";
import axios from "axios";
import './admin.css';

export default function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [catName, setCatName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8081/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => {
        console.error("Error fetching categories:", err);
        setCategories([]); // fallback if backend is not running
      })
      .finally(() => setLoadingCategories(false));
  }, []);

  const addCategory = async (e) => {
    e.preventDefault();
    if (!catName) return;
    try {
      const res = await axios.post("http://localhost:8081/api/categories", { name: catName });
      setCategories([...categories, res.data]);
      setCatName("");
      alert("Category added!");
    } catch (err) {
      console.error("Error adding category:", err);
      alert("Error adding category. Is the backend running?");
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !imageUrl || !categoryId) return;

    try {
      const productData = {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
        category: { id: parseInt(categoryId) }
      };
      await axios.post("http://localhost:8081/api/products", productData);
      setName(""); setDescription(""); setPrice(""); setImageUrl(""); setCategoryId("");
      alert("Product added!");
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Error adding product. Is the backend running?");
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <h2>Add Category</h2>
      <form onSubmit={addCategory} className="admin-form">
        <input
          className="form-control"
          type="text"
          placeholder="Category name"
          value={catName}
          onChange={e => setCatName(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Add Category</button>
      </form>

      <h2>Add Product</h2>
      <form onSubmit={addProduct} className="admin-form">
        <input className="form-control" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input className="form-control" type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <input className="form-control" type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <input className="form-control" type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required />

        <select className="form-control" value={categoryId} onChange={e => setCategoryId(e.target.value)} required>
          <option value="">--Select Category--</option>
          {loadingCategories ? (
            <option disabled>Loading categories...</option>
          ) : categories.length ? (
            categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))
          ) : (
            <option disabled>No categories available</option>
          )}
        </select>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}
