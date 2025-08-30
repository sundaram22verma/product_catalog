package com.madhav.productcatalog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProductcatalogApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductcatalogApplication.class, args);

        System.out.println("Product Catalog Service is running...");
    }
}

