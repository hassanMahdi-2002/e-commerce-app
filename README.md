# 🛒 FreshCart

A responsive E-Commerce front-end built with React — product browsing, dynamic product pages, authentication forms, and a full shopping cart with persistent state.

![FreshCart Home](./Vimage/home.png)
![FreshCart Cart](./Vimage/cart.png)
![FreshCart details](./Vimage/desc.png)

## 🔗 Live Demo

[View Live](#) <!-- Replace with your Vercel/Netlify link -->

## ✨ Features

- **Shopping cart** — add items, increment/decrement quantities (auto-removal at zero), delete items, and live calculation of subtotal, shipping, and total.
- **Persistent state** — cart data is stored in LocalStorage and restored on reload.
- **Global state** — cart logic centralized in a Context API provider, consumed across the app.
- **SPA routing** — `react-router-dom` v6 with `createBrowserRouter`, covering Home, Brands, Product Details, Cart, Login, Register, and a custom 404 page.
- **Dynamic product pages** — product data resolved from the URL via `useParams`.
- **Form validation** — Formik-powered Login and Register forms with real-time feedback, Egyptian phone-number validation, email format checks, and password confirmation.
- **Responsive design** — mobile-first Bootstrap 5 grid with custom CSS for hover states and transitions.

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Core | React 18, JavaScript (ES6+), HTML5, CSS3 |
| Routing | React Router DOM v6 |
| State | React Context API |
| Forms | Formik |
| HTTP | Axios |
| UI | Bootstrap 5, FontAwesome, Custom CSS |

Authentication requests are sent to mock APIs (`reqres.in`, `jsonplaceholder`) to simulate backend communication.

## 📂 Project Structure

src/
├── Components/ # UI components (Home, Cart, Navbar, Login, Register, ...)
├── Context/ # CartContext.jsx — global cart state
├── dummyData/ # Local JSON data for brands and products
├── Layout/ # Shared wrapper (Navbar + Footer)
└── App.js # Router configuration


## ⚙️ Running Locally

```bash
git clone https://github.com/hassanmahdi-2002/e-commerce-app.git
cd e-commerce-app
npm install
npm start
```

The app runs on `http://localhost:3000`.

## 🚧 Roadmap

- [ ] Connect to a real backend API
- [ ] Wishlist and product search
- [ ] Checkout flow

## 📬 Contact

**Hassan Mahdi Hassan Diab** — [LinkedIn](www.linkedin.com/in/hassan-mahdi-82b748352) · [Email](hassanmahdi102002.com)
