export const showcaseCategories = [
  {
    name: "Shirt",
    featuredImage: "/shirt/shirt-3.jpg",
    products: [
      { id: 1, name: "Men's Premium Formal Shirt - Ralph Lauren", image: "/shirt/shirt-3.jpg", price: 1000, originalPrice: 1500 },
      { id: 2, name: "Men's Premium Formal Shirt", image: "/shirt/shirt-3.jpg", price: 950, originalPrice: 1150 },
      { id: 3, name: "Men's Premium Casual Shirt", image: "/shirt/shirt-3.jpg", price: 900, originalPrice: 1100 },
      { id: 4, name: "Men's Premium Casual Shirt", image: "/shirt/shirt-3.jpg", price: 900, originalPrice: 1100 },
      { id: 5, name: "Men's Premium Formal Shirt", image: "/shirt/shirt-3.jpg", price: 950, originalPrice: 1150 },
      { id: 6, name: "Men's Premium Formal Shirt - Ralph Lauren", image: "/shirt/shirt-3.jpg", price: 1000, originalPrice: 1500 },
      { id: 7, name: "Men's Premium Casual Shirt", image: "/shirt/shirt-3.jpg", price: 900, originalPrice: 1100 },
      { id: 8, name: "Men's Premium Formal Shirt - Ralph Lauren", image: "/shirt/shirt-3.jpg", price: 1000, originalPrice: 1500 },
    ],
  },
  {
    name: "Panjabi",
    featuredImage: "/shirt/shirt-2.jpg",
    products: Array.from({ length: 8 }, (_, i) => ({
      id: 100 + i,
      name: "Men's Premium Panjabi",
      image: "/shirt/shirt-2.jpg",
      price: 1250,
      originalPrice: 2450,
    })),
  },
  {
    name: "Polo T-Shirt",
    featuredImage: "/shirt/shirt-2.jpg",
    products: Array.from({ length: 8 }, (_, i) => ({
      id: 200 + i,
      name: "Premium Polo T-Shirt",
      image: "/shirt/shirt-2.jpg",
      price: 600,
      originalPrice: 950,
    })),
  },
  {
    name: "Pant",
    featuredImage: "/shirt/shirt-2.jpg",
    products: Array.from({ length: 8 }, (_, i) => ({
      id: 300 + i,
      name: "Men's Denim Jeans",
      image: "/shirt/shirt-2.jpg",
      price: 1200,
      originalPrice: 1800,
    })),
  },
  {
    name: "Half Sleeve T-Shirt",
    featuredImage: "/shirt/shirt-2.jpg",
    products: Array.from({ length: 8 }, (_, i) => ({
      id: 400 + i,
      name: "Drop Shoulder T-Shirt",
      image: "/shirt/shirt-3.jpg",
      price: 550,
      originalPrice: 850,
    })),
  },
  {
    name: "Accessories",
    featuredImage: "/shirt/shirt-2.jpg",
    products: Array.from({ length: 8 }, (_, i) => ({
      id: 500 + i,
      name: "Premium Accessory",
      image: "/shirt/shirt-3.jpg",
      price: 350,
      originalPrice: 600,
    })),
  },
];