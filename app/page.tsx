import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import {
  CheckCircle,
  Phone,
  House,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  ClipboardCheck,
  CreditCard,
} from "lucide-react";

const services = [
  {
    title: "Residential Cleaning",
    text: "Reliable home cleaning for busy families, renters, and homeowners who want a fresh space without the stress.",
    icon: House,
  },
  {
    title: "Deep Cleaning",
    text: "A detailed top-to-bottom clean for kitchens, bathrooms, floors, baseboards, and hard-to-reach areas.",
    icon: Sparkles,
  },
  {
    title: "Recurring Cleaning",
    text: "Weekly, biweekly, and monthly cleaning plans designed to keep your home consistently fresh.",
    icon: CalendarCheck,
  },
  {
    title: "Move-In / Move-Out",
    text: "Perfect for apartments, rentals, new homes, and preparing a space before or after moving.",
    icon: ClipboardCheck,
  },
];

const steps = [
  ["Request a Quote", "Tell us what you need cleaned and share your preferred date."],
  ["Confirm Details", "We review your home size, service type, and schedule."],
  ["We Clean", "Our team arrives prepared with care, respect, and attention to detail."],
  ["Enjoy Your Space", "Walk into a cleaner, fresher, more comfortable home."],
];

export default function Home() {
  return (
    <main className="bg-white text-[#111]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#F6F9F2] px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_520px]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2EC4B6]" />
              PROFESSIONAL CLEANING SERVICE
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Reliable House Cleaning for{" "}
              <span className="text-[#F542A0]">Busy Homes</span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-gray-700">
              ShineClean helps families, renters, professionals, and businesses
              keep their spaces clean, fresh, and comfortable. From one-time
              deep cleaning to recurring home care, our goal is to make cleaning
              simple, professional, and stress-free.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/booking"
                className="rounded-full bg-[#F542A0] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#e73594]"
              >
                Get Your Free Quote
              </Link>

              <a
                href="tel:6175557890"
                className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-bold shadow-sm transition hover:-translate-y-1"
              >
                <Phone size={20} />
                (617) 555-7890
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-base font-semibold text-gray-800 sm:grid-cols-3">
              {["Flexible Scheduling", "Careful Cleaning", "Clear Communication"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-[#2EC4B6]" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* BOOKING FORM */}
          <div className="rounded-[34px] bg-[#F542A0] p-8 text-white shadow-2xl">
            <h2 className="text-center text-4xl font-extrabold">
              Book Your Cleaning
            </h2>
            <p className="mt-2 text-center text-white/90">
              Quick request. No commitment.
            </p>

            <form className="mt-8 space-y-5">
              <input className="w-full rounded-xl bg-white px-5 py-4 text-black outline-none" placeholder="Full Name *" />
              <div className="grid gap-5 sm:grid-cols-2">
                <input className="rounded-xl bg-white px-5 py-4 text-black outline-none" placeholder="Phone Number *" />
                <input className="rounded-xl bg-white px-5 py-4 text-black outline-none" placeholder="Email Address *" />
              </div>
              <select className="w-full rounded-xl bg-white px-5 py-4 text-gray-600 outline-none">
                <option>Select Service Type</option>
                <option>House Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Apartment Cleaning</option>
                <option>Move-In / Move-Out Cleaning</option>
                <option>Recurring Cleaning</option>
                <option>Office Cleaning</option>
              </select>
              <input className="w-full rounded-xl bg-white px-5 py-4 text-black outline-none" placeholder="Property Size / Square Feet" />
              <textarea className="h-32 w-full rounded-xl bg-white px-5 py-4 text-black outline-none" placeholder="Preferred date, time, and additional details" />
              <button className="w-full rounded-full bg-[#2EC4B6] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#22b3a6]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-[#F542A0]">
              Our Services
            </p>
            <h2 className="mt-4 text-5xl font-extrabold">
              Cleaning services designed around your home
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-[30px] border border-gray-100 bg-[#F6F9F2] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                    <Icon size={30} className="text-[#2EC4B6]" />
                  </div>
                  <h3 className="mt-7 text-2xl font-extrabold">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-700">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#F6F9F2] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#F542A0]">
              Why Choose ShineClean
            </p>
            <h2 className="mt-4 text-5xl font-extrabold leading-tight">
              Professional cleaning with care, trust, and consistency
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              We know letting someone into your home is personal. That is why
              ShineClean focuses on dependable service, respectful communication,
              and careful cleaning from the first message to the final
              walkthrough. Every service is handled with attention to the rooms,
              surfaces, and details that matter most to you.
            </p>

            <div className="mt-8 space-y-4 text-lg font-semibold">
              {[
                "Clear communication before and after service",
                "Flexible one-time and recurring cleaning options",
                "Careful attention to kitchens, bathrooms, floors, and surfaces",
                "Eco-friendly cleaning products available upon request",
                "Simple booking and secure payment options",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-[#2EC4B6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-white p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Reliable", "We show up prepared and on time."],
                ["Detailed", "We focus on the small things customers notice."],
                ["Flexible", "Choose one-time, weekly, biweekly, or monthly."],
                ["Professional", "Simple process, clean results, respectful service."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl bg-[#F6F9F2] p-6">
                  <h3 className="text-2xl font-extrabold">{title}</h3>
                  <p className="mt-3 leading-7 text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-[#F542A0]">
            How It Works
          </p>
          <h2 className="mt-4 text-5xl font-extrabold">
            Book your service in 4 simple steps
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-[30px] bg-[#F6F9F2] p-8">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-extrabold text-[#2EC4B6]">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT / TRUST */}
      <section className="bg-[#F6F9F2] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[36px] bg-white p-10 shadow-sm">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="font-bold uppercase tracking-[0.25em] text-[#F542A0]">
                  Simple & Secure
                </p>
                <h2 className="mt-4 text-5xl font-extrabold leading-tight">
                  Easy scheduling and payment options
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Customers can request a cleaning, choose the service they need,
                  share property details, and receive follow-up from the team.
                  The goal is to make the process simple, clear, and comfortable
                  from start to finish.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  [CreditCard, "Card Payment"],
                  [Phone, "Phone Support"],
                  [ShieldCheck, "Secure Request"],
                ].map(([Icon, label]: any) => (
                  <div key={label} className="rounded-3xl bg-[#F6F9F2] p-7 text-center">
                    <Icon className="mx-auto text-[#2EC4B6]" size={34} />
                    <p className="mt-4 font-bold">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#6C63FF] px-8 py-20 text-center text-white shadow-xl">
          <h2 className="text-5xl font-extrabold">
            Ready for a cleaner, fresher home?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Tell us what you need cleaned and our team will help you schedule a
            professional cleaning service that fits your home and routine.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-white px-10 py-4 font-bold text-[#6C63FF]"
            >
              Book Cleaning
            </Link>
            <a
              href="tel:6175557890"
              className="rounded-full border border-white/40 px-10 py-4 font-bold text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}