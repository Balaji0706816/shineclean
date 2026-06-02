import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-8 pt-20">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-r from-[#F5F3FF] to-[#EEF7F3] p-12 lg:p-16">

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <h2 className="text-5xl font-bold text-[#6C63FF]">
              ShineClean
            </h2>

            <p className="mt-6 max-w-sm text-lg leading-8 text-gray-600">
              Professional residential cleaning services across Greater Boston.
              Reliable cleaners, flexible scheduling, and exceptional results.
            </p>

            <a
              href="#booking"
              className="mt-8 inline-flex rounded-full bg-[#6C63FF] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-1"
            >
              Get Your Free Quote
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold text-black">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-lg text-gray-600">
              <Link href="/services">Home Cleaning</Link>
              <Link href="/services">Deep Cleaning</Link>
              <Link href="/services">Apartment Cleaning</Link>
              <Link href="/services">Move-In / Move-Out</Link>
              <Link href="/services">Recurring Cleaning</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-semibold text-black">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-lg text-gray-600">
              <Link href="/about">About Us</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-black">
              Contact
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-lg text-gray-600">
              <p>Greater Boston Area</p>

              <a href="mailto:support@shineclean.com">
                support@shineclean.com
              </a>

              <a href="tel:+16175557890">
                (617) 555-7890
              </a>

              <p>Mon - Sat: 8:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-gray-500 md:flex-row">

            <p>
              © 2026 ShineClean. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}