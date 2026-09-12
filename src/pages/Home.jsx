import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories, products } from "../data/products";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";
import Promo from "../components/Promo";
import Footer from "../components/Footer";

export default function Home() {
  // Grab the top 4 products to feature on the landing page
  const featured = products.slice(0, 4);

  return (
    <div id="top">
      <Hero />
      
      {/* Categories Section */}
      <section id="categories" className="container-x py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">01 / TRAIN YOUR WAY</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.05em] sm:text-5xl">
              Built for every arena.
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-2 text-sm font-bold text-white/60 hover:text-white sm:flex"
          >
            View all <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.name} category={c} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="container-x py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="eyebrow">02 / FEATURED GEAR</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.05em] sm:text-5xl">
              No weak links.
            </h2>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white"
          >
            Shop all <ArrowRight size={15} />
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <Promo />

      {/* Final CTA */}
      <section className="container-x pb-24">
        <div className="rounded-[2rem] border border-white/10 p-8 text-center sm:p-14">
          <p className="eyebrow">ATHLETIX / 24-7</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-.05em] sm:text-6xl">
            Your next personal best starts here.
          </h2>
          <Link to="/shop" className="btn-primary mt-8">
            Explore the store <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}