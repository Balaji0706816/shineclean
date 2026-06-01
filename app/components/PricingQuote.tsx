export default function PricingQuote() {
    return (
      <section className="bg-[#F7F7FC] py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-white px-10 py-20 text-center shadow-xl">
          <span className="rounded-full bg-[#E9E7FF] px-5 py-2 text-sm font-semibold text-[#6C63FF]">
            Premium Cleaning Services
          </span>
  
          <h2 className="mt-6 text-5xl font-bold text-[#111]">
            Ready for a spotless home?
          </h2>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Schedule your residential or office cleaning service in minutes with
            our trusted professional team.
          </p>
  
          <a
            href="/booking"
            className="mt-10 inline-flex rounded-full bg-[#6C63FF] px-10 py-5 text-lg font-semibold text-white transition hover:scale-105"
          >
            Book Cleaning Service
          </a>
        </div>
      </section>
    );
  }