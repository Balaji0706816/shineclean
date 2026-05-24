import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import PricingQuote from "./components/PricingQuote";
import BlogAdvice from "./components/BlogAdvice";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <WhyChooseUs />
      <PricingQuote />
      <BlogAdvice />
      <CTA />
      <Footer />
    </main>
  );
}