export default function WhyChooseUs() {
    return (
      <section className="py-24 bg-[#6C63FF] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Why customers trust our cleaning company
            </h2>
  
            <p className="mt-8 text-lg text-gray-200 leading-8">
              We provide reliable and affordable cleaning services
              with attention to every detail.
            </p>
          </div>
  
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white text-black rounded-3xl p-8">
              <h3 className="text-5xl font-bold">750+</h3>
              <p className="mt-3 text-gray-500">Projects Finished</p>
            </div>
  
            <div className="bg-white text-black rounded-3xl p-8">
              <h3 className="text-5xl font-bold">15+</h3>
              <p className="mt-3 text-gray-500">Years Experience</p>
            </div>
  
            <div className="bg-white text-black rounded-3xl p-8">
              <h3 className="text-5xl font-bold">700+</h3>
              <p className="mt-3 text-gray-500">Happy Clients</p>
            </div>
  
            <div className="bg-white text-black rounded-3xl p-8">
              <h3 className="text-5xl font-bold">120+</h3>
              <p className="mt-3 text-gray-500">Professional Staff</p>
            </div>
          </div>
        </div>
      </section>
    );
  }