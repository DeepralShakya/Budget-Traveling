import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import ContentSection from "@/components/ContentSection";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import ConclusionSection from "@/components/ConclusionSection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { FaCalendarAlt } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import ContentMore from "@/components/ContentMore";

export default function Home() {
  return (
    <div className="bg-[url('/images/bg1.jpg')] bg-cover h-screen bg-center">
      <Navbar />

      
        <Header />
        <div className="flex flex-col container mx-auto px-4 md:px-8 md:flex gap-8">
          
            <Introduction />
            <ContentMore />

            <div className="grid gap-8">
              <ContentSection
                heading="Plan Ahead"
                icon={<FaCalendarAlt />}
                description="Tips for flight booking tools and accommodation."
                link="https://www.skyscanner.com"
                buttonText="Explore Skyscanner for Travel Planning"
              />
              <ContentSection
                heading="Travel Smart"
                icon={<MdCardTravel />}
                description="Smart packing strategies to save space and time."
                link="https://www.thebrokebackpacker.com/travel-resources/"
                buttonText="Check Out Travel Accessories"
              />
            </div>

            <QuoteSection />

            <CTASection />

            <ConclusionSection />
          </div>
      <Footer />
    </div>
  );
}
