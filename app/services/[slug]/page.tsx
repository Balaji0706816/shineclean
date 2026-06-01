import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const services = {
  "house-cleaning": {
    title: "House Cleaning",
    image: "/images/house cleaning.png",
    desc: "Professional house cleaning services designed to keep your home spotless, healthy, and comfortable.",
    includedTitle: "What’s included in house cleaning",
    includedDesc:
      "Our house cleaning service covers the main areas of your home and focuses on keeping your space fresh, organized, and comfortable.",
    included: [
      "Living room and bedroom dusting",
      "Kitchen counters and appliance exteriors",
      "Bathroom sinks, mirrors, tubs, and toilets",
      "Vacuuming carpets and rugs",
      "Sweeping and mopping floors",
    ],
    trustTitle: "Why homeowners choose our house cleaning",
    trustText:
      "Keeping a home clean takes time and energy. Our house cleaning service helps busy families, professionals, and homeowners maintain a fresh and comfortable living space without spending weekends doing all the work. We focus on consistency, care, and attention to detail during every visit.",
    planTitle: "A simple cleaning plan for your home",
    planText:
      "You can book a one-time cleaning or schedule weekly, bi-weekly, or monthly visits. Our team will help you choose a cleaning plan that fits your home, schedule, and lifestyle.",
    faqs: [
      {
        q: "How often should I book house cleaning?",
        a: "Many customers choose weekly or bi-weekly cleaning, but one-time and monthly cleanings are also available.",
      },
      {
        q: "Do I need to provide supplies?",
        a: "No. Our team brings the cleaning supplies and equipment needed for the service.",
      },
      {
        q: "Can I request specific rooms?",
        a: "Yes. You can mention your priority areas when booking.",
      },
    ],
  },

  "deep-cleaning": {
    title: "Deep Cleaning",
    image: "/images/deep cleaning.png",
    desc: "Detailed top-to-bottom cleaning for homes that need extra care and attention.",
    includedTitle: "What’s included in deep cleaning",
    includedDesc:
      "Deep cleaning is ideal when your home needs more detailed work beyond a regular cleaning visit.",
    included: [
      "Detailed kitchen cleaning",
      "Bathroom grout and fixture cleaning",
      "Baseboards and door frames wiped",
      "Dust buildup removed from corners",
      "Appliance exterior cleaning",
      "Hard-to-reach surfaces cleaned",
    ],
    trustTitle: "Why deep cleaning makes a difference",
    trustText:
      "Regular cleaning helps maintain your home, but over time dust, dirt, grease, and hidden buildup can collect in areas that are not part of everyday cleaning routines. Deep cleaning targets those overlooked spaces and provides a more complete refresh for your entire home. Our team focuses on kitchens, bathrooms, baseboards, corners, fixtures, appliances, and other high-use areas where dirt tends to accumulate.",
    planTitle: "Perfect for first-time, seasonal, and special occasion cleaning",
    planText:
      "Deep cleaning is one of the best options before hosting guests, after busy months, before selling a home, after renovations, or before starting recurring service. Many customers choose deep cleaning as their first appointment because it creates a strong foundation for easier ongoing maintenance.",
    faqs: [
      {
        q: "How long does deep cleaning take?",
        a: "The time depends on the size and condition of the property. Most deep cleaning appointments take several hours.",
      },
      {
        q: "Is deep cleaning different from regular cleaning?",
        a: "Yes. Deep cleaning focuses on detail areas like baseboards, buildup, corners, fixtures, and harder-to-reach surfaces.",
      },
      {
        q: "Should I book deep cleaning before recurring cleaning?",
        a: "Yes. Many customers start with deep cleaning and then move to weekly, bi-weekly, or monthly cleaning.",
      },
      {
        q: "What areas receive the most attention?",
        a: "Kitchens, bathrooms, baseboards, fixtures, corners, high-touch surfaces, and buildup-prone areas.",
      },
    ],
  },

  "apartment-cleaning": {
    title: "Apartment Cleaning",
    image: "/images/apartment cleaning.png",
    desc: "Reliable apartment cleaning services for renters, students, and busy professionals.",
    includedTitle: "What’s included in apartment cleaning",
    includedDesc:
      "Apartment cleaning is designed for smaller spaces that need efficient, reliable, and careful cleaning.",
    included: [
      "Kitchen and bathroom refresh",
      "Living area dusting",
      "Bedroom surface cleaning",
      "Floor vacuuming and mopping",
      "Trash removal",
      "Small-space detail cleaning",
    ],
    trustTitle: "Why apartment residents trust us",
    trustText:
      "Apartment living can get busy quickly, especially for students, renters, and professionals. Our apartment cleaning service is designed to keep your space fresh, organized, and easy to maintain. We understand smaller layouts, shared buildings, tight schedules, and quick turnaround needs.",
    planTitle: "Perfect for renters and professionals",
    planText:
      "Book apartment cleaning before guests arrive, after a busy work week, before an inspection, or as part of a recurring cleaning routine.",
    faqs: [
      {
        q: "Do you clean small apartments and studios?",
        a: "Yes. We clean studios, one-bedroom apartments, multi-bedroom apartments, and shared spaces.",
      },
      {
        q: "Can I book apartment cleaning regularly?",
        a: "Yes. Weekly, bi-weekly, and monthly apartment cleaning plans are available.",
      },
      {
        q: "Do you clean rental units?",
        a: "Yes. We clean rentals, student apartments, and occupied apartment spaces.",
      },
    ],
  },

  "move-out-cleaning": {
    title: "Move Out Cleaning",
    image: "/images/move out cleaning.png",
    desc: "Complete cleaning before moving out, helping you leave the property spotless.",
    includedTitle: "What’s included in move-out cleaning",
    includedDesc:
      "Move-out cleaning helps prepare the property for inspection, landlords, new tenants, or sale.",
    included: [
      "Empty room cleaning",
      "Kitchen cabinet exterior wiping",
      "Bathroom full cleaning",
      "Floors vacuumed and mopped",
      "Baseboards and surfaces dusted",
      "Final walkthrough cleaning",
    ],
    trustTitle: "Why move-out cleaning matters",
    trustText:
      "Moving can be stressful, and cleaning is often the last thing people want to handle. A professional move-out clean helps leave the space fresh, presentable, and ready for landlords, buyers, or the next tenant. It can also help reduce stress during the moving process.",
    planTitle: "Leave the space ready",
    planText:
      "Book move-out cleaning before handing over keys, listing a property, preparing for a walkthrough, or moving into a new home.",
    faqs: [
      {
        q: "Should the home be empty before move-out cleaning?",
        a: "It is best if the space is mostly empty so our team can clean floors, surfaces, and rooms more thoroughly.",
      },
      {
        q: "Do you clean before landlord inspection?",
        a: "Yes. Move-out cleaning is ideal before inspections and final walkthroughs.",
      },
      {
        q: "Do you clean cabinets and appliances?",
        a: "We can clean appliance exteriors and cabinet exteriors as part of the service.",
      },
    ],
  },

  "house-keeping": {
    title: "House Keeping",
    image: "/images/house Keeping.png",
    desc: "Regular housekeeping services to maintain a clean and organized home.",
    includedTitle: "What’s included in housekeeping",
    includedDesc:
      "Housekeeping focuses on regular upkeep, light cleaning, and keeping your home organized.",
    included: [
      "General tidying",
      "Surface wiping",
      "Light kitchen cleaning",
      "Bathroom refresh",
      "Bed making",
      "Trash removal",
    ],
    trustTitle: "Why housekeeping helps",
    trustText:
      "Housekeeping keeps your home manageable between deeper cleaning visits. It is helpful for busy households that need regular support with tidying, light cleaning, and everyday upkeep.",
    planTitle: "Great for ongoing home care",
    planText:
      "Choose weekly or bi-weekly housekeeping depending on your home size, schedule, and cleaning needs.",
    faqs: [
      {
        q: "Is housekeeping the same as deep cleaning?",
        a: "No. Housekeeping is usually lighter and focused on regular upkeep, while deep cleaning is more detailed.",
      },
      {
        q: "Can I schedule housekeeping weekly?",
        a: "Yes. Weekly and bi-weekly housekeeping options are available.",
      },
      {
        q: "Does housekeeping include organizing?",
        a: "Light organizing and tidying can be included depending on your request.",
      },
    ],
  },

  "recurring-cleaning": {
    title: "Recurring Cleaning",
    image: "/images/recurring cleaning.png",
    desc: "Weekly, bi-weekly, and monthly cleaning plans tailored to your needs.",
    includedTitle: "What’s included in recurring cleaning",
    includedDesc:
      "Recurring cleaning keeps your home consistently fresh without needing to book every time.",
    included: [
      "Scheduled weekly or bi-weekly cleaning",
      "Kitchen and bathroom cleaning",
      "Floor care",
      "Dusting and wiping surfaces",
      "Trash removal",
      "Consistent cleaning checklist",
    ],
    trustTitle: "Why recurring cleaning works",
    trustText:
      "A regular cleaning plan prevents dirt and clutter from building up. Instead of waiting until the home feels overwhelming, recurring cleaning keeps your space comfortable week after week.",
    planTitle: "Set it and relax",
    planText:
      "Pick the cleaning frequency that works for your lifestyle. We offer weekly, bi-weekly, and monthly options for homes and apartments.",
    faqs: [
      {
        q: "Can I choose weekly or bi-weekly service?",
        a: "Yes. You can choose weekly, bi-weekly, or monthly recurring cleaning.",
      },
      {
        q: "Can I change my schedule later?",
        a: "Yes. You can request changes based on availability.",
      },
      {
        q: "Is recurring cleaning cheaper than one-time cleaning?",
        a: "Recurring plans may be more cost-effective depending on frequency and service needs.",
      },
    ],
  },

  "residential-cleaning": {
    title: "Residential Cleaning",
    image: "/images/residential cleaning.png",
    desc: "Comprehensive residential cleaning solutions for homes and living spaces.",
    includedTitle: "What’s included in residential cleaning",
    includedDesc:
      "Residential cleaning covers everyday home cleaning needs for houses, condos, and apartments.",
    included: [
      "Kitchen cleaning",
      "Bathroom cleaning",
      "Bedroom refresh",
      "Living room cleaning",
      "Floor vacuuming and mopping",
      "Dusting and surface wiping",
    ],
    trustTitle: "Why residential clients choose us",
    trustText:
      "Every home is different. Our residential cleaning service is flexible enough for houses, apartments, condos, and family homes of different sizes and layouts.",
    planTitle: "Cleaning built around your home",
    planText:
      "Tell us what you need and we’ll recommend a cleaning service that fits your home and schedule.",
    faqs: [
      {
        q: "Do you clean houses and condos?",
        a: "Yes. We clean homes, condos, apartments, and residential living spaces.",
      },
      {
        q: "Can I request specific rooms?",
        a: "Yes. You can request priority areas when booking.",
      },
      {
        q: "Do you offer one-time residential cleaning?",
        a: "Yes. One-time and recurring residential cleaning services are available.",
      },
    ],
  },

  "maid-service": {
    title: "Maid Service",
    image: "/images/maid services.png",
    desc: "Professional maid services for ongoing household cleaning and maintenance.",
    includedTitle: "What’s included in maid service",
    includedDesc:
      "Maid service is ideal for routine cleaning, light organization, and everyday home maintenance.",
    included: [
      "General cleaning",
      "Light tidying",
      "Kitchen refresh",
      "Bathroom cleaning",
      "Dusting and floors",
      "Home upkeep support",
    ],
    trustTitle: "Why choose maid service",
    trustText:
      "Maid service is flexible and convenient for people who need regular help keeping their home clean. It is ideal for busy families, professionals, and households that need reliable support.",
    planTitle: "Simple support for everyday cleaning",
    planText:
      "Book one-time or recurring maid service based on your household needs.",
    faqs: [
      {
        q: "Is maid service available weekly?",
        a: "Yes. Weekly, bi-weekly, and monthly maid service options are available.",
      },
      {
        q: "Can maid service include light tidying?",
        a: "Yes. Light tidying can be included depending on your request.",
      },
      {
        q: "Is maid service good for busy families?",
        a: "Yes. It is a convenient option for families and professionals who need regular home support.",
      },
    ],
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) notFound();

  return (
    <main className="bg-[#F7F7FC]">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-8 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6C63FF]">
                Services
              </p>

              <h1 className="mt-6 text-5xl font-bold leading-tight text-[#111] md:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-xl text-xl leading-9 text-[#6B7280]">
                {service.desc}
              </p>

              <Link
                href="/booking"
                className="mt-8 inline-flex rounded-full bg-[#6C63FF] px-8 py-4 font-semibold text-white"
              >
                Book This Service
              </Link>
            </div>

            <Image
              src={service.image}
              alt={service.title}
              width={900}
              height={650}
              priority
              loading="eager"
              className="h-[430px] w-full rounded-[34px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="rounded-[40px] bg-[#6C63FF] p-10 text-white md:p-14">
              <h2 className="text-4xl font-bold">{service.includedTitle}</h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
                {service.includedDesc}
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {service.included.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-[24px] bg-white/12 p-5"
                  >
                    <CheckCircle className="mt-1 shrink-0" size={22} />
                    <span className="leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 space-y-10">
              <section className="rounded-[36px] bg-white p-10 shadow-sm">
                <h2 className="text-4xl font-bold text-[#111]">
                  {service.trustTitle}
                </h2>
                <p className="mt-5 text-lg leading-9 text-[#555]">
                  {service.trustText}
                </p>
              </section>

              <section className="rounded-[36px] bg-white p-10 shadow-sm">
                <h2 className="text-4xl font-bold text-[#111]">
                  {service.planTitle}
                </h2>
                <p className="mt-5 text-lg leading-9 text-[#555]">
                  {service.planText}
                </p>
              </section>

              <section>
                <h2 className="text-5xl font-bold text-[#111]">
                  Frequently Asked Questions
                </h2>

                <div className="mt-10 space-y-6">
                  {service.faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="rounded-[28px] bg-white p-8 shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-[#111]">
                        {faq.q}
                      </h3>
                      <p className="mt-4 leading-7 text-[#6B7280]">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[36px] bg-[#6C63FF] p-10 text-center text-white shadow-sm">
                <h3 className="text-4xl font-bold">
                  Schedule your {service.title.toLowerCase()} today
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">
                  Submit your booking request and our team will contact you to
                  confirm service details and availability.
                </p>

                <Link
                  href="/booking"
                  className="mt-8 inline-block rounded-full bg-white px-9 py-4 font-semibold text-[#6C63FF]"
                >
                  Book Now
                </Link>
              </section>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[34px] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-[#111]">
                Choose Any Service
              </h3>

              <div className="mt-6 space-y-3">
                {Object.entries(services).map(([key, item]) => (
                  <Link
                    key={key}
                    href={`/services/${key}`}
                    className="flex items-center justify-between rounded-2xl bg-[#F7F7FC] px-5 py-4 font-semibold text-[#111] transition hover:bg-[#E9E7FF] hover:text-[#6C63FF]"
                  >
                    {item.title}
                    <ArrowRight size={18} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] bg-[#E9E7FF] p-8">
              <h3 className="text-3xl font-bold text-[#111]">
                Need help choosing?
              </h3>

              <p className="mt-4 leading-7 text-[#6B7280]">
                Not sure which service fits your home? Send a booking request
                and we’ll recommend the best option.
              </p>

              <Link
                href="/booking"
                className="mt-7 inline-block rounded-full bg-[#6C63FF] px-7 py-3 font-semibold text-white"
              >
                Get Help
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}