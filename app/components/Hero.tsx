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
    <section className="min-h-[850px] bg-[#F7F7FC]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
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
            <a
              href="/booking"
              className="rounded-full bg-[#6C63FF] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#574ee4]"
            >
              Contact Us
            </a>

            <a
              href="/services"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-[#111] transition hover:border-[#6C63FF] hover:text-[#6C63FF]"
            >
              View Services
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative rounded-[40px] bg-[#EF3FA0] p-10 shadow-2xl"
        >
          <h2 className="text-center text-4xl font-bold text-white">
            Book Your Cleaning
          </h2>

          <p className="mt-2 text-center text-white/90">
            Quick request. No commitment.
          </p>

          <div className="mt-8 grid gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name *"
              className="rounded-2xl bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number *"
                className="rounded-2xl bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address *"
                className="rounded-2xl bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
              />
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="rounded-2xl bg-white px-5 py-4 text-gray-900 outline-none"
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
              className="rounded-2xl bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Preferred date, time, and additional details"
              rows={5}
              className="rounded-2xl bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#2EC4B6] px-8 py-4 font-semibold text-white transition hover:bg-[#25aa9e] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}