const ProductList = ({ products }) => {
    return (
        <div className="products-grid">
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <div className="product-image-container">
                        <img
                            src={product.imageUrl || 'https://placehold.co/600x400'}
                            className="product-image"
                            alt={product.name}
                            loading="lazy"
                        />
                        <div className="product-overlay">
                            <button className="btn btn-outline-light btn-sm">
                                View Details
                            </button>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="product-category">
                            {product.category?.name || 'Uncategorized'}
                        </div>
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <div className="product-footer">
                            <div className="product-price">
                                <span className="price-currency">$</span>
                                <span className="price-amount">{product.price.toFixed(2)}</span>
                            </div>
                            <button className="btn btn-primary btn-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList;