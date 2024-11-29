import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner
        message={`“Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.” — Provérbios 16:3 📖`}
      >
        {" "}
        <Image
          src="/images/resgate.png"
          alt="Link do instagram do  ministerio Resgate"
          width={200}
          height={80}
        />
      </Banner>
      <Hero
        message="DEUS, tem propósitos para a minha e para a sua vida. Ele jamais erra.
ELE É ONIPOTENTE, pode todas as coisas.
ELE É ONIPRESENTE, está em todos os lugares.
ELE É ONISCIENTE, sabe todas as coisas.
Nada é encoberto a Ele.
"
      />
      <Banner
        bgPosition="bg-bottom"
        message="Deus é Deus de milagres. Só precisamos orar, crer e confiar! 🙏"
      />
      <Footer />
    </div>
  );
}
