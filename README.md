# Qreativo – E-commerce de Publicidad 🛍️

Qreativo es una **Single Page Application (SPA)** de e-commerce desarrollada con **React**, orientada a una empresa de publicidad que ofrece productos personalizados como tazas, playeras, gorras, termos y lonas.

La aplicación permite navegar por el catálogo, filtrar por categorías, ver el detalle de cada producto, agregar productos al carrito y finalizar una compra, generando una orden almacenada en **Firebase Firestore**.

---

## 🚀 Tecnologías utilizadas

- **React + Vite**
- **React Router DOM**
- **Context API**
- **Firebase / Firestore**
- **TailwindCSS**
- **JavaScript (ES6+)**

---

## 🧭 Funcionalidades principales

### 🛍️ Catálogo de productos
- Listado dinámico de productos obtenidos desde Firestore.
- Filtrado por categorías mediante rutas dinámicas.
- Renderizado utilizando `Array.map()` y la prop `key`.

### 🔍 Detalle de producto
- Vista individual de cada producto.
- Componente `ItemCount` para seleccionar cantidad.
- Validación de stock.
- Opción para agregar productos al carrito.
- El contador se oculta luego de agregar el producto.

### 🧭 Navegación
- Navegación SPA sin recarga de página.
- Rutas implementadas con React Router:
  - `/` → Catálogo general
  - `/category/:categoryId` → Catálogo por categoría
  - `/item/:itemId` → Detalle del producto
  - `/cart` → Carrito de compras
  - `/checkout` → Finalizar compra
- Ruta `404` para páginas inexistentes.

### 🛒 Carrito de compras
- Estado global manejado con **Context API**.
- Visualización de productos agregados.
- Cálculo de subtotales y total.
- Opción para vaciar el carrito.
- Icono de carrito con contador dinámico (`CartWidget`).

### 🧾 Checkout
- Formulario para ingresar datos del comprador:
  - Nombre
  - Email 
- Validaciones de formulario.
- Generación de una orden en Firestore.
- Visualización del ID de la orden generada.

### 🎨 Experiencia de usuario
- Estilos aplicados con **TailwindCSS**.
- Renderizado condicional:
  - Loader de carga
  - Carrito vacío
  - Producto sin stock
- Interfaz clara y responsive.

---

## 🔥 Firebase

- **Colección `products`**: almacena todos los productos del catálogo.
- **Colección `orders`**: almacena las órdenes generadas al finalizar una compra.
- Configuración mediante variables de entorno (`.env`).

---

## 🗂️ Estructura del proyecto
src/
│
├── components/
│ ├── NavBar
│ ├── CartWidget
│ ├── Item
│ ├── ItemList
│ ├── ItemDetail
│ ├── ItemCount
│ ├── Cart
│ ├── CartItem
│ └── CheckoutForm
│ └── Checkout
│
├── containers/
│ ├── ItemListContainer
│ └── ItemDetailContainer
│
├── context/
│ └── CartContext
│
├── services/
│ └── firebase.js
│
├── App.jsx
├── main.jsx
└── index.css

---

## ▶️ Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone https://github.com/DarinelD/React-qreativo.git
Instalar dependencias:
npm install
Ejecutar el proyecto:
npm run dev
🌐 Deploy (opcional)
El proyecto pued
