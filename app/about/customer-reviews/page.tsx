import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ReviewsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6C63FF]">
            Customer Reviews
          </p>

          <h1 className="mt-6 text-6xl font-semibold text-[#111]">
            Reviews Coming Soon
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#555]">
            We are currently building our customer review section.
            As we continue serving homeowners and businesses across
            Greater Boston, verified customer feedback will be displayed here.
          </p>

          <div className="mt-12 rounded-[32px] bg-[#F6F8F3] p-10">
            <h2 className="text-3xl font-semibold text-[#111]">
              Be One of Our First Customers
            </h2>

            <p className="mt-4 text-lg text-[#666]">
              Book a cleaning service today and help us build our reputation
              through honest customer feedback.
            </p>

            <a
              href="/booking"
              className="mt-8 inline-block rounded-full bg-[#6C63FF] px-8 py-4 font-semibold text-white"
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