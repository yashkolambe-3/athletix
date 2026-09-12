import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({ category }) {
  // Render category card with hover effects
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group relative h-72 overflow-hidden rounded-[2rem] border border-white/10"
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <h3 className="text-2xl font-black tracking-tight">
          {category.name}
        </h3>
        <span className="rounded-full bg-white p-2 text-black transition group-hover:bg-lime-300">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}