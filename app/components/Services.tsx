import Image from "next/image";

const services = [
  {
    title: "Carpet Cleaning",
    image: "/images/carpet1.png",
  },
  {
    title: "Mattress Cleaning",
    image: "/images/Mattress2.png",
  },
  {
    title: "Window Cleaning",
    image: "/images/service3.PNG",
  },
  {
    title: "Deep Cleaning",
    image: "/images/service4.PNG",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-white to-[#F5F3FF]/40 py-28">
      {/* Soft bg blob */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#EDE9FF] opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E9E7FF] px-5 py-2 text-sm font-semibold text-[#6C63FF]">
            Our Services
          </span>

          <h2 className="mt-6 leading-tight text-[#111]">
            <span className="block text-3xl font-light text-[#888]">Professional</span>
            <span className="block text-5xl font-bold">
              Cleaning{" "}
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9D97FF] bg-clip-text text-transparent">
                Services
              </span>
            </span>
          </h2>

          <p className="mt-5 text-lg text-[#6B7280]">
            Professional cleaning solutions for homes, apartments, and offices.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-[28px] bg-white shadow-[0_4px_24px_rgba(108,99,255,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(108,99,255,0.18)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={420}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#111]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#6B7280]">
                  Reliable, detailed, and professional cleaning tailored to your
                  space.
                </p>

                <a
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#6C63FF] transition hover:gap-2.5"
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}