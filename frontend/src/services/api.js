const API_BASE_URL = 'http://localhost:8081/api';

export const apiService = {
  // Products
  getProducts: () => fetch(`${API_BASE_URL}/products`).then(res => res.json()),
  createProduct: (productData) => 
    fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    }).then(res => res.json()),

  // Categories
  getCategories: () => fetch(`${API_BASE_URL}/categories`).then(res => res.json()),
  createCategory: (categoryData) => 
    fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categoryData)
    }).then(res => res.json())
};
