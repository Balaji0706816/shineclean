export default function CTA() {
  return (
    <section
      className="relative overflow-hidden py-28 text-center text-white"
      style={{
        backgroundImage: "url('/images/bg-cta.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Purple overlay for brand cohesion + readability */}
      <div className="absolute inset-0" style={{ background: "rgba(74,63,160,0.65)" }} />
      {/* Shimmer top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Modern multi-weight title */}
        <h2 className="leading-tight">
          <span className="block text-3xl font-light text-white/70 lg:text-4xl">
            Book professional cleaning
          </span>
          <span className="block text-5xl font-bold lg:text-6xl">
            services in{" "}
            <span className="text-[#a89fff]">minutes.</span>
          </span>
        </h2>

        <p className="mt-6 text-xl leading-8 text-white/75">
          Book professional cleaning services in minutes.
        </p>

        <a
          href="/booking"
          className="mt-10 inline-block rounded-full bg-white px-10 py-5 text-lg font-semibold text-[#6C63FF] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}