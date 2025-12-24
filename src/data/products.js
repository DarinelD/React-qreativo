const products = [
  { id: "1", name: "Remera Nike", category: "remeras", price: 100 },
  { id: "2", name: "Remera Adidas", category: "remeras", price: 200 },
  { id: "3", name: "Remera Puma", category: "remeras", price: 300 },
  { id: "4", name: "Remera Jordan", category: "remeras", price: 100 },
  { id: "5", name: "Pantalón Adidas", category: "pantalones", price: 200 },
  { id: "6", name: "Pantalon Puma", category: "pantalones", price: 300 },
  { id: "7", name: "Pantalon Nike", category: "pantalones", price: 100 },
  { id: "8", name: "Pantalón Jordan", category: "pantalones", price: 200 },
  { id: "9", name: "Zapatillas Puma", category: "zapatillas", price: 300 },
  { id: "10", name: "Zapatillas Nike", category: "zapatillas", price: 100 },
  { id: "11", name: "Zapatillas Adidas", category: "zapatillas", price: 200 },
  { id: "12", name: "Zapatillas Jordan", category: "zapatillas", price: 300 },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === id));
    }, 500);
  });
};
