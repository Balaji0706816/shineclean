import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Carpet Cleaning",
    image: "/images/carpet1.png",
    desc: "Deep carpet cleaning to remove dirt, stains, and everyday buildup.",
  },
  {
    title: "Mattress Cleaning",
    image: "/images/Mattress2.png",
    desc: "Fresh mattress cleaning for a cleaner and healthier sleeping space.",
  },
  {
    title: "Window Cleaning",
    image: "/images/service3.PNG",
    desc: "Streak-free window cleaning for homes, apartments, and offices.",
  },
  {
    title: "Deep Cleaning",
    image: "/images/Deep.png",
    desc: "Detailed top-to-bottom cleaning for kitchens, bathrooms, and living areas.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F7F7FC]">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-[#E9E7FF] px-5 py-3 text-sm font-semibold text-[#6C63FF]">
              Our Services
            </span>

            <h1 className="mt-8 text-6xl font-bold text-[#111]">
              Professional cleaning for every space
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Choose from reliable residential and commercial cleaning services
              designed to keep your space fresh, healthy, and comfortable.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={520}
                  className="h-80 w-full object-cover"
                />

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-[#111]">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-8 text-[#6B7280]">
                    {service.desc}
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Professional equipment",
                      "Careful attention to detail",
                      "Flexible scheduling",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-[#6C63FF]" />
                        <span className="text-[#6B7280]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="mt-8 inline-block rounded-full bg-[#6C63FF] px-7 py-4 font-semibold text-white hover:bg-[#574ee4]"
                  >
                    Request Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}