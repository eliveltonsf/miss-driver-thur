import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner
        message={`"Pois, se o nosso coração nos condena, Deus é maior do que o nosso coração e conhece todas as coisas" — 1 João 3:20 📖`}
      >
        {" "}
        <Image
          src="/images/resgate.png"
          alt="Link do instagram do  ministerio Resgate"
          width={200}
          height={80}
        />
      </Banner>
      <Hero message="Mesmo quando você sente que não é digno ou que o peso das suas falhas é grande demais, lembre-se de que Deus conhece o mais profundo do seu coração e, ainda assim, ama você incondicionalmente. O amor d’Ele é maior do que qualquer culpa ou condenação, trazendo paz e renovação à sua alma." />
      <Banner
        bgPosition="bg-bottom"
        message="Deposite todas as suas expectativas no altar, e Deus vai te abençoar 🙏"
      />
      <Footer />
    </div>
  );
}
