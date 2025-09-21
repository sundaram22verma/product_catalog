// Utility functions for the application

export const filterAndSortProducts = (products, selectedCategory, searchTerm, sortOrder) => {
  return products
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
};

export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const validateProductData = (productData) => {
  const { name, description, price, imageUrl, categoryId } = productData;
  return name && description && price && imageUrl && categoryId;
};
