import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Movie from "@/components/movie";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner
        message={`“Pois o Filho do Homem veio buscar e salvar o que estava perdido.” — Lucas 19:10 📖`}
      >
        {" "}
        <Image
          src="/images/resgate.png"
          alt="Link do instagram do  ministerio Resgate"
          width={200}
          height={80}
        />
      </Banner>
      <Hero message="Jesus te ama profundamente e veio ao mundo para buscar e salvar aqueles que estão perdidos. Ele conhece suas dores, suas lutas e te chama para um novo começo. Não importa o que tenha acontecido, Ele nunca desistirá de você. Aceite Seu amor, confie nEle e permita que Ele transforme sua vida." />
      <Banner
        bgPosition="bg-bottom"
        message="Aceite esse amor que nunca falha e permita que Jesus te leve para um lugar de paz e propósito. Ele veio por você. E quando você se entregar a Ele, descobrirá que não há escuridão que Sua luz não possa dissipar. ❤️"
      />{" "}
      <Movie>
        <video width="600" height="auto" controls>
          <source src="videos/seven.mp4" type="video/mp4" />
        </video>
      </Movie>
      <Footer />
    </div>
  );
}
