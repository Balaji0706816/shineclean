import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#F7F7FC]">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-[#E9E7FF] px-5 py-3 text-sm font-semibold text-[#6C63FF]">
              Contact Us
            </span>

            <h1 className="mt-8 text-6xl font-bold text-[#111]">
              Request a cleaning quote
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Tell us what you need cleaned, and our team will get back to you
              with a professional estimate.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  text: "(617) 555-7890",
                },
                {
                  icon: Mail,
                  title: "Email",
                  text: "support@shineclean.com",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  text: "Boston, Massachusetts",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  text: "Mon - Sat: 8:00 AM - 6:00 PM",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] bg-white p-7 shadow-sm"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E7FF] text-[#6C63FF]">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold text-[#111]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[#6B7280]">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-[40px] bg-white p-8 shadow-xl lg:col-span-2">
              <h2 className="text-4xl font-bold text-[#111]">
                Get in touch
              </h2>

              <p className="mt-4 text-[#6B7280]">
                Fill out the form below and we will contact you shortly.
              </p>

              <form className="mt-10 grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-2xl bg-[#F7F7FC] px-5 py-5 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl bg-[#F7F7FC] px-5 py-5 outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="rounded-2xl bg-[#F7F7FC] px-5 py-5 outline-none"
                />

                <select className="rounded-2xl bg-[#F7F7FC] px-5 py-5 outline-none">
                  <option>Select Service</option>
                  <option>Home Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Move-In / Move-Out Cleaning</option>
                </select>

                <textarea
                  placeholder="Tell us about your cleaning needs"
                  className="min-h-40 rounded-2xl bg-[#F7F7FC] px-5 py-5 outline-none md:col-span-2"
                />

                <button
                  type="submit"
                  className="rounded-2xl bg-[#6C63FF] px-8 py-5 font-semibold text-white transition hover:bg-[#574ee4] md:col-span-2"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}