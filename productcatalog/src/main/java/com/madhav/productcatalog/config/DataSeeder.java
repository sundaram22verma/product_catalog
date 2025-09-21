package com.madhav.productcatalog.config;

import com.madhav.productcatalog.model.Category;
import com.madhav.productcatalog.model.Product;
import com.madhav.productcatalog.repository.CategoryRepository;
import com.madhav.productcatalog.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Clear all existing data
        productRepository.deleteAll();
        categoryRepository.deleteAll();

        // Create Categories
        Category electronics = new Category();
        electronics.setName("Electronics");

        Category clothing = new Category();
        clothing.setName("Clothing");

        Category home = new Category();
        home.setName("Home and Kitchen");

        categoryRepository.saveAll(Arrays.asList(electronics, home, clothing));

        // Create Products
        Product phone = new Product();
        phone.setName("SmartPhone");
        phone.setDescription("Latest model smartphone with amazing features");
        phone.setImageUrl("https://img.joomcdn.net/73baffb94bcb19b45d046114d9e6d4d3f66120ef_original.jpeg");
        phone.setPrice(699.99);
        phone.setCategory(electronics);

        Product laptop = new Product();
        laptop.setName("Laptop");
        laptop.setDescription("High-performance laptop for work and play.");
        laptop.setImageUrl("https://cdn.thewirecutter.com/wp-content/media/2024/11/BEST-LAPTOPS-PHOTO-VIDEO-EDITING-2048px-asus3.jpg");
        laptop.setPrice(999.99);
        laptop.setCategory(electronics);

        Product jacket = new Product();
        jacket.setName("Winter Jacket");
        jacket.setDescription("Warm and cozy jacket for winter.");
        jacket.setImageUrl("https://image.hm.com/assets/hm/09/6b/096b99645bac3ee22a18fdfe3ebef5a79dcc3223.jpg?imwidth=1260");
        jacket.setPrice(129.99);
        jacket.setCategory(clothing);

        Product blender = new Product();
        blender.setName("Blender");
        blender.setDescription("High-speed blender for smoothies and more.");
        blender.setImageUrl("https://westinghousesmallappliances.com.au/cdn/shop/files/Westinghouse_Blender_800W_Turn_Dial_Control_1.8L_Glass_Jug_-_-_-885087.jpg?v=1741662896&width=1100");
        blender.setPrice(89.99);
        blender.setCategory(home);

        Product headphones = new Product();
        headphones.setName("Wireless Headphones");
        headphones.setDescription("Noise-cancelling wireless headphones with long battery life.");
        headphones.setImageUrl("https://m.media-amazon.com/images/I/71Yl4L6JVML._UF1000,1000_QL80_.jpg");
        headphones.setPrice(199.99);
        headphones.setCategory(electronics);

        Product smartwatch = new Product();
        smartwatch.setName("Smartwatch");
        smartwatch.setDescription("Feature-packed smartwatch with fitness tracking.");
        smartwatch.setImageUrl("https://www.boat-lifestyle.com/cdn/shop/files/3_e12c624a-7958-4752-b11b-c023c7ea97b0_800x.jpg?v=1724126065");
        smartwatch.setPrice(249.99);
        smartwatch.setCategory(electronics);

        Product tshirt = new Product();
        tshirt.setName("Graphic T-Shirt");
        tshirt.setDescription("Comfortable cotton t-shirt with cool graphics.");
        tshirt.setImageUrl("https://jolchobi.in/wp-content/uploads/2024/11/Goa.jpg");
        tshirt.setPrice(19.99);
        tshirt.setCategory(clothing);

        Product coffeeMaker = new Product();
        coffeeMaker.setName("Coffee Maker");
        coffeeMaker.setDescription("Brew the perfect cup of coffee every morning.");
        coffeeMaker.setImageUrl("https://nestasia.in/cdn/shop/products/DSC02414_7485de37-963a-416c-836f-aa14de40f6e5.jpg?v=1652521947&width=600");
        coffeeMaker.setPrice(79.99);
        coffeeMaker.setCategory(home);

        Product sneakers = new Product();
        sneakers.setName("Running Sneakers");
        sneakers.setDescription("Lightweight and comfortable running sneakers.");
        sneakers.setImageUrl("https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1741889693-asic-superblast-2-67d32026850eb.jpg?crop=0.803xw:0.803xh;0.109xw,0.0673xh&resize=980:*");
        sneakers.setPrice(59.99);
        sneakers.setCategory(clothing);

        Product microwave = new Product();
        microwave.setName("Microwave Oven");
        microwave.setDescription("Compact microwave oven for quick meals.");
        microwave.setImageUrl("https://m.media-amazon.com/images/I/71Xzo-0aKYL._SX679_.jpg");
        microwave.setPrice(119.99);
        microwave.setCategory(home);

        Product hhproduct = new Product();
        hhproduct.setName("House Cleaning Products");
        hhproduct.setDescription("Keeping your home clean and organized is essential for maintaining a healthy living environment.");
        hhproduct.setImageUrl("https://maggymaid.com/wp-content/uploads/2019/06/How-Much-Should-I-Spend-on-House-Cleaning-Products-2048x1152.png");
        hhproduct.setPrice(500.00);
        hhproduct.setCategory(home);

        productRepository.saveAll(Arrays.asList(phone, laptop, jacket, blender, headphones, smartwatch, tshirt, coffeeMaker, sneakers, microwave, hhproduct));
    }
}
