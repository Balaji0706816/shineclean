"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Recurring Cleaning");

  const plans = [
    {
      title: "Deep Cleaning",
      price: "$260–$450",
      note: "based on size & condition",
      desc: "A full reset for homes that need detailed cleaning from top to bottom.",
      features: [
        "Every room deep-cleaned",
        "Bathrooms sanitized top to bottom",
        "Kitchen surfaces and appliances",
        "Baseboards and corners",
        "Eco-friendly products available",
      ],
    },
    {
      title: "Recurring Cleaning",
      price: "$180–$260",
      note: "per visit, based on frequency",
      desc: "Weekly or biweekly maintenance cleaning for spotless living.",
      features: [
        "Same cleaner when available",
        "Priority scheduling",
        "Easy pause or reschedule",
        "Consistent home maintenance",
        "Flexible recurring plans",
      ],
    },
    {
      title: "Move-In / Move-Out",
      price: "$320–$520",
      note: "based on size & condition",
      desc: "Perfect for renters, landlords, and preparing homes before moving.",
      features: [
        "Inside cabinets and closets",
        "Walls and baseboards",
        "Appliance wipe-down",
        "Move-ready finish",
        "Detailed empty-home cleaning",
      ],
    },
  ];

  return (
    <main className="bg-[#F7F7FC] min-h-screen">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-[#E9E7FF] px-5 py-2 text-sm font-semibold text-[#6C63FF]">
              Pricing Plans
            </span>

            <h1 className="mt-6 text-5xl font-bold text-[#111]">
              Professional Cleaning Services
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
              Transparent pricing with premium cleaning professionals and
              flexible service options.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              const active = selectedPlan === plan.title;

              return (
                <div
                  key={plan.title}
                  onClick={() => setSelectedPlan(plan.title)}
                  className={`cursor-pointer rounded-[40px] border p-10 transition-all duration-300 hover:-translate-y-2
                  
                  ${
                    active
                      ? "border-[#6C63FF] bg-gradient-to-br from-[#F4F2FF] to-[#EEF3FF] shadow-2xl scale-[1.02]"
                      : "border-transparent bg-white shadow-lg"
                  }`}
                >
                  <div>
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        active
                          ? "bg-[#6C63FF] text-white"
                          : "bg-[#F3F4F6] text-[#6B7280]"
                      }`}
                    >
                      {active ? "Selected Plan" : "Cleaning Service"}
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-[#111]">
                      {plan.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-[#6B7280]">
                      {plan.desc}
                    </p>

                    <div className="mt-10">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                        Most homes fall between
                      </p>

                      <div className="mt-4 flex items-end gap-3">
                        <h3 className="text-6xl font-bold tracking-tight text-[#111]">
                          {plan.price}
                        </h3>
                      </div>

                      <p className="mt-3 text-lg text-[#6B7280]">
                        {plan.note}
                      </p>
                    </div>

                    <div className="my-10 h-px bg-black/10" />

                    <div className="space-y-5">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-4"
                        >
                          <CheckCircle
                            size={22}
                            className={`${
                              active
                                ? "text-[#6C63FF]"
                                : "text-[#9CA3AF]"
                            }`}
                          />

                          <span className="text-lg text-[#374151]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                   href="/booking"
                  className={`mt-12 flex w-full justify-center rounded-full px-8 py-5 text-lg font-semibold transition-all duration-300 ${
                  active
                  ? "bg-[#6C63FF] text-white shadow-lg"
                    : "bg-[#F3F4F6] text-[#111]"
                 }`}
>
                 Request Estimate
                 </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}