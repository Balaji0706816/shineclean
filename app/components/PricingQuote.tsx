export default function PricingQuote() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/images/bg-pricing.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft white overlay — keeps it light & readable */}
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.52)" }} />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-white/80 px-10 py-20 text-center shadow-[0_16px_64px_rgba(108,99,255,0.18)] ring-1 ring-[#E9E7FF] backdrop-blur-md">
          {/* Top gradient accent line */}
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-[40px] bg-gradient-to-r from-[#6C63FF] via-[#9D97FF] to-[#2EC4B6]" />

          <span className="inline-flex items-center gap-2 rounded-full bg-[#E9E7FF] px-5 py-2 text-sm font-semibold text-[#6C63FF]">
            Premium Cleaning Services
          </span>

          {/* Modern title */}
          <h2 className="mt-6 leading-tight text-[#111]">
            <span className="block text-3xl font-light text-[#888] lg:text-4xl">Ready for a</span>
            <span className="block text-5xl font-bold lg:text-6xl">
              Spotless{" "}
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] bg-clip-text text-transparent">
                Home?
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Schedule your residential or office cleaning service in minutes with
            our trusted professional team.
          </p>

          <a
            href="/booking"
            className="mt-10 inline-flex rounded-full bg-[#6C63FF] px-10 py-5 text-lg font-semibold text-white shadow-[0_4px_24px_rgba(108,99,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#574ee4] hover:shadow-[0_8px_32px_rgba(108,99,255,0.4)]"
          >
            Book Cleaning Service
          </a>
        </div>
      </div>
    </section>
  );
}