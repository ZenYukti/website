import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Purpose from "@/components/Purpose";
import DomainsPreview from "@/components/DomainsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Purpose />
      <DomainsPreview />
      <Footer />
    </div>
  );
};

export default Index;
