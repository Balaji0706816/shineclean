import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[9999] w-full border-b border-[#ede9ff]/60 bg-white/90 backdrop-blur-md shadow-[0_1px_20px_rgba(108,99,255,0.07)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-4xl font-bold tracking-tight text-[#6C63FF]">
          ShineClean
        </h1>

        <nav className="hidden items-center gap-8 text-[15px] font-semibold text-[#374151] md:flex">
          <a href="/" className="transition hover:text-[#6C63FF]">
            Home
          </a>

          <a href="/services" className="transition hover:text-[#6C63FF]">
            Services
          </a>

          {/* SERVICE AREAS DROPDOWN */}
          <div className="group relative">
            <a
              href="/service-areas"
              className="flex items-center gap-1 transition hover:text-[#6C63FF]"
            >
              Service Areas
              <span className="text-xs">▼</span>
            </a>

            <div className="invisible absolute left-0 top-full z-[9999] mt-2 w-56 rounded-2xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {[
                "Boston",
                "Cambridge",
                "Somerville",
                "Brookline",
                "Quincy",
                "Newton",
                "Dorchester",
                "Chelsea",
                "Everett",
                "Revere",
                "Medford",
                "Malden",
              ].map((city) => (
                <a
                  key={city}
                  href={`/service-areas/${city
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#111] transition hover:bg-[#E9E7FF] hover:text-[#6C63FF]"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>

          <a href="/pricing" className="transition hover:text-[#6C63FF]">
            Pricing
          </a>

          {/* ABOUT US DROPDOWN */}
          <div className="group relative">
            <a
              href="/about"
              className="flex items-center gap-1 transition hover:text-[#6C63FF]"
            >
              About Us
              <span className="text-xs">▼</span>
            </a>

            <div className="invisible absolute left-0 top-full z-[9999] mt-2 w-[240px] overflow-hidden rounded-2xl border border-gray-200 bg-white opacity-0 shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <a
                href="/about/who-we-are"
                className="block px-5 py-4 text-[15px] font-medium text-gray-800 transition hover:bg-gray-50"
              >
                Who We Are
              </a>

              <a
                href="/about/cleaning-process"
                className="block border-t border-gray-100 px-5 py-4 text-[15px] font-medium text-gray-800 transition hover:bg-gray-50"
              >
                Cleaning Process
              </a>

              <a
                href="/about/faq"
                className="block border-t border-gray-100 px-5 py-4 text-[15px] font-medium text-gray-800 transition hover:bg-gray-50"
              >
                FAQ
              </a>

              <a
                href="/about/customer-reviews"
                className="block border-t border-gray-100 px-5 py-4 text-[15px] font-medium text-gray-800 transition hover:bg-gray-50"
              >
                Customer Reviews
              </a>
            </div>
          </div>

          <a href="/blog" className="transition hover:text-[#6C63FF]">
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-gray-200 px-5 py-3 lg:flex">
            <Phone size={18} className="text-[#6C63FF]" />
            <span className="font-semibold text-[#111]">
              +1 (617) 555-7890
            </span>
          </div>

          <a
            href="/booking"
            className="rounded-full bg-[#6C63FF] px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#5B52F5]"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}