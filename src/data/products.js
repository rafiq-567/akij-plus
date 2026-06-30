export const categories = [
  {
    name: "Men",
    count: 113,
    subcategories: [
      {
        name: "Shirt",
        count: 19,
        children: [
          { name: "Casual Shirt", count: 10 },
          { name: "Formal Shirt", count: 9 },
        ],
      },
      {
        name: "Half Sleeve T-shirt",
        count: 15,
        children: [
          { name: "Drop Shoulder T-Shirt", count: 8 },
          { name: "T-Shirt", count: 7 },
        ],
      },
      {
        name: "Pant",
        count: 7,
        children: [
          { name: "Denim Jeans", count: 4 },
          { name: "Mens Denim Cargo Pant", count: 3 },
        ],
      },
      {
        name: "Polo T-shirt",
        count: 18,
        children: [
          { name: "Sports T-shirt", count: 7 },
          { name: "Classic", count: 11 },
        ],
      },
      {
        name: "Panjabi",
        count: 23,
        children: [
          { name: "Premium Panjabi", count: 19 },
          { name: "Printed Panjabi", count: 2 },
          { name: "Regular Panjabi", count: 2 },
        ],
      },
      { name: "Accessories", count: 31, children: [] },
    ],
  },
];

export const products = [
  {
    id: 140,
    slug: "akij-men-s-premium-panjabi",
    name: "Akij Men's Premium Panjabi",
    image: "/products/panjabi-1.jpg",
    price: 1250,
    originalPrice: 2450,
    save: 1200,
  },
  {
    id: 141,
    slug: "men-s-denim-jeans",
    name: "Men's Denim Jeans",
    image: "/products/jeans-1.jpg",
    price: 1200,
    originalPrice: 1800,
    save: 600,
  },
  {
    id: 142,
    slug: "premium-polo-t-shirt",
    name: "Premium Polo T-Shirt",
    image: "/products/polo-1.jpg",
    price: 600,
    originalPrice: 950,
    save: 350,
  },
  {
    id: 143,
    slug: "classic-polo-t-shirt-black",
    name: "Classic Polo T-Shirt",
    image: "/products/polo-2.jpg",
    price: 650,
    originalPrice: 1000,
    save: 350,
  },
];