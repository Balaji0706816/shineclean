import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-[44px] bg-[#F3F8F1] px-8 py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
              About Us
            </p>

            <h1 className="mt-5 text-5xl font-bold text-[#111] md:text-6xl">
              Who We Are
            </h1>
          </div>

          <div className="mt-14 overflow-hidden rounded-[34px]">
            <Image
              src="/images/house cleaning.png"
              alt="Clean home interior"
              width={1400}
              height={620}
              priority
              className="h-[360px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-[#111] md:text-5xl">
            About ShineClean House Cleaning
          </h2>

          <div className="mx-auto mt-8 space-y-6 text-[18px] leading-9 text-[#333]">
            <p>
              ShineClean is a locally focused cleaning company serving
              homeowners, renters, property managers, and businesses across
              Greater Boston.
            </p>

            <p>
              We believe a clean space should feel simple, comfortable, and
              stress-free. Our goal is to provide dependable cleaning services
              that help customers save time and enjoy a healthier home or work
              environment.
            </p>

            <p>
              Whether it is recurring home cleaning, deep cleaning, apartment
              cleaning, office cleaning, or move-in and move-out cleaning, every
              service is handled with care, consistency, and attention to
              detail.
            </p>

            <p>
              From the first booking to the final walkthrough, we focus on clear
              communication, reliable scheduling, and professional service that
              customers can trust.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl items-center gap-12 rounded-[44px] bg-[#F3F8F1] p-8 md:grid-cols-2 md:p-14">
          <div>
            <h2 className="text-4xl font-bold text-[#111]">
              What makes us different
            </h2>

            <div className="mt-8 space-y-5">
              {[
                "Reliable and professional cleaning team",
                "Flexible scheduling for busy customers",
                "Careful attention to every room and surface",
                "Eco-friendly products available upon request",
                "Clear communication before and after service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle className="text-[#2BBFB3]" size={24} />
                  <p className="text-lg text-[#111]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Image
            src="/images/deep cleaning.png"
            alt="Professional cleaning service"
            width={700}
            height={520}
            className="h-[360px] w-full rounded-[32px] object-cover"
          />
        </div>

        <div className="mx-auto mt-20 max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
          ShineClean
          </p>

          <h2 className="mt-5 text-5xl font-bold text-[#111]">
            Our Team Story
          </h2>

          <p className="mx-auto mt-6 max-w-5xl text-lg leading-9 text-[#333]">
            Our story started with a simple purpose: helping people enjoy
            cleaner, calmer, and more comfortable spaces. What began as a local
            cleaning service has grown into a trusted team serving homes,
            apartments, offices, and rental properties across Boston and nearby
            communities.
          </p>

          <div className="mt-14 grid items-center gap-12 text-left md:grid-cols-2">
            <Image
              src="/images/maid services.png"
              alt="Cleaning team at work"
              width={720}
              height={520}
              className="h-[420px] w-full rounded-[34px] object-cover"
            />

            <div className="space-y-6 text-lg leading-9 text-[#333]">
              <p>
                Every cleaner is trained to work with care, respect, and
                consistency. We understand that letting someone into your home
                requires trust, so we treat every space with the same attention
                we would give our own.
              </p>

              <p>
                Our team focuses on making the process easy from start to
                finish. We listen to your needs, show up prepared, clean with
                detail, and make sure the space feels fresh before we leave.
              </p>

              <p>
                We do not just clean quickly. We clean carefully, communicate
                clearly, and work hard to make every customer feel comfortable
                choosing ShineClean again.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl rounded-[44px] bg-[#6C63FF] px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Experience the clean your neighbors trust
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/85">
            Book your cleaning service today and enjoy a fresher, cleaner, and
            more comfortable space.
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