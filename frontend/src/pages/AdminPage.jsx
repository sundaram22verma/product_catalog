import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/admin.css';

export default function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [catName, setCatName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    axios.get("http://localhost:8081/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => {
        console.error("Error fetching categories:", err);
        setCategories([]);
      })
      .finally(() => setLoadingCategories(false));
  }, []);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const addCategory = async (e) => {
    e.preventDefault();
    if (!catName.trim()) return;
    
    setIsSubmitting(true);
    try {
      const res = await axios.post("http://localhost:8081/api/categories", { name: catName.trim() });
      setCategories([...categories, res.data]);
      setCatName("");
      showMessage('success', 'Category added successfully!');
    } catch (err) {
      console.error("Error adding category:", err);
      showMessage('error', 'Error adding category. Please check if the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim() || !price || !imageUrl.trim() || !categoryId) return;

    setIsSubmitting(true);
    try {
      const productData = {
        name: name.trim(),
        description: description.trim(),
        price: parseFloat(price),
        imageUrl: imageUrl.trim(),
        category: { id: parseInt(categoryId) }
      };
      await axios.post("http://localhost:8081/api/products", productData);
      setName(""); 
      setDescription(""); 
      setPrice(""); 
      setImageUrl(""); 
      setCategoryId("");
      showMessage('success', 'Product added successfully!');
    } catch (err) {
      console.error("Error adding product:", err);
      showMessage('error', 'Error adding product. Please check if the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-container">
      {/* Header Section */}
      <header className="admin-header">
        <div className="container">
          <div className="header-content">
            <h1 className="admin-title">
              <span className="title-icon">⚙️</span>
              Admin Panel
            </h1>
            <p className="admin-subtitle">Manage your product catalog</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="admin-nav">
        <div className="container">
          <div className="nav-content">
            <a href="/admin" className="nav-link active">Admin Panel</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="admin-main">
        <div className="container">
          {/* Message Display */}
          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          {/* Admin Forms */}
          <div className="admin-forms">
            {/* Add Category Section */}
            <section className="admin-section">
              <div className="section-header">
                <h2>
                  <span className="section-icon">📁</span>
                  Add New Category
                </h2>
                <p>Create a new product category</p>
              </div>
              
              <form onSubmit={addCategory} className="admin-form">
                <div className="form-group">
                  <label htmlFor="catName" className="form-label">Category Name</label>
                  <input
                    id="catName"
                    className="form-input"
                    type="text"
                    placeholder="Enter category name"
                    value={catName}
                    onChange={e => setCatName(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting || !catName.trim()}
                >
                  {isSubmitting ? 'Adding...' : 'Add Category'}
                </button>
              </form>
            </section>

            {/* Add Product Section */}
            <section className="admin-section">
              <div className="section-header">
                <h2>
                  <span className="section-icon">📦</span>
                  Add New Product
                </h2>
                <p>Add a new product to your catalog</p>
              </div>
              
              <form onSubmit={addProduct} className="admin-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input 
                      id="name"
                      className="form-input" 
                      type="text" 
                      placeholder="Enter product name" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="price" className="form-label">Price ($)</label>
                    <input 
                      id="price"
                      className="form-input" 
                      type="number" 
                      step="0.01"
                      min="0"
                      placeholder="0.00" 
                      value={price} 
                      onChange={e => setPrice(e.target.value)} 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea 
                    id="description"
                    className="form-textarea" 
                    placeholder="Enter product description" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                    required 
                    disabled={isSubmitting}
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="imageUrl" className="form-label">Image URL</label>
                  <input 
                    id="imageUrl"
                    className="form-input" 
                    type="url" 
                    placeholder="https://example.com/image.jpg" 
                    value={imageUrl} 
                    onChange={e => setImageUrl(e.target.value)} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="categoryId" className="form-label">Category</label>
                  <select 
                    id="categoryId"
                    className="form-select" 
                    value={categoryId} 
                    onChange={e => setCategoryId(e.target.value)} 
                    required
                    disabled={isSubmitting}
                  >
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
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting || !name.trim() || !description.trim() || !price || !imageUrl.trim() || !categoryId}
                >
                  {isSubmitting ? 'Adding Product...' : 'Add Product'}
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="admin-footer">
        <div className="container">
          <p>&copy; 2024 Product Catalog Admin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}