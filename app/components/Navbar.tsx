import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-3xl font-bold text-[#6C63FF]">ShineClean</h1>

        <nav className="hidden items-center gap-10 text-sm font-semibold text-gray-700 md:flex">
          <a href="/home" className="hover:text-[#6C63FF]">Home</a>
          <a href="/services" className="hover:text-[#6C63FF]">Services</a>
          <a href="/pricing" className="hover:text-[#6C63FF]">Pricing</a>
          <a href="/contact" className="hover:text-[#6C63FF]">Contact</a>
          <a href="/about" className="hover:text-[#6C63FF]">About</a>
        </nav>

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-[#6C63FF] px-6 py-3 font-semibold text-white"
        >
          <Phone size={18} />
          Book Now
        </a>
      </div>
    </header>
  );
}