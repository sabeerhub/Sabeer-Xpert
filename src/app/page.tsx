import Hero from "@/components/sections/Hero";
import Storytelling from "@/components/sections/Storytelling";
import Ecosystem from "@/components/sections/Ecosystem";
import Products from "@/components/sections/Products";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Storytelling />
      <Ecosystem />
      <Products />
      <Vision />
      <Footer />
    </div>
  );
}
