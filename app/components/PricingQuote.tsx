export default function PricingQuote() {
    return (
      <section className="py-24 bg-[#F7F7FC]">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] p-12 shadow-lg">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              Get Your Free Quote
            </h2>
  
            <p className="text-gray-500 mt-5 text-lg">
              Request a professional cleaning service today.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#F7F7FC] p-5 rounded-2xl outline-none"
            />
  
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#F7F7FC] p-5 rounded-2xl outline-none"
            />
  
            <input
              type="text"
              placeholder="Service Type"
              className="bg-[#F7F7FC] p-5 rounded-2xl outline-none"
            />
  
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#F7F7FC] p-5 rounded-2xl outline-none"
            />
          </div>
  
          <button className="mt-8 w-full bg-[#6C63FF] text-white py-5 rounded-2xl text-lg font-medium">
            Request Quote
          </button>
        </div>
      </section>
    );
  }