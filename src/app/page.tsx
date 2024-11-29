import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner
        message={`"Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele." — Salmos 118:24 📖`}
      />
      <Hero />
      <Banner
        bgPosition="bg-bottom"
        message="Aproveite cada momento com Senhor Jesus ! Deus te abençoe! 🙏"
      />
      <Footer />
    </div>
  );
}
