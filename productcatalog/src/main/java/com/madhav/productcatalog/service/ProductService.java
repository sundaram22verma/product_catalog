package com.madhav.productcatalog.service;

import com.madhav.productcatalog.model.Product;
import com.madhav.productcatalog.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public List<Product> getProductByCategory(Long categoryId){
        return productRepository.findByCategoryId(categoryId);
    }

    // Create a new product
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }
}
