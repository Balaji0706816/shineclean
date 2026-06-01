import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "House Cleaning",
    slug: "house-cleaning",
    image: "/images/house cleaning.png",
    desc: "Professional cleaning for houses, apartments, and everyday living spaces.",
  },
  {
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    image: "/images/deep cleaning.png",
    desc: "Detailed top-to-bottom cleaning for kitchens, bathrooms, and high-touch areas.",
  },
  {
    title: "Apartment Cleaning",
    slug: "apartment-cleaning",
    image: "/images/apartment cleaning.png",
    desc: "Reliable apartment cleaning for renters, students, professionals, and families.",
  },
  {
    title: "Move Out Cleaning",
    slug: "move-out-cleaning",
    image: "/images/move out cleaning.png",
    desc: "Complete cleaning before moving out, landlord inspection, or new tenant arrival.",
  },
  {
    title: "House Keeping",
    slug: "house-keeping",
    image: "/images/house Keeping.png",
    desc: "Regular housekeeping services to keep your home neat, fresh, and organized.",
  },
  {
    title: "Recurring Cleaning",
    slug: "recurring-cleaning",
    image: "/images/recurring cleaning.png",
    desc: "Weekly, bi-weekly, or monthly cleaning plans for consistent home care.",
  },
  {
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    image: "/images/residential cleaning.png",
    desc: "Professional residential cleaning for homes, apartments, and condos.",
  },
  {
    title: "Maid Service",
    slug: "maid-service",
    image: "/images/maid services.png",
    desc: "Flexible maid services for everyday cleaning, tidying, and home maintenance.",
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

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#111] md:text-6xl">
              Professional Cleaning Services
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Reliable residential and commercial cleaning solutions designed
              to keep your home or workplace spotless.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="rounded-[32px] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={700}
                  height={450}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-52 w-full rounded-[24px] object-cover"
                />

                <h2 className="mt-6 text-2xl font-semibold text-[#111]">
                  {service.title}
                </h2>

                <p className="mt-4 min-h-[90px] text-base leading-7 text-[#6B7280]">
                  {service.desc}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex rounded-full bg-[#6C63FF] px-7 py-3 font-semibold text-white transition hover:bg-[#574ee4]"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}