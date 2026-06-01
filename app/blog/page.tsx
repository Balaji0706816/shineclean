import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const blogs = [
    {
      slug: "boston-house-cleaning-services",
      category: "Boston House Cleaning",
      title: "Boston House Cleaning Services",
      image: "/images/boston-house-cleaning-services.png",
    },
    {
      slug: "deep-cleaning-and-organizing",
      category: "Organizing",
      title: "The Deep Cleaning and Organizing",
      image: "/images/deep-cleaning-and-organizing.png",
    },
    {
      slug: "eco-friendly-products-for-cleaning",
      category: "Cleaning",
      title: "Eco-Friendly Products For Cleaning",
      image: "/images/eco-friendly-products-for-cleaning.png",
    },
    {
      slug: "house-cleaning-before-moving-in",
      category: "Tips",
      title: "House Cleaning Before Moving In",
      image: "/images/house-cleaning-before-moving-in.png",
    },
    {
      slug: "airbnb-cleaning-checklist-hosting-duties",
      category: "Airbnb Cleaning",
      title: "Airbnb Cleaning Checklist: Simplify Your Hosting Duties",
      image: "/images/airbnb-cleaning-checklist-hosting-duties.png",
    },
    {
      slug: "comprehensive-apartment-cleaning-guide",
      category: "Apartment Cleaning",
      title: "Comprehensive Apartment Cleaning Guide",
      image: "/images/comprehensive-apartment-cleaning-guide.png",
    },
    {
      slug: "how-to-clean-a-couch-that-smells",
      category: "Cleaning Tips",
      title: "How To Clean A Couch That Smells",
      image: "/images/how-to-clean-a-couch-that-smells.png",
    },
    {
      slug: "how-long-to-deep-clean-apartment",
      category: "Deep Cleaning",
      title: "How Long Does It Take To Deep Clean An Apartment?",
      image: "/images/how-long-to-deep-clean-apartment.png",
    },
    {
      slug: "ultimate-guide-eco-friendly-carpet-cleaning",
      category: "Eco Friendly",
      title: "The Ultimate Guide To Eco-Friendly Carpet Cleaning",
      image: "/images/ultimate-guide-eco-friendly-carpet-cleaning.png",
    },
    {
      slug: "benefits-of-clean-and-healthy-home",
      category: "Healthy Home",
      title: "What Are The Benefits Of A Clean And Healthy Home?",
      image: "/images/benefits-of-clean-and-healthy-home.png",
    },
    {
      slug: "importance-of-regular-mattress-cleaning",
      category: "Mattress Cleaning",
      title: "The Importance Of Regular Mattress Cleaning",
      image: "/images/importance-of-regular-mattress-cleaning.png",
    },
    {
      slug: "from-chaos-to-calm-organizing-guide",
      category: "Organizing",
      title: "From Chaos To Calm: Deep Cleaning & Organizing",
      image: "/images/from-chaos-to-calm-organizing-guide.png",
    },
    {
      slug: "deep-cleaning-checklist-pristine-home",
      category: "Checklist",
      title: "Deep Cleaning Checklist For A Pristine Home",
      image: "/images/deep-cleaning-checklist-pristine-home.png",
    },
    {
      slug: "beyond-the-surface-organization",
      category: "Organization",
      title: "Beyond The Surface: Organization Guide",
      image: "/images/beyond-the-surface-cleaning-and-organization.png",
    },
  ];

export default function BlogPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
              Blog
            </p>

            <h1 className="mt-5 text-6xl font-bold leading-tight text-[#111]">
              Cleaning Tips From Pros
            </h1>
          </div>

          <div className="mt-20 grid items-center gap-8 lg:grid-cols-2">
            <div className="rounded-[36px] bg-[#F1F7EE] p-10 lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#29BDB4]">
                Featured Guide
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-tight text-[#111]">
                Deep Cleaning Services for Boston Apartments
              </h2>

              <Link
                href="/blog/deep-cleaning-services-for-boston-apartments"
                className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-[#111] transition hover:text-[#6C63FF]"
              >
                Read more →
              </Link>
            </div>

            <Image
              src="/images/house cleaning.png"
              alt="Deep cleaning Boston apartment"
              width={900}
              height={650}
              priority
              className="h-[430px] w-full rounded-[36px] object-cover"
            />
          </div>

          <div className="mt-24 grid gap-x-10 gap-y-16 md:grid-cols-3">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <article className="group">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={700}
                    height={460}
                    className="h-72 w-full rounded-[30px] object-cover"
                  />

                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-[#29BDB4]">
                    {blog.category}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111] transition group-hover:text-[#6C63FF]">
                    {blog.title}
                  </h2>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}