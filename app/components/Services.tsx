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
    <section id="services" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-[#E9E7FF] px-4 py-2 text-sm font-semibold text-[#6C63FF]">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#111]">
            Cleaning Services
          </h2>

          <p className="mt-5 text-lg text-[#6B7280]">
            Professional cleaning solutions for homes, apartments, and offices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-[28px] bg-[#F7F7FC] shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={420}
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#111]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#6B7280]">
                  Reliable, detailed, and professional cleaning tailored to your
                  space.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}