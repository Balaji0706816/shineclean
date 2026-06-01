import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Phone, Plus, CreditCard, ShieldCheck, Sparkles } from "lucide-react";

const faqs = [
  {
    category: "Booking",
    items: [
      ["How do I book a cleaning?", "You can book through our online form or call us directly. Share your name, phone number, location, service type, and preferred date."],
      ["Can I choose a specific time?", "Yes. You can request a preferred time, and our team will confirm availability before scheduling."],
      ["Can I reschedule my cleaning?", "Yes. Please contact us as early as possible so we can move your appointment to another available time."],
      ["Do you offer same-day cleaning?", "Same-day cleaning may be available depending on our schedule. Contact us early for the best chance."],
      ["Do I need to sign a contract?", "No contract is required for one-time cleanings. Recurring cleaning can be scheduled based on your needs."],
    ],
  },
  {
    category: "Payments & Pricing",
    items: [
      ["What payment methods do you accept?", "We can accept major payment methods such as cards and online payments depending on your booking setup. Payment details are confirmed during scheduling."],
      ["Do you accept credit or debit cards?", "Yes, card payments can be supported for customer convenience."],
      ["Do you accept Apple Pay or Google Pay?", "Digital wallet options may be available if enabled at checkout. You can confirm payment options before booking."],
      ["Do you accept cash?", "Cash may be accepted depending on the appointment arrangement. Please confirm before the service."],
      ["Do I pay before or after cleaning?", "Payment timing depends on the booking type. For most services, payment details are confirmed before the appointment."],
      ["How much does house cleaning cost?", "Pricing depends on property size, condition, service type, and cleaning frequency. Request a free quote for accurate pricing."],
      ["Do you offer free estimates?", "Yes. Submit your cleaning request and we will provide an estimate based on your home and service needs."],
      ["Are there hidden fees?", "No. We aim to keep pricing clear. Any add-ons or special requests are discussed before confirming the service."],
      ["Do you offer recurring cleaning discounts?", "Recurring customers may receive better package options depending on cleaning frequency and property needs."],
      ["Should I tip the cleaner?", "Tipping is optional, but always appreciated if you are happy with the service."],
    ],
  },
  {
    category: "Services",
    items: [
      ["What is included in standard cleaning?", "Standard cleaning includes general dusting, vacuuming, mopping, kitchen surfaces, bathroom cleaning, trash removal, and basic room cleaning."],
      ["What is deep cleaning?", "Deep cleaning is more detailed and focuses on built-up dirt, baseboards, corners, kitchens, bathrooms, and hard-to-reach areas."],
      ["Do you offer move-in cleaning?", "Yes. Move-in cleaning helps prepare your new home before you settle in."],
      ["Do you offer move-out cleaning?", "Yes. Move-out cleaning helps renters, landlords, and homeowners prepare a property for inspection or the next tenant."],
      ["Do you clean apartments and condos?", "Yes. We clean apartments, condos, studios, shared homes, and rental units."],
      ["Do you clean offices?", "Yes. We clean small offices, workspaces, and commercial spaces."],
      ["Do you clean Airbnb or rental properties?", "Yes. We can help with short-term rental turnovers and guest-ready cleaning."],
      ["Do you clean after parties or events?", "Yes. We can help with post-event cleaning, trash removal, floors, kitchens, and bathrooms."],
    ],
  },
  {
    category: "Supplies & Home Access",
    items: [
      ["Do you bring your own supplies?", "Yes. Our cleaners can bring professional supplies and equipment."],
      ["Can you use my cleaning products?", "Yes. If you prefer specific products, leave them available and mention it during booking."],
      ["Are your products safe for pets and kids?", "We can use family-friendly products upon request. Please tell us about pets, children, or sensitivities before the appointment."],
      ["Do I need to be home during cleaning?", "No. Many customers provide access instructions before the appointment."],
      ["What should I do before cleaners arrive?", "Please remove personal items, valuables, and clutter when possible so cleaners can focus on cleaning."],
      ["Can I leave special instructions?", "Yes. You can share priority rooms, access codes, parking notes, pet instructions, or product preferences."],
    ],
  },
  {
    category: "Service Areas",
    items: [
      ["What areas do you serve?", "We serve Boston, Cambridge, Somerville, Brookline, Quincy, Newton, Dorchester, Chelsea, Everett, Revere, Medford, Malden, and nearby Greater Boston areas."],
      ["Do you serve outside Greater Boston?", "We mainly serve Greater Boston and nearby communities. If your location is not listed, contact us and we will confirm availability."],
      ["Do you clean homes with pets?", "Yes. Please let us know about pets before the appointment so our team can plan safely."],
      ["Can I request the same cleaner every time?", "We try our best to send the same cleaner for recurring customers whenever scheduling allows."],
      ["What if I am not happy with the cleaning?", "Contact us and let us know what needs attention. We take feedback seriously and want every customer to feel satisfied."],
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#FBFBF8]">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <span className="rounded-full bg-[#E9E7FF] px-5 py-3 text-sm font-bold text-[#6C63FF]">
                FAQ
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-[#111] md:text-6xl">
                Clear answers before you book your cleaning
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B7280]">
                Find answers about booking, pricing, payments, supplies,
                service areas, home access, recurring cleaning, and special
                cleaning requests.
              </p>

              <div className="mt-10 grid gap-4">
                <div className="rounded-[28px] bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9E7FF] text-[#6C63FF]">
                      <CreditCard size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111]">Payment support</h3>
                      <p className="text-sm leading-6 text-[#6B7280]">
                        Cards, online payment options, and clear estimates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9E7FF] text-[#6C63FF]">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111]">Reliable service</h3>
                      <p className="text-sm leading-6 text-[#6B7280]">
                        Clear communication from booking to final walkthrough.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[34px] bg-gradient-to-br from-[#F7A8D7] via-[#F8D9D7] to-[#E9F8D8] p-9">
                <Sparkles className="mb-5 text-[#111]" size={34} />
                <h2 className="text-3xl font-semibold leading-tight text-[#111]">
                  Still have questions? We’re happy to help.
                </h2>

                <a
                  href="tel:+16175557890"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 font-semibold text-[#111]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6C63FF] text-white">
                    <Phone size={20} />
                  </span>
                  +1 (617) 555-7890
                </a>
              </div>
            </div>

            <div className="space-y-10">
              {faqs.map((section) => (
                <div
                  key={section.category}
                  className="rounded-[36px] bg-white p-6 shadow-sm md:p-8"
                >
                  <h2 className="mb-5 text-3xl font-bold text-[#111]">
                    {section.category}
                  </h2>

                  <div className="space-y-4">
                    {section.items.map(([q, a], index) => (
                      <details
                        key={q}
                        className="group rounded-[24px] bg-[#F3F8F1] p-5 transition hover:shadow-sm"
                        open={index === 0}
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold text-[#111]">
                          {q}
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition group-open:rotate-45">
                            <Plus size={20} />
                          </span>
                        </summary>

                        <p className="mt-4 border-t border-[#DDE8D8] pt-4 leading-7 text-[#4B5563]">
                          {a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[42px] bg-[#6C63FF] px-8 py-16 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold">
            Ready to get your free quote?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Send your cleaning request and our team will help you schedule the
            right service for your home or business.
          </p>

          <Link
            href="/booking"
            className="mt-8 inline-flex rounded-full bg-white px-9 py-4 font-semibold text-[#6C63FF]"
          >
            Get Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}