import { ArrowRight } from "lucide-react";

export default function Promo() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#151719] p-8 sm:p-12 lg:p-16">
        {/* Decorative background glow */}
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />
        
        <p className="eyebrow">ATHLETIX MEMBERSHIP</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-.05em] sm:text-6xl">
          More training.
          <br />
          Less friction.
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
          Get early access to drops, member pricing and performance content
          built for people who refuse average.
        </p>

        {/* Basic click handler for membership demo */}
        <button
          onClick={() =>
            alert(
              "Welcome to ATHLETIX membership. Membership demo activated."
            )
          }
          className="btn-primary mt-8"
        >
          Join ATHLETIX <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}