import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import {
  CalendarDays,
  ClipboardCheck,
  SprayCan,
  Sparkles,
  CheckCircle,
  PhoneCall,
} from "lucide-react";

const steps = [
  {
    title: "Easy Booking and Quick Quote",
    icon: CalendarDays,
    text: "Getting started is simple. Contact us online or by phone and tell us about your home, apartment, or office. We ask about property size, cleaning needs, preferred schedule, and special requests so we can recommend the right service.",
  },
  {
    title: "Personalized Cleaning Plan",
    icon: ClipboardCheck,
    text: "Every property is different, so we do not use one basic plan for everyone. Our team reviews your request and prepares a cleaning approach based on your priorities, layout, and service type.",
  },
  {
    title: "Arrival and Preparation",
    icon: SprayCan,
    text: "On the scheduled day, our cleaners arrive on time with the right tools and supplies. We review the cleaning plan before starting and make sure each area receives careful attention.",
  },
  {
    title: "Detailed Cleaning Step by Step",
    icon: Sparkles,
    text: "We follow a structured cleaning system for kitchens, bathrooms, bedrooms, living areas, floors, surfaces, fixtures, and high-touch points. Our team focuses on both visible cleanliness and small details.",
  },
  {
    title: "Quality Check and Feedback",
    icon: CheckCircle,
    text: "Before finishing, we complete a final walkthrough to make sure the service meets our standards. We double-check important areas and confirm your space looks fresh, clean, and ready.",
  },
  {
    title: "Ongoing Customer Support",
    icon: PhoneCall,
    text: "After your cleaning, our team stays available for questions, feedback, and future bookings. We use customer input to improve the service and make every visit better than the last.",
  },
];

export default function CleaningProcessPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6C63FF]">
            Cleaning Process
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#111] md:text-6xl">
            How Our Cleaning Process Works
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#333]">
            At ShineClean, we believe a great cleaning service should feel easy,
            reliable, and stress-free. From the first booking to the final
            walkthrough, our process is designed to keep everything clear,
            professional, and focused on your home.
          </p>
        </div>
      </section>

      <section className="bg-[#F3F8F1] px-6 py-28">
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#D8E5D1] md:block" />

          <div className="mx-auto mb-20 flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-sm">
            🌿
          </div>

          <div className="space-y-28">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const left = index % 2 === 0;

              return (
                <div key={step.title} className="relative grid md:grid-cols-2">
                  <div
                    className={`max-w-[460px] rounded-[34px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                      left
                        ? "md:mr-20 md:justify-self-start"
                        : "md:col-start-2 md:ml-20 md:justify-self-end"
                    }`}
                  >
                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E4F6D6] text-[#6C63FF]">
                      <Icon size={28} />
                    </div>

                    <h2 className="text-3xl font-semibold leading-tight text-[#111]">
                      {step.title}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[#333]">
                      {step.text}
                    </p>
                  </div>

                  <div className="absolute left-1/2 top-20 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#F3F8F1] bg-[#2EC4B6] md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div className="overflow-hidden rounded-[34px]">
            <Image
              src="/images/deep cleaning.png"
              alt="Professional cleaning process"
              width={800}
              height={600}
              className="h-[430px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6C63FF]">
              Why It Works
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-tight text-[#111]">
              A simple process built for better results
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#333]">
              Our process works because it combines clear communication,
              consistent cleaning standards, and careful attention to detail.
              Whether you need a one-time deep clean or recurring service, we
              make sure your home feels fresh, comfortable, and properly cared
              for.
            </p>

            <ul className="mt-8 space-y-3 text-lg leading-8 text-[#333]">
              <li>✓ Consistent cleaning standards every visit</li>
              <li>✓ Professional and fully equipped cleaning team</li>
              <li>✓ Flexible scheduling options</li>
              <li>✓ Personalized cleaning plans</li>
              <li>✓ Clear communication before and after service</li>
              <li>✓ Satisfaction-focused quality checks</li>
            </ul>

            <a
              href="/booking"
              className="mt-8 inline-flex rounded-full bg-[#6C63FF] px-9 py-4 font-semibold text-white transition hover:bg-[#574ee4]"
            >
              Book Cleaning
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}