"use client";

import { use, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const cityData: Record<
  string,
  {
    name: string;
    zipCodes: string[];
    areas: string;
  }
> = {
  boston: {
    name: "Boston",
    zipCodes: ["02108", "02109", "02110", "02111", "02113", "02114", "02115", "02116", "02118", "02127"],
    areas: "Back Bay, South End, Beacon Hill, North End, Seaport, Fenway, Allston, Brighton, and Downtown Boston",
  },
  cambridge: {
    name: "Cambridge",
    zipCodes: ["02138", "02139", "02140", "02141", "02142"],
    areas: "Harvard Square, Central Square, Kendall Square, Porter Square, Inman Square, and Cambridgeport",
  },
  somerville: {
    name: "Somerville",
    zipCodes: ["02143", "02144", "02145"],
    areas: "Davis Square, Union Square, Assembly Row, Ball Square, Winter Hill, East Somerville, and Spring Hill",
  },
  brookline: {
    name: "Brookline",
    zipCodes: ["02445", "02446", "02447", "02467"],
    areas: "Coolidge Corner, Brookline Village, Washington Square, Chestnut Hill, and Longwood",
  },
  quincy: {
    name: "Quincy",
    zipCodes: ["02169", "02170", "02171"],
    areas: "Quincy Center, Wollaston, North Quincy, Marina Bay, and Adams Shore",
  },
  newton: {
    name: "Newton",
    zipCodes: ["02458", "02459", "02460", "02461", "02462", "02464", "02465", "02466", "02467", "02468"],
    areas: "Newton Centre, Newton Highlands, Newtonville, Chestnut Hill, Auburndale, Waban, and West Newton",
  },
  dorchester: {
    name: "Dorchester",
    zipCodes: ["02121", "02122", "02124", "02125"],
    areas: "Fields Corner, Ashmont, Savin Hill, Codman Square, Uphams Corner, and Lower Mills",
  },
  chelsea: {
    name: "Chelsea",
    zipCodes: ["02150"],
    areas: "Admirals Hill, Bellingham Square, Prattville, Box District, and Cary Square",
  },
  everett: {
    name: "Everett",
    zipCodes: ["02149"],
    areas: "Glendale, Ferry Street, Everett Square, and Rivergreen",
  },
  revere: {
    name: "Revere",
    zipCodes: ["02151"],
    areas: "Revere Beach, Beachmont, North Revere, Oak Island, and Point of Pines",
  },
  medford: {
    name: "Medford",
    zipCodes: ["02155"],
    areas: "West Medford, Wellington, Medford Square, South Medford, and Lawrence Estates",
  },
  malden: {
    name: "Malden",
    zipCodes: ["02148"],
    areas: "Malden Center, Edgeworth, Maplewood, Linden, and Forestdale",
  },
};

export default function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: cityParam } = use(params);

  const citySlug = decodeURIComponent(cityParam).toLowerCase();
  const city = cityData[citySlug] || cityData.boston;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertySize: "",
    date: "",
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
        body: JSON.stringify({
          ...formData,
          date: "",
          propertySize: city.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
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
      } else {
        alert("Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="bg-white">
      <Navbar />

      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[42px] bg-[#F5F8F2] px-8 py-24 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
              Service Areas
            </p>

            <h1 className="mt-6 text-6xl font-bold text-[#111]">
              {city.name}
            </h1>
          </div>

          <div className="mt-16 grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#6C63FF]">
                {city.name}
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-tight text-[#111]">
                House Cleaning Services in {city.name}, MA
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#222]">
                ShineClean provides professional house cleaning services across{" "}
                {city.name}. Whether you need a one-time deep clean, recurring
                cleaning, apartment cleaning, or move-out cleaning, our team is
                ready to help keep your home fresh and comfortable.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#222]">
                We serve homes, apartments, offices, and rental properties near{" "}
                {city.areas}. Our cleaners arrive prepared, communicate clearly,
                and focus on the details that make your space feel truly clean.
              </p>
            </div>

            <div className="rounded-[34px] bg-[#F1F7EE] p-8">
              <h3 className="text-3xl font-bold text-[#111]">
                Get Your Estimate & Book Now
              </h3>

              <p className="mt-3 text-[#333]">
                Complete the form to schedule your service quickly.
              </p>

              {success && (
                <div className="mt-6 rounded-xl bg-green-50 p-4 font-semibold text-green-700">
                  Request submitted successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
                  placeholder="Your name *"
                />

                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
                  placeholder="Phone number *"
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
                  placeholder="Email address *"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
                >
                  <option value="">Select service</option>
                  <option>House Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Apartment Cleaning</option>
                  <option>Move Out Cleaning</option>
                  <option>Recurring Cleaning</option>
                  <option>Maid Service</option>
                </select>
                <div className="grid gap-5 md:grid-cols-2">
  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    className="rounded-2xl border border-gray-200 bg-white pl-4 pr-6 py-5 text-gray-700 outline-none"
/>

  <input
    type="text"
    name="propertySize"
    value={formData.propertySize}
    onChange={handleChange}
    placeholder="Property Size"
    className="rounded-2xl border border-gray-200 bg-white px-6 py-5 text-gray-900 placeholder:text-gray-400 outline-none"
  />
</div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
                  placeholder="Preferred date, time, and additional details"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-fit rounded-full bg-[#6C63FF] px-9 py-4 font-semibold text-white"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-200 pt-16 text-center">
            <h2 className="text-5xl font-bold text-[#111]">
              Professional Cleaning Services Across {city.name}
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#333]">
              Our team serves every part of {city.name}, from quiet residential
              streets to busy apartments, offices, rental properties, and family
              homes.
            </p>

            <h3 className="mt-14 text-4xl font-bold text-[#111]">
              {city.name} zip codes we serve
            </h3>

            <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-8">
              {city.zipCodes.map((zip) => (
                <span
                  key={zip}
                  className="inline-flex items-center gap-3 text-lg text-[#111]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#29BDB4] text-white">
                    <CheckCircle size={16} />
                  </span>
                  {zip}
                </span>
              ))}
            </div>

            <h3 className="mt-16 text-4xl font-bold text-[#111]">
              Popular neighborhoods we cover
            </h3>

            <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-[#333]">
              {city.areas}. No matter where you are, our team brings reliable
              service, safe cleaning products, and careful attention to every
              space.
            </p>
          </div>

          <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
            <Image
              src="/images/house cleaning.png"
              alt="House cleaning"
              width={900}
              height={650}
              className="h-[430px] w-full rounded-[32px] object-cover"
            />

            <div>
              <h2 className="text-5xl font-bold leading-tight text-[#111]">
                Our Cleaning Services in {city.name}
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#333]">
                ShineClean offers a complete range of professional cleaning
                services for homeowners, renters, families, and businesses.
              </p>

              <ul className="mt-6 space-y-3 text-lg leading-8 text-[#111]">
                <li>
                  <b>House Cleaning</b> — regular cleaning to maintain a spotless
                  home
                </li>
                <li>
                  <b>Deep Cleaning</b> — detailed cleaning for hidden corners and
                  buildup
                </li>
                <li>
                  <b>Move In / Move Out Cleaning</b> — ideal for renters and
                  landlords
                </li>
                <li>
                  <b>Apartment Cleaning</b> — convenient cleaning for smaller
                  spaces
                </li>
                <li>
                  <b>Recurring Cleaning</b> — weekly, bi-weekly, or monthly
                  service
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-5xl font-bold text-[#111]">
              Schedule Your {city.name} Cleaning Service Today
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#333]">
              Take cleaning off your list and enjoy more time for your home,
              family, and work. Schedule your next cleaning through our online
              booking form.
            </p>

            <a
              href="/booking"
              className="mt-8 inline-flex rounded-full bg-[#6C63FF] px-10 py-5 text-lg font-semibold text-white"
            >
              Schedule Cleaning
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}