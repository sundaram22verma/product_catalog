import { useEffect, useState } from 'react'
import '../styles/App.css'
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch('http://localhost:8081/api/products'),
          fetch('http://localhost:8081/api/categories')
        ]);
        
        const productsData = await productsResponse.json();
        const categoriesData = await categoriesResponse.json();
        
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId ? Number(categoryId) : null);
  };

  const filteredProducts = products
              .filter(product => {
                return (
                  (selectedCategory ? product.category.id === selectedCategory : true) 
                  && 
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
              })
              .sort((a, b) => {
                if (sortOrder === "asc"){
                  return a.price - b.price;
                } else {
                  return b.price - a.price;
                }
              });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setSortOrder("asc");
  };

  return (
    <div className='app-container'>
      {/* Header Section */}
      <header className='app-header'>
        <div className='container'>
          <div className='header-content'>
            <h1 className='app-title'>
              <span className='title-icon'>🛍️</span>
              Product Catalog
            </h1>
            <p className='app-subtitle'>Discover amazing products at great prices</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className='app-nav'>
        <div className='container'>
          <div className='nav-content'>
            <a href='/' className='nav-link active'>Browse Products</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className='main-content'>
        <div className='container'>
          {/* Filters Section */}
          <div className='filters-section'>
            <div className='filters-header'>
              <h2>Find Your Perfect Product</h2>
              <button 
                className='clear-filters-btn' 
                onClick={clearFilters}
                disabled={!searchTerm && !selectedCategory && sortOrder === "asc"}
              >
                Clear Filters
              </button>
            </div>

            <div className='filters-grid'>
              <div className='filter-group'>
                <label className='filter-label'>Category</label>
                <CategoryFilter categories={categories} onSelect={handleCategorySelect}/>
              </div>

              <div className='filter-group'>
                <label className='filter-label'>Search Products</label>
                <div className='search-input-wrapper'>
                  <input
                    type='text'
                    className='search-input'
                    placeholder='Search for products...'
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <span className='search-icon'>🔍</span>
                </div>
              </div>

              <div className='filter-group'>
                <label className='filter-label'>Sort By</label>
                <select className='sort-select' value={sortOrder} onChange={handleSortChange}>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className='results-section'>
            {loading ? (
              <div className='loading-container'>
                <div className='loading-spinner'></div>
                <p>Loading products...</p>
              </div>
            ) : filteredProducts.length ? (
              <>
                <div className='results-header'>
                  <h3>Products ({filteredProducts.length})</h3>
                </div>
                <ProductList products={filteredProducts}/>
              </>
            ) : (
              <div className='no-results'>
                <div className='no-results-icon'>🔍</div>
                <h3>No Products Found</h3>
                <p>Try adjusting your search criteria or browse all categories</p>
                <button className='btn-primary' onClick={clearFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='app-footer'>
        <div className='container'>
          <p>&copy; 2024 Product Catalog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
