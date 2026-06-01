import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, MapPin } from "lucide-react";

const areas = [
  "Boston",
  "Cambridge",
  "Somerville",
  "Brookline",
  "Quincy",
  "Newton",
  "Dorchester",
  "Chelsea",
  "Everett",
  "Revere",
  "Medford",
  "Malden",
];

export default function ServiceAreasPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-gray-200 pb-20 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6C63FF]">
                Cleaning Locations
              </p>

              <h1 className="mt-6 max-w-3xl text-6xl font-bold leading-tight text-[#111]">
                Find a cleaning service near you
              </h1>
            </div>

            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-lg leading-8 text-[#6B7280]">
                ShineClean proudly serves homes, apartments, offices, and rental
                properties across Greater Boston and nearby communities.
              </p>

              <a
                href="/booking"
                className="mt-8 inline-flex w-fit rounded-full bg-[#6C63FF] px-8 py-4 font-semibold text-white transition hover:bg-[#574ee4]"
              >
                Check Availability
              </a>
            </div>
          </div>

          <div className="py-20 text-center">
            <h2 className="text-4xl font-bold text-[#111]">
              Choose the closest city to view services
            </h2>

            <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-5">
              {areas.map((area) => (
                <a
                  key={area}
                  href="/booking"
                  className="inline-flex items-center gap-3 rounded-full bg-[#F1F7EE] px-6 py-4 font-semibold text-[#111] transition hover:bg-[#E9E7FF] hover:text-[#6C63FF]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DDF4D0] text-[#6C63FF]">
                    <CheckCircle size={16} />
                  </span>
                  {area}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[44px] bg-[#F1F7EE] px-8 py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6C63FF]">
                Local Cleaning Team
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-[#111]">
                Reliable cleaning services across Greater Boston
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
                Whether you need a one-time clean, recurring service, move-out
                cleaning, or office cleaning, our team is ready to help with
                professional care and flexible scheduling.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
              {[
                "Flexible scheduling",
                "Local cleaning professionals",
                "Fast response for nearby areas",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] bg-white p-7 text-center shadow-sm"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E7FF] text-[#6C63FF]">
                    <MapPin size={24} />
                  </div>

                  <p className="font-semibold text-[#111]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/booking"
                className="inline-flex rounded-full bg-[#6C63FF] px-10 py-5 text-lg font-semibold text-white transition hover:bg-[#574ee4]"
              >
                Book Cleaning Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}