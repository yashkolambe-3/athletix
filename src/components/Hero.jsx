import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-end overflow-hidden pt-20">
      {/* Background hero image */}
      <img
        src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2200&q=90"
        className="absolute inset-0 h-full w-full object-cover object-center"
        alt="Athlete running"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-black/30" />
      
      {/* Main hero content */}
      <div className="container-x relative z-10 pb-20 pt-24">
        <p className="eyebrow mb-5">ATHLETIX / PERFORMANCE SYSTEM 01</p>
        <h1 className="max-w-5xl text-6xl font-black leading-[.86] tracking-[-.07em] sm:text-8xl lg:text-[9rem]">
          SMASH
          <br />
          <span className="text-white/55">YOUR</span> LIMITS
          <span className="text-lime-300">.</span>
        </h1>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link to="/shop" className="btn-primary">
            Shop the collection <ArrowRight size={17} />
          </Link>
          <a href="#featured" className="btn-dark">
            <Play size={15} fill="currentColor" /> Explore gear
          </a>
        </div>
      </div>

      {/* Floating featured product card (desktop only) */}
      <div className="absolute bottom-12 right-8 hidden w-64 floaty rounded-3xl border border-white/15 bg-black/55 p-3 backdrop-blur-xl lg:block">
        <img
          className="h-32 w-full rounded-2xl object-cover"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
          alt="Featured shoe"
        />
        <div className="flex items-center justify-between px-2 pt-3">
          <div>
            <p className="text-xs text-white/45">FEATURED</p>
            {/* Updated name and price for realism */}
            <p className="font-bold">AeroGlide Pro Runner</p>
          </div>
          <span className="text-sm font-bold">₹12,499</span>
        </div>
      </div>
    </section>
  );
}