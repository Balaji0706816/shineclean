import Image from "next/image";

const blogs = [
  {
    title: "Simple Cleaning Tips for a Fresh Home",
    image: "/images/Simple.png",
  },
  {
    title: "How to Keep Your Home Spotless Weekly",
    image: "/images/spot.png",
  },
  {
    title: "Deep Cleaning Checklist for Busy Families",
    image: "/images/deep.png",
  },
];

export default function BlogAdvice() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="rounded-full bg-[#E9E7FF] px-4 py-2 text-sm font-semibold text-[#6C63FF]">
              Cleaning Advice
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#111]">
              Cleaning Tips & Advice
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-[#6B7280]">
            Helpful cleaning ideas to keep your space fresh, healthy, and
            comfortable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="overflow-hidden rounded-[28px] bg-[#F7F7FC] shadow-sm"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#111]">
                  {blog.title}
                </h3>

                <p className="mt-4 leading-7 text-[#6B7280]">
                  Learn simple techniques for maintaining a clean and organized
                  home.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}