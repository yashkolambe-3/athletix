import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    // Responsive grid for rendering products
    <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}