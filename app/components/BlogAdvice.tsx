import Image from "next/image";

const posts = [
  {
    title: "A Deep Clean Checklist for Busy Homes",
    category: "Home Cleaning",
    image: "/images/Deep.png",
  },
  {
    title: "How to Keep Your Home Fresh Every Week",
    category: "Cleaning Tips",
    image: "/images/Spot.png",
  },
  {
    title: "Simple Habits for a Cleaner Living Space",
    category: "Healthy Home",
    image: "/images/simple.png",
  },
];

export default function BlogAdvice() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#E9E7FF] px-5 py-3 text-sm font-semibold text-[#6C63FF]">
            Blog
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#111]">
            Cleaning Tips From Our Team
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Helpful cleaning guides, simple routines, and expert advice for a
            healthier home.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[40px] bg-[#F7F7FC] p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6C63FF]">
              Featured Article
            </p>

            <h3 className="mt-6 max-w-xl text-5xl font-bold leading-tight text-[#111]">
              A cleaner home starts with the right weekly routine
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B7280]">
              Learn how small cleaning habits can keep your home fresh,
              organized, and comfortable between professional visits.
            </p>

            <a
              href="/booking"
              className="mt-8 inline-block rounded-full bg-[#6C63FF] px-8 py-4 font-semibold text-white"
            >
              Book a Cleaning
            </a>
          </div>

          <div className="overflow-hidden rounded-[40px]">
            <Image
              src="/images/Hero.png"
              alt="Clean home"
              width={900}
              height={650}
              className="h-full min-h-[440px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[32px] bg-[#F7F7FC] shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={700}
                height={460}
                className="h-60 w-full object-cover"
              />

              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6C63FF]">
                  {post.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-snug text-[#111]">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-[#6B7280]">
                  Practical advice to keep your home clean, fresh, and easier to
                  maintain.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}