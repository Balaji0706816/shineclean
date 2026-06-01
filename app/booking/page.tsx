"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    propertySize: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          propertySize: "",
          message: "",
        });
      } else {
        alert("Failed to submit booking.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#F8F8FC_0%,#F1EEFF_45%,#ECEBFF_100%)] px-6 py-14">
      <div className="mx-auto max-w-4xl">

      <button
  type="button"
  onClick={() => router.back()}
  className="text-sm font-semibold text-[#6C63FF] hover:underline"
>
  ← Back
</button>

        <div className="mt-10 rounded-[40px] border border-white/40 bg-white/80 p-10 shadow-2xl backdrop-blur-xl">

          <div className="text-center">
            <span className="rounded-full bg-[#E9E7FF] px-5 py-2 text-sm font-semibold text-[#6C63FF]">
              Premium Cleaning Services
            </span>

            <h1 className="mt-6 text-5xl font-bold text-[#111]">
              Schedule Your Cleaning Service
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#6B7280]">
              Fill out the form below and our team will contact you shortly.
            </p>
          </div>

          {success && (
            <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 px-6 py-5 text-green-800">
              <h3 className="text-lg font-bold">
                Booking request received!
              </h3>

              <p className="mt-2 text-sm">
                Thank you for contacting ShineClean. Our team will review your
                request and get back to you shortly.
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
              >
                <option value="">Select Service</option>
                <option>Basic Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move-In / Move-Out</option>
                <option>Office Cleaning</option>
              </select>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
              />

              <input
                type="text"
                name="propertySize"
                value={formData.propertySize}
                onChange={handleChange}
                placeholder="Property Size"
                required
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
              />

            </div>

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Information"
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-[#6C63FF] px-6 py-5 text-lg font-semibold text-white transition hover:bg-[#584DFF]"
            >
              {loading
                ? "Submitting Request..."
                : "Submit Booking Request"}
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}