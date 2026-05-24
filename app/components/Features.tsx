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
    <section className="-mt-10 relative z-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 bg-white rounded-3xl shadow-xl overflow-hidden">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-10 border-r last:border-r-0 border-gray-100"
          >
            <div className="text-[#6C63FF] mb-5">{item.icon}</div>

            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500 leading-7">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}