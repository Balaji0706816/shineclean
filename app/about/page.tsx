import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { CheckCircle, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#F7F7FC]">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-[#E9E7FF] px-5 py-3 text-sm font-semibold text-[#6C63FF]">
              About ShineClean
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-tight text-[#111]">
              Cleaning made simple, reliable, and professional.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              ShineClean provides dependable residential and commercial cleaning
              services for busy families, renters, landlords, and small
              businesses. Our goal is to make every space feel fresh, healthy,
              and comfortable.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Trained and reliable cleaning professionals",
                "Flexible service options for homes and offices",
                "Detail-focused cleaning with modern equipment",
                "Friendly support and easy booking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-[#6C63FF]" size={22} />
                  <p className="text-[#111]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[50px] bg-[#E9E7FF] blur-3xl" />
            <Image
              src="/images/hero.png"
              alt="About ShineClean"
              width={800}
              height={650}
              className="relative h-[560px] w-full rounded-[40px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-bold text-[#111]">
              Why people choose us
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6B7280]">
              We focus on trust, consistency, and quality service every time.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Trusted Team",
                desc: "Reliable cleaners who respect your space.",
              },
              {
                icon: Sparkles,
                title: "Detailed Work",
                desc: "Careful cleaning for every room and surface.",
              },
              {
                icon: Users,
                title: "Customer First",
                desc: "Friendly support and flexible scheduling.",
              },
              {
                icon: CheckCircle,
                title: "Quality Service",
                desc: "Consistent results for homes and businesses.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[30px] bg-[#F7F7FC] p-8 shadow-sm"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E7FF] text-[#6C63FF]">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#111]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#6B7280]">
                    {item.desc}
                  </p>
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