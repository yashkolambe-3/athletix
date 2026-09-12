import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function Cart() {
  const { items, totalPrice, totalQuantity } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  // Render empty state if cart has no items
  if (!items.length) {
    return (
      <main className="container-x flex min-h-screen flex-col items-center justify-center pt-20 text-center">
        <ShoppingBag size={44} className="text-white/30" />
        <p className="eyebrow mt-6">YOUR BAG / 00</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-.06em]">
          Nothing here yet.
        </h1>
        <p className="mt-4 text-sm text-white/40">Your best gear is waiting.</p>
        <Link to="/shop" className="btn-primary mt-8">
          Shop now
        </Link>
      </main>
    );
  }

  return (
    <main className="container-x pt-32 pb-24">
      <Link
        to="/shop"
        className="mb-8 inline-flex items-center gap-2 text-sm text-white/45 hover:text-white"
      >
        <ArrowLeft size={16} /> Continue shopping
      </Link>
      
      {/* Cart Header */}
      <div className="flex items-end justify-between border-b border-white/10 pb-7">
        <div>
          <p className="eyebrow">
            YOUR BAG / {String(totalQuantity).padStart(2, "0")}
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-[-.06em]">
            Cart<span className="text-lime-300">.</span>
          </h1>
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className="text-xs text-white/40 hover:text-white"
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-10 pt-8 lg:grid-cols-[1fr_380px]">
        {/* Cart Items List */}
        <div className="grid gap-4">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/[.025] p-3 sm:p-4"
            >
              <img
                src={item.image}
                className="h-28 w-24 rounded-2xl object-cover sm:h-36 sm:w-32"
                alt={item.name}
              />
              <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                <div className="flex justify-between gap-3">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="mt-1 text-xs text-white/40">Size {item.size}</p>
                  </div>
                  {/* Converted to INR layout */}
                  <p className="font-bold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                
                {/* Quantity Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-white/10">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.key))}
                      className="p-2"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-7 text-center text-xs font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.key))}
                      className="p-2"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.key))}
                    className="text-white/30 hover:text-red-300"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <aside className="h-fit rounded-3xl border border-white/10 bg-white/[.035] p-6">
          <p className="eyebrow">ORDER SUMMARY</p>
          <div className="mt-6 flex justify-between text-sm">
            <span className="text-white/45">Subtotal</span>
            {/* Converted to INR */}
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="mt-3 flex justify-between text-sm">
            <span className="text-white/45">Shipping</span>
            <span>Free</span>
          </div>
          <div className="my-6 flex justify-between border-t border-white/10 pt-5">
            <span className="font-bold">Total</span>
            <span className="text-xl font-black">
              ₹{totalPrice.toFixed(2)}
            </span>
          </div>
          
          <button
            onClick={() => alert("Checkout demo: order placed successfully.")}
            className="btn-primary w-full"
          >
            Checkout
          </button>
          <p className="mt-4 text-center text-[11px] text-white/30">
            Demo checkout — no real payment is processed.
          </p>
        </aside>
      </div>
    </main>
  );
}