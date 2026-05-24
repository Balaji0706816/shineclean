import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Basic Clean",
    price: "Custom",
    desc: "Best for regular home cleaning and light maintenance.",
    features: ["Dusting & wiping", "Vacuum & mop floors", "Kitchen surface cleaning", "Bathroom cleaning"],
  },
  {
    name: "Deep Clean",
    price: "Custom",
    desc: "Best for detailed cleaning before events or seasonal refresh.",
    features: ["Everything in Basic", "Detailed kitchen cleaning", "Detailed bathroom cleaning", "Baseboards & corners"],
  },
  {
    name: "Move-In / Move-Out",
    price: "Custom",
    desc: "Best for renters, landlords, and property managers.",
    features: ["Empty-home cleaning", "Cabinet cleaning", "Appliance wipe-down", "Final walkthrough clean"],
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#F7F7FC]">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-[#E9E7FF] px-5 py-3 text-sm font-semibold text-[#6C63FF]">
              Pricing
            </span>

            <h1 className="mt-8 text-6xl font-bold text-[#111]">
              Simple cleaning plans
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Every space is different, so we provide custom quotes based on your home, service type, and cleaning needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-[36px] bg-white p-8 shadow-sm ${
                  index === 1 ? "border-2 border-[#6C63FF] shadow-xl" : ""
                }`}
              >
                <h2 className="text-3xl font-bold text-[#111]">{plan.name}</h2>

                <p className="mt-4 text-[#6B7280]">{plan.desc}</p>

                <div className="mt-8">
                  <span className="text-5xl font-bold text-[#111]">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-[#6B7280]">Quote</span>
                </div>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle className="mt-1 text-[#6C63FF]" size={20} />
                      <p className="text-[#6B7280]">{feature}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="mt-10 block rounded-2xl bg-[#6C63FF] px-6 py-4 text-center font-semibold text-white hover:bg-[#574ee4]"
                >
                  Request Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}