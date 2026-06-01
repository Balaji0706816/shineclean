import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
        
        <div>
          <h2 className="text-5xl font-bold text-[#6C63FF]">
            ShineClean
          </h2>

          <p className="mt-6 text-lg leading-9 text-[#6B7280]">
            Premium residential and commercial cleaning services.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#111]">
            Services
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-lg text-[#6B7280]">
            <Link href="/services">Home Cleaning</Link>
            <Link href="/services">Office Cleaning</Link>
            <Link href="/services">Kitchen Cleaning</Link>
            <Link href="/services">Deep Cleaning</Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#111]">
            Company
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-lg text-[#6B7280]">
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/services">Services</Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#111]">
            Contact
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-lg text-[#6B7280]">
            <p>Boston, Massachusetts</p>

            <a href="mailto:support@shineclean.com">
              support@shineclean.com
            </a>

            <a href="tel:+16175557890">
              (617) 555-7890
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-lg text-[#9CA3AF]">
        © 2026 ShineClean. All rights reserved.
      </div>
    </footer>
  );
}