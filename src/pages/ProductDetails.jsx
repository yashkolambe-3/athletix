import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const dispatch = useDispatch();

  // Local state for user selections prior to cart addition
  const [size, setSize] = useState(product?.sizes?.[0] || "");
  const [qty, setQty] = useState(1);

  // Handle 404 cleanly
  if (!product) {
    return (
      <main className="container-x pt-40 pb-32">
        <h1 className="text-4xl font-black">Product not found.</h1>
        <Link className="btn-primary mt-7" to="/shop">
          Back to shop
        </Link>
      </main>
    );
  }

  // Derive related products dynamically based on category
  const related = useMemo(
    () =>
      products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4),
    [product]
  );

  const add = () =>
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        quantity: qty,
      })
    );

  return (
    <>
      <main className="container-x pt-28 pb-24">
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/45 hover:text-white"
        >
          <ArrowLeft size={16} /> Back to collection
        </Link>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery (Placeholder for single image) */}
          <div className="overflow-hidden rounded-[2rem] bg-[#151719]">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col justify-center px-1 lg:px-8">
            <span className="eyebrow">
              {product.category} / {product.badge}
            </span>
            <h1 className="mt-4 text-5xl font-black tracking-[-.06em] sm:text-7xl">
              {product.name}
            </h1>
            
            <div className="mt-5 flex items-center gap-3">
              {/* Formatted for INR standard */}
              <span className="text-2xl font-bold">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="flex items-center gap-1 text-sm text-white/45">
                <Star size={14} fill="currentColor" /> {product.rating}
              </span>
            </div>
            
            <p className="mt-7 max-w-lg leading-7 text-white/50">
              {product.description} Designed for athletes who demand comfort,
              control and confidence in every movement.
            </p>
            
            {/* Size Selector */}
            <div className="mt-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/45">
                Select size
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-11 min-w-12 rounded-xl border px-4 text-sm font-bold ${
                      size === s
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-white/5 text-white/65 hover:border-white/30"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Add to Cart Actions */}
            <div className="mt-7 flex gap-3">
              <div className="flex items-center rounded-full border border-white/10 bg-white/5">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="p-3"
                >
                  <Minus size={15} />
                </button>
                <span className="w-7 text-center text-sm font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3">
                  <Plus size={15} />
                </button>
              </div>
              <button onClick={add} className="btn-primary flex-1">
                <ShoppingBag size={17} /> Add to cart
              </button>
              <button
                onClick={() => alert("Added to wishlist.")}
                className="rounded-full border border-white/10 px-4"
              >
                <Heart size={19} />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="pt-28">
          {related.length > 0 && (
            <>
              <p className="eyebrow mb-5">YOU MAY ALSO LIKE</p>
              <ProductGrid products={related} />
            </>
          )}
        </section>
      </main>
    </>
  );
}