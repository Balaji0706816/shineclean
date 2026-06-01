import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7FC] px-6 py-20">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="text-center">
          <span className="rounded-full bg-[#E9E7FF] px-5 py-2 text-sm font-semibold text-[#6C63FF]">
            Contact ShineClean
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#111]">
            We’re here to help
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Have questions about our cleaning services or need a custom quote?
            Contact our team anytime and we’ll get back to you shortly.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* PHONE */}
          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E7FF]">
              <Phone className="text-[#6C63FF]" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#111]">
              Phone
            </h3>

            <p className="mt-3 text-lg text-[#6B7280]">
              (617) 555-7890
            </p>
          </div>

          {/* EMAIL */}
          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E7FF]">
              <Mail className="text-[#6C63FF]" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#111]">
              Email
            </h3>

            <p className="mt-3 text-lg break-all text-[#6B7280]">
              shinecleaningservices03@gmail.com
            </p>
          </div>

          {/* LOCATION */}
          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E7FF]">
              <MapPin className="text-[#6C63FF]" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#111]">
              Location
            </h3>

            <p className="mt-3 text-lg text-[#6B7280]">
              Boston, Massachusetts
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-[40px] bg-white px-10 py-16 text-center shadow-xl">

          <h2 className="text-4xl font-bold text-[#111]">
            Ready to schedule your cleaning?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Book your professional cleaning service online in just a few minutes.
          </p>

          <Link
            href="/booking"
            className="mt-10 inline-flex rounded-full bg-[#6C63FF] px-10 py-5 text-lg font-semibold text-white transition hover:bg-[#584DFF]"
          >
            Book Cleaning Service
          </Link>
        </div>
      </div>
    </main>
  );
}