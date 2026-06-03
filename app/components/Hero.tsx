"use client";

import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertySize: "",
    message: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date || "Not selected",
          propertySize: formData.propertySize,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert("Something went wrong. Please try again.");
        return;
      }

      alert("Thank you! Your booking request has been submitted.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        propertySize: "",
        message: "",
        date: "",
      });
    } catch (error) {
      console.error("Hero form error:", error);
      alert("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative min-h-[850px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Light overlay so text stays readable */}
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.45)" }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#6C63FF] shadow-sm ring-1 ring-[#E9E7FF] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#6C63FF] opacity-80" />
            Professional Cleaning Service Company
          </span>

          {/* Modern split-weight title */}
          <h1 className="mt-8 max-w-2xl font-bold leading-[1.08] tracking-tight text-[#111]">
            <span className="block text-5xl font-light text-[#555] lg:text-6xl">
              Trusted and Reliable
            </span>
            <span className="block text-5xl lg:text-6xl">
              Cleaning{" "}
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9D97FF] bg-clip-text text-transparent">
                Services
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#555]">
            We provide premium home, apartment, office, and move-in cleaning
            services with trained professionals and careful attention to detail.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/booking"
              className="rounded-full bg-[#6C63FF] px-8 py-4 font-semibold text-white shadow-[0_4px_24px_rgba(108,99,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#574ee4] hover:shadow-[0_8px_32px_rgba(108,99,255,0.4)]"
            >
              Contact Us
            </a>

            <a
              href="/services"
              className="rounded-full border border-gray-200 bg-white/80 px-8 py-4 font-semibold text-[#111] backdrop-blur-sm transition hover:border-[#6C63FF] hover:text-[#6C63FF]"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Form card — soft lavender-purple gradient instead of hot pink */}
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#7B74FF] via-[#6C63FF] to-[#5046E5] p-10 shadow-[0_24px_80px_rgba(108,99,255,0.28)]"
        >
          {/* Subtle shimmer top edge */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {/* Soft inner blob */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <h2 className="text-center text-4xl font-bold text-white">
            Book Your Cleaning
          </h2>

          <p className="mt-2 text-center text-white/80">
            Quick request. No commitment.
          </p>

          <div className="mt-8 grid gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name *"
              className="rounded-2xl bg-white/95 px-5 py-4 text-gray-900 outline-none ring-0 placeholder:text-gray-400 transition focus:ring-2 focus:ring-white/60"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number *"
                className="rounded-2xl bg-white/95 px-5 py-4 text-gray-900 outline-none placeholder:text-gray-400 transition focus:ring-2 focus:ring-white/60"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address *"
                className="rounded-2xl bg-white/95 px-5 py-4 text-gray-900 outline-none placeholder:text-gray-400 transition focus:ring-2 focus:ring-white/60"
              />
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="rounded-2xl bg-white/95 px-5 py-4 text-gray-900 outline-none transition focus:ring-2 focus:ring-white/60"
            >
              <option value="">Select Service Type</option>
              <option>House Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Apartment Cleaning</option>
              <option>Office Cleaning</option>
              <option>Move-In / Move-Out</option>
            </select>

            <input
              type="text"
              name="propertySize"
              value={formData.propertySize}
              onChange={handleChange}
              placeholder="Property Size / Square Feet"
              className="rounded-2xl bg-white/95 px-5 py-4 text-gray-900 outline-none placeholder:text-gray-400 transition focus:ring-2 focus:ring-white/60"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Preferred date, time, and additional details"
              rows={4}
              className="rounded-2xl bg-white/95 px-5 py-4 text-gray-900 outline-none placeholder:text-gray-400 transition focus:ring-2 focus:ring-white/60"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#2EC4B6] px-8 py-4 font-semibold text-white shadow-[0_4px_20px_rgba(46,196,182,0.4)] transition hover:-translate-y-0.5 hover:bg-[#25aa9e] hover:shadow-[0_8px_28px_rgba(46,196,182,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Booking Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}