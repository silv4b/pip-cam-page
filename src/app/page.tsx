import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import Features from "@/components/Features";
import Shortcuts from "@/components/Shortcuts";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <FeatureShowcase /> */}
      <Features />
      <Shortcuts />
      <Download />
      <Footer />
    </>
  );
}
