import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  History,
  ArrowUpRight,
} from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  // Get cart count from Redux store
  const count = useSelector((s) => s.cart.totalQuantity);

  // Handle search form submission
  const submit = (e) => {
    e.preventDefault();
    navigate(
      search.trim() ? `/shop?q=${encodeURIComponent(search.trim())}` : "/shop"
    );
    setOpen(false); // Close mobile menu on submit
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090a]/80 backdrop-blur-2xl">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="text-xl font-black tracking-[-0.06em]">
          ATHLETIX<span className="text-lime-300">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            className="text-sm text-white/65 transition hover:text-white"
            to="/shop"
          >
            Shop
          </Link>
          <a
            className="text-sm text-white/65 transition hover:text-white"
            href="/#categories"
          >
            Categories
          </a>
          <a
            className="text-sm text-white/65 transition hover:text-white"
            href="/#featured"
          >
            Featured
          </a>
        </nav>

        {/* Desktop Icons and Search */}
        <div className="hidden items-center gap-2 md:flex">
          <form
            onSubmit={submit}
            className="flex items-center rounded-full border border-white/10 bg-white/5 px-3"
          >
            <Search size={16} className="text-white/40" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-28 bg-transparent px-2 py-2 text-xs outline-none placeholder:text-white/30"
            />
          </form>
          <Link
            to="/history"
            className="rounded-full p-2.5 text-white/65 hover:bg-white/5 hover:text-white"
          >
            <History size={19} />
          </Link>
          <button className="rounded-full p-2.5 text-white/65 hover:bg-white/5 hover:text-white">
            <UserRound size={19} />
          </button>
          
          {/* Cart Icon with badge */}
          <Link
            to="/cart"
            className="relative rounded-full p-2.5 text-white/65 hover:bg-white/5 hover:text-white"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-lime-300 px-1 text-[9px] font-black text-black">
                {count}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-[#08090a] px-5 py-5 md:hidden">
          <form
            onSubmit={submit}
            className="mb-5 flex items-center border-b border-white/10 pb-3"
          >
            <Search size={18} />
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search gear"
              className="ml-3 flex-1 bg-transparent outline-none"
            />
          </form>
          <div className="grid gap-4 text-lg font-semibold">
            <Link onClick={() => setOpen(false)} to="/shop">
              Shop <ArrowUpRight className="inline" size={16} />
            </Link>
            <Link onClick={() => setOpen(false)} to="/history">
              Order History
            </Link>
            <Link onClick={() => setOpen(false)} to="/cart">
              Cart ({count})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}