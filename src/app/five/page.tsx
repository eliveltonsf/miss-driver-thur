import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner
        message={`“O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nEle confiam” — Naum 1:7 📖`}
      >
        {" "}
        <Image
          src="/images/resgate.png"
          alt="Link do instagram do  ministerio Resgate"
          width={200}
          height={80}
        />
      </Banner>
      <Hero message="Desfrute da bondade, refúgio e proteção, confiando no Senhor! NEle você pode confiar 100%." />
      <Banner
        bgPosition="bg-bottom"
        message="Fique bem! Há coisas que só Deus sabe e pode fazer! Acredite: Ele fará sempre o melhor para você! 🙏"
      />
      <Footer />
    </div>
  );
}
