"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import {
  CheckCircle,
  Phone,
  House,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  ClipboardCheck,
  CreditCard,
  Clock,
  HomeIcon,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "Residential Cleaning",
    text: "Reliable home cleaning for families, renters, and homeowners who want a fresh, comfortable space without the stress.",
    icon: House,
  },
  {
    title: "Deep Cleaning",
    text: "Detailed top-to-bottom cleaning for kitchens, bathrooms, floors, baseboards, appliances, and hard-to-reach areas.",
    icon: Sparkles,
  },
  {
    title: "Recurring Cleaning",
    text: "Weekly, biweekly, and monthly cleaning plans designed to keep your home consistently clean and easy to maintain.",
    icon: CalendarCheck,
  },
  {
    title: "Move-In / Move-Out",
    text: "Professional cleaning for apartments, rentals, new homes, and properties that need a fresh start before or after moving.",
    icon: ClipboardCheck,
  },
];

const steps = [
  ["Request a Quote", "Tell us what you need cleaned and share your preferred date."],
  ["Confirm Details", "We review your property size, service type, and schedule."],
  ["We Clean", "Our team arrives prepared and completes the service with care."],
  ["Enjoy Your Home", "Relax in a cleaner, fresher, and more comfortable space."],
];

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertySize: "",
    message: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          propertySize: formData.propertySize,
          message: formData.message,
          date: formData.date || "",
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          propertySize: "",
          message: "",
          date: "",
        });

        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Request failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-[#111]">
      <Navbar />

      <section
        className="relative overflow-hidden px-6 py-32"
        style={{
          backgroundImage: "url('/images/bg-pricing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.22)" }} />
  <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_500px]">
    <ScrollReveal direction="left">
    <div>
      <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#2EC4B6]" />
        PROFESSIONAL CLEANING SERVICE
      </div>

      <h1 className="max-w-3xl leading-tight tracking-tight">
        <span className="block text-3xl font-light text-[#666] md:text-4xl">Professional House Cleaning</span>
        <span className="block text-5xl font-extrabold md:text-[58px]">
          Across{" "}
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#9D97FF] bg-clip-text text-transparent">
            Greater Boston
          </span>
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-xl leading-9 text-gray-700">
        ShineClean provides reliable residential cleaning, deep cleaning,
        apartment cleaning, move-in/move-out cleaning, and recurring home care
        with simple booking and clear communication.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Link
          href="/booking"
          className="rounded-full bg-[#6C63FF] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#574ee4]"
        >
          Get Your Free Quote
        </Link>

        <a
          href="tel:6175557890"
          className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-bold shadow-sm"
        >
          <Phone size={20} />
          (617) 555-7890
        </a>
      </div>

      <div className="mt-10 grid gap-4 text-base font-semibold text-gray-800 sm:grid-cols-2">
        {[
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle size={20} className="text-[#2EC4B6]" />
            {item}
          </div>
        ))}
      </div>
    </div>
    </ScrollReveal>

    <ScrollReveal direction="right" delay={0.15}>
    <div
    className="rounded-[36px] border border-white/80 bg-white/95 p-8 shadow-[0_30px_80px_rgba(108,99,255,0.12)] backdrop-blur-sm"
    >
      <h2 className="text-4xl font-extrabold">
        Request Your Free Cleaning Estimate
      </h2>

      <p className="mt-3 text-lg leading-7 text-gray-600">
        Tell us about your cleaning needs and our team will contact you with a
        customized quote.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-200 bg-[#F8F8F8] px-6 py-5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#6C63FF]"
          placeholder="Full Name *"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="rounded-2xl border border-gray-200 bg-[#F8F8F8] px-6 py-5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#6C63FF]"
            placeholder="Phone Number *"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-2xl border border-gray-200 bg-[#F8F8F8] px-6 py-5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#6C63FF]"
            placeholder="Email Address *"
          />
        </div>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-200 bg-[#F8F8F8] px-6 py-5 text-gray-700 outline-none focus:border-[#6C63FF]"
        >
          <option value="">Select Service Type</option>
          <option>House Cleaning</option>
          <option>Deep Cleaning</option>
          <option>Apartment Cleaning</option>
          <option>Move-Out Cleaning</option>
          <option>Recurring Cleaning</option>
          <option>Maid Service</option>
        </select>

        <div className="grid gap-5 sm:grid-cols-2">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="rounded-2xl border border-gray-200 bg-[#F8F8F8] px-6 py-5 text-gray-700 outline-none focus:border-[#6C63FF]"
          />

          <input
            name="propertySize"
            value={formData.propertySize}
            onChange={handleChange}
            className="rounded-2xl border border-gray-200 bg-[#F8F8F8] px-6 py-5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#6C63FF]"
            placeholder="Property Size"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-2xl border border-gray-200 bg-[#F8F8F8] px-6 py-5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#6C63FF]"
          placeholder="Preferred date, time, and additional details"
        />

        {success && (
          <div className="rounded-2xl bg-green-50 px-5 py-4 text-center font-semibold text-green-700">
            Thank you! Your booking request was submitted successfully.
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#6C63FF] px-8 py-5 text-lg font-bold text-white transition hover:bg-[#574ee4] disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Booking Request"}
        </button>
      </form>
    </div>
    </ScrollReveal>
  </div>
</section>
      <section
        className="relative overflow-hidden px-6 py-24"
        style={{
          backgroundImage: "url('/images/bg-cta.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.20)" }} />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal direction="up">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-white">
              Our Services
            </p>
            <h2 className="mt-4 leading-tight">
              <span className="block text-3xl font-light text-[#888]">Cleaning services designed</span>
              <span className="block text-5xl font-extrabold">around <span className="text-white">your home</span></span>
            </h2>
          </div>
          </ScrollReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} direction="up" delay={i * 0.1}>
                <div
                  className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
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
                  <Link
                    href="/services"
                    className="mt-6 inline-block font-bold text-[#6C63FF]"
                  >
                    Learn More →
                  </Link>
                </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-24"
        style={{
          backgroundImage: "url('/images/bg-why.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(74,63,160,0.75)" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#a89fff]">
              Why Choose ShineClean
            </p>
            <h2 className="mt-4 leading-tight text-white">
              <span className="block text-3xl font-light text-white/70">Professional cleaning with</span>
              <span className="block text-5xl font-extrabold">care, trust, and <span className="text-[#a89fff]">consistency</span></span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              We know letting someone into your home is personal. ShineClean
              focuses on dependable service, respectful communication, careful
              cleaning, and a simple process from the first message to the final
              walkthrough.
            </p>
          </div>

          <div className="rounded-[34px] bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/20">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Reliable", "We show up prepared and on time."],
                ["Detailed", "We focus on the small things customers notice."],
                ["Flexible", "Choose one-time, weekly, biweekly, or monthly."],
                ["Professional", "Simple process, clean results, respectful service."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                  <h3 className="text-2xl font-extrabold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-28"
        style={{
          backgroundImage: "url('/images/bg-pricing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.20)" }} />
        <div className="relative mx-auto max-w-7xl text-center" style={{position:"relative",zIndex:1}}>
          <p className="font-bold uppercase tracking-[0.25em] text-[#6C63FF]">
            How It Works
          </p>
          <h2 className="mt-4 leading-tight">
            <span className="block text-3xl font-light text-[#888]">Book your service in</span>
            <span className="block text-5xl font-extrabold text-[#111]">4 <span className="bg-gradient-to-r from-[#6C63FF] to-[#2EC4B6] bg-clip-text text-transparent">simple steps</span></span>
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {steps.map(([title, text], index) => (
              <ScrollReveal key={title} direction="up" delay={index * 0.12}>
              <div className="rounded-[30px] bg-white/75 p-8 backdrop-blur-sm shadow-sm h-full">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-extrabold text-[#6C63FF]">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-gray-700">{text}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-28"
        style={{
          backgroundImage: "url('/images/bg-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.18)" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[36px] bg-white/85 p-7 shadow-sm backdrop-blur-sm">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="font-bold uppercase tracking-[0.25em] text-[#2EC4B6]">
                  Simple & Secure
                </p>
                <h2 className="mt-4 text-5xl font-extrabold leading-tight">
                  Easy scheduling and payment options
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Customers can request a cleaning, choose the service they need,
                  share property details, and receive follow-up from the team.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  [CreditCard, "Card Payment"],
                  [Phone, "Phone Support"],
                  [ShieldCheck, "Secure Request"],
                ].map(([Icon, label]: any) => (
                  <div
                    key={label}
                    className="rounded-3xl bg-[#F6F9F2] p-7 text-center"
                  >
                    <Icon className="mx-auto text-[#2EC4B6]" size={34} />
                    <p className="mt-4 font-bold">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-24"
        style={{
          backgroundImage: "url('/images/bg-cta.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(74,63,160,0.72)" }} />
        <div className="relative mx-auto max-w-7xl rounded-[40px] bg-white/10 px-8 py-20 text-center text-white shadow-xl ring-1 ring-white/20 backdrop-blur-sm">
          <h2 className="leading-tight">
            <span className="block text-3xl font-light text-white/70">Request Your Free</span>
            <span className="block text-5xl font-extrabold">Cleaning Estimate <span className="text-[#a89fff]">Today</span></span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Tell us about your property and cleaning needs. Our team will review
            your request and contact you with a customized quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-white px-10 py-4 font-bold text-[#6C63FF]"
            >
              Get Free Quote
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
    )
}