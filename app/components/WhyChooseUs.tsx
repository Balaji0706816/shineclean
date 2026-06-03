export default function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden py-24 text-white"
      style={{
        backgroundImage: "url('/images/bg-why.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Deep overlay so white text pops */}
      <div className="absolute inset-0" style={{ background: "rgba(74,63,160,0.72)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            {/* Modern light/bold split title */}
            <h2 className="text-5xl font-bold leading-tight lg:text-6xl">
              <span className="block font-light opacity-80">Why customers</span>
              <span className="block">trust{" "}
                <span className="text-[#a89fff]">our cleaning</span>
              </span>
              <span className="block">company</span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-white/75">
              We provide reliable and affordable cleaning services
              with attention to every detail.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { num: "750+", label: "Projects Finished" },
              { num: "15+",  label: "Years Experience" },
              { num: "700+", label: "Happy Clients" },
              { num: "120+", label: "Professional Staff" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-white/15"
              >
                <h3 className="text-5xl font-bold text-white">{stat.num}</h3>
                <p className="mt-3 text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}