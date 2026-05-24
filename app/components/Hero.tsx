import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[850px] bg-[#F7F7FC]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="rounded-full bg-[#E9E7FF] px-5 py-3 text-sm font-semibold text-[#6C63FF]">
            Professional Cleaning Service Company
          </span>

          <h1 className="mt-8 max-w-2xl text-6xl font-bold leading-tight tracking-tight text-[#111]">
            Trusted and Reliable Cleaning Services
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B7280]">
            We provide premium home, apartment, office, and move-in cleaning
            services with trained professionals and careful attention to detail.
          </p>

          <div className="mt-9 flex gap-4">
            <button className="rounded-full bg-[#6C63FF] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#574ee4]">
              Contact Us
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-[#111] transition hover:border-[#6C63FF] hover:text-[#6C63FF]">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[50px] bg-[#E9E7FF] blur-3xl opacity-70" />

          <Image
            src="/images/hero.png"
            alt="Professional cleaning company"
            width={850}
            height={700}
            priority
            className="relative h-[580px] w-full rounded-[40px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}