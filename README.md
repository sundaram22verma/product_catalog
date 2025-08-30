# Product Catalog Application

A full-stack e-commerce product catalog application built with Spring Boot backend and React frontend. This application allows users to browse products, filter by categories, search products, and sort by price.

## 🚀 Features

- **Product Management**: View and manage products with details like name, description, price, and image
- **Category Management**: Organize products by categories
- **Search Functionality**: Search products by name
- **Category Filtering**: Filter products by specific categories
- **Price Sorting**: Sort products by price (low to high or high to low)
- **Responsive Design**: Modern UI built with React Bootstrap
- **RESTful API**: Complete backend API for product and category operations

## 🛠️ Technology Stack

### Backend
- **Spring Boot 3.2.11** - Java framework for building web applications
- **Spring Data JPA** - Data access layer
- **MySQL** - Primary database
- **H2 Database** - In-memory database for testing
- **Lombok** - Reduces boilerplate code
- **Java 17** - Programming language

### Frontend
- **React 18.3.1** - JavaScript library for building user interfaces
- **Vite** - Build tool and development server
- **React Bootstrap** - UI component library
- **Bootstrap 5.3.3** - CSS framework

## 📁 Project Structure

```
product_catalog/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── ProductList.jsx  # Product display component
│   │   ├── CategoryFilter.jsx # Category filter component
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
└── productcatalog/          # Spring Boot backend application
    ├── src/main/java/com/madhav/productcatalog/
    │   ├── controller/      # REST controllers
    │   ├── model/          # Entity models
    │   ├── repository/     # Data access layer
    │   ├── service/        # Business logic
    │   └── config/         # Configuration classes
    ├── src/main/resources/
    │   └── application.properties
    └── pom.xml
```

## 🚀 Getting Started

### Prerequisites

- **Java 17** or higher
- **Node.js 16** or higher
- **MySQL 8.0** or higher
- **Maven 3.6** or higher

### Database Setup

1. Create a MySQL database named `product-catalog`
2. Update database credentials in `productcatalog/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/product-catalog
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd productcatalog
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8081`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:5173`

## 📖 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get category by ID
- `POST /api/categories` - Create new category
- `PUT /api/categories/{id}` - Update category
- `DELETE /api/categories/{id}` - Delete category

## 🎯 Usage

1. **Browse Products**: View all available products on the main page
2. **Search**: Use the search bar to find specific products by name
3. **Filter by Category**: Select a category from the dropdown to filter products
4. **Sort by Price**: Choose sorting order (low to high or high to low)
5. **Product Details**: Click on products to view detailed information

## 🔧 Development

### Building for Production

**Backend:**
```bash
cd productcatalog
mvn clean package
```

**Frontend:**
```bash
cd frontend
npm run build
```

## 📝 Environment Variables

For production deployment, consider using environment variables for sensitive information:

```properties
# Database Configuration
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

# Server Configuration
server.port=${SERVER_PORT:8081}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Madhav** - Initial work

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the amazing frontend library
- Bootstrap team for the responsive UI components
