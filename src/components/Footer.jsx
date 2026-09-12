import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand info section */}
        <div className="lg:col-span-2">
          <Link to="/" className="text-2xl font-black tracking-[-.06em]">
            ATHLETIX<span className="text-lime-300">.</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
            Performance equipment for the next version of you.
          </p>
          <div className="mt-6 flex gap-2">
            {/* Social media links */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2.5"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2.5"
            >
              <Youtube size={17} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2.5"
            >
              <Twitter size={17} />
            </a>
          </div>
        </div>
        
        {/* Shop Links */}
        <div>
          <p className="mb-5 text-xs font-bold tracking-widest text-white/40">
            SHOP
          </p>
          <div className="grid gap-3 text-sm text-white/65">
            <Link to="/shop">All gear</Link>
            <Link to="/shop?category=Running">Running</Link>
            <Link to="/shop?category=Training">Training</Link>
            <Link to="/shop?category=Basketball">Basketball</Link>
          </div>
        </div>

        {/* Help Links */}
        <div>
          <p className="mb-5 text-xs font-bold tracking-widest text-white/40">
            HELP
          </p>
          <div className="grid gap-3 text-sm text-white/65">
            <a href="mailto:hello@athletix.example">Contact</a>
            <a href="#top">Shipping</a>
            <a href="#top">Returns</a>
            <Link to="/history">Orders</Link>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className="mb-5 text-xs font-bold tracking-widest text-white/40">
            COMPANY
          </p>
          <div className="grid gap-3 text-sm text-white/65">
            <a href="#top">About</a>
            <a href="#top">Careers</a>
            <a href="#top">Journal</a>
            <a href="#top">Privacy</a>
          </div>
        </div>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/30 sm:flex-row sm:justify-between">
        <span>© 2026 ATHLETIX. All rights reserved.</span>
        <span>Built for movement.</span>
      </div>
    </footer>
  );
}