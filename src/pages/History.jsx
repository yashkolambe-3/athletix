import { Link } from "react-router-dom";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";

// Mock order history updated with authentic INR totals and synced product names
const orders = [
  {
    id: "ATX-20481",
    date: "Aug 28, 2026",
    items: "AeroGlide Pro Runner · Velocity X Sprint",
    total: "₹27,498",
    status: "Delivered",
  },
  {
    id: "ATX-19842",
    date: "Aug 09, 2026",
    items: "Court Force Elite",
    total: "₹13,499",
    status: "Delivered",
  },
  {
    id: "ATX-19110",
    date: "Jul 22, 2026",
    items: "Apex Core Trainer · PowerLift 01",
    total: "₹19,998",
    status: "Delivered",
  },
];

export default function History() {
  return (
    <main className="container-x pt-32 pb-24">
      <p className="eyebrow">ATHLETIX / ACCOUNT</p>
      <h1 className="mt-3 text-5xl font-black tracking-[-.06em] sm:text-7xl">
        Order history<span className="text-lime-300">.</span>
      </h1>
      <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
        A simple record of your latest ATHLETIX orders.
      </p>
      
      {/* Order List */}
      <div className="mt-10 grid gap-3">
        {orders.map((o) => (
          <div
            key={o.id}
            className="grid gap-5 rounded-3xl border border-white/10 bg-white/[.025] p-5 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5">
                <Package size={19} />
              </div>
              <div>
                <p className="font-bold">{o.id}</p>
                <p className="mt-1 text-xs text-white/40">
                  {o.date} · {o.items}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-6 sm:justify-end">
              <div>
                <p className="font-bold">{o.total}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-lime-300">
                  <CheckCircle2 size={12} /> {o.status}
                </p>
              </div>
              <ArrowRight size={17} className="text-white/30" />
            </div>
          </div>
        ))}
      </div>
      
      <Link to="/shop" className="btn-dark mt-8">
        Continue shopping
      </Link>
    </main>
  );
}