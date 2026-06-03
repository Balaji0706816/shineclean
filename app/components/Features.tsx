import { ShieldCheck, Clock3, Leaf } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Clock3 size={28} />,
      title: "Fast Booking",
      desc: "Book cleaning services online in minutes.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted Team",
      desc: "Professional verified cleaning experts.",
    },
    {
      icon: <Leaf size={28} />,
      title: "Eco Products",
      desc: "Safe products for kids and pets.",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 px-6">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_8px_48px_rgba(108,99,255,0.12)] md:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="group border-b border-gray-100 p-10 transition hover:bg-[#FDFCFF] md:border-b-0 md:border-r md:last:border-r-0"
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEEAFF] text-[#6C63FF] transition group-hover:bg-[#6C63FF] group-hover:text-white">
              {item.icon}
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#111]">
              {item.title}
            </h3>

            <p className="leading-7 text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}