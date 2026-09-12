import { Link } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#17191b]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {/* Product badge (e.g., 'New', 'Sale') */}
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold tracking-widest backdrop-blur">
          {product.badge}
        </span>
        <span className="absolute bottom-4 right-4 rounded-full bg-white p-2 text-black opacity-0 transition group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>

      {/* Product info section */}
      <div className="flex items-start justify-between gap-3 px-1 pt-4">
        <div>
          <p className="text-sm font-bold">{product.name}</p>
          <p className="mt-1 text-xs text-white/40">{product.category}</p>
        </div>
        <div className="text-right">
          {/* Updated currency to Indian Rupee (₹) */}
          <p className="text-sm font-bold">₹{product.price}</p>
          <p className="mt-1 flex items-center justify-end gap-1 text-xs text-white/45">
            <Star size={11} fill="currentColor" /> {product.rating}
          </p>
        </div>
      </div>
    </Link>
  );
}