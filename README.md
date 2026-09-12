# ATHLETIX — Premium Sports E-Commerce

Modern React sports store built with React, Tailwind CSS, Redux Toolkit, React Redux, React Router DOM and Lucide React.

## Run

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` Home
- `/shop` Shop
- `/product/:id` Product details
- `/cart` Cart
- `/history` Order history

## Redux Cart

State contains:
- `items`
- `totalQuantity`
- `totalPrice`

Actions:
- `addToCart`
- `removeFromCart`
- `increaseQuantity`
- `decreaseQuantity`
- `clearCart`

Product images are remote Unsplash URLs, so internet access is required for the supplied imagery.
