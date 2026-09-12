import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Shop() {
  // Sync state with URL params for sharing/refreshing
  const [params] = useSearchParams();
  const initialQ = params.get("q") || "";
  const initialCategory = params.get("category") || "All";

  const [q, setQ] = useState(initialQ);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("Featured");

  const categories = ["All", "Running", "Training", "Basketball", "Football"];

  // Filter and sort computation
  const filtered = useMemo(
    () =>
      products
        .filter(
          (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(q.toLowerCase())
        )
        .sort((a, b) => {
          if (sort === "Price: Low") return a.price - b.price;
          if (sort === "Price: High") return b.price - a.price;
          if (sort === "Rating") return b.rating - a.rating;
          return 0; // "Featured" sorting fallback
        }),
    [q, category, sort]
  );

  return (
    <>
      <main className="container-x pt-32 pb-24">
        {/* Shop Header */}
        <div className="border-b border-white/10 pb-10">
          <p className="eyebrow">ATHLETIX / SHOP</p>
          <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h1 className="text-5xl font-black tracking-[-.06em] sm:text-7xl">
              The collection<span className="text-lime-300">.</span>
            </h1>
            <p className="max-w-sm text-sm leading-6 text-white/40">
              Engineered footwear and equipment for running, training and
              competition.
            </p>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col gap-4 border-b border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold ${
                  category === c
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/55 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs outline-none focus:border-white/25 sm:w-56"
            />
            <label className="flex items-center gap-2 rounded-full border border-white/10 px-3 text-xs text-white/50">
              <SlidersHorizontal size={14} />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent py-2 outline-none"
              >
                <option>Featured</option>
                <option>Price: Low</option>
                <option>Price: High</option>
                <option>Rating</option>
              </select>
            </label>
          </div>
        </div>

        {/* Results Grid */}
        <div className="py-10">
          <div className="mb-6 text-xs text-white/35">
            {filtered.length} products
          </div>
          {filtered.length ? (
            <ProductGrid products={filtered} />
          ) : (
            <div className="py-24 text-center text-white/40">
              No products found.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}