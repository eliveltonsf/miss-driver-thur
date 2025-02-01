import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Movie from "@/components/movie";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner
        message={`“O choro pode durar uma noite, mas a alegria vem pela manhã” — Salmo 30:5 📖`}
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
        message="Você está triste? Como podemos converter a tristeza em esperança? O que pode nos dar esperança?
Não fique olhando para trás, não fique inerte diante dos problemas, não reclame dos obstáculos. Não se deixe paralisar diante das circunstâncias da vida. Não fique engessado pelo medo. Deus se faz presente em cada momento da nossa vida, Ele não nos abandonou e deseja nos dar um dar um futuro bom.
Traga à sua memória aquilo que te traz esperança! Louve a Deus todas as manhãs porque a fidelidade Dele se renova na sua vida."
      />
      <Banner
        bgPosition="bg-bottom"
        message="Deus enxugará dos seus olhos toda lágrima e a sua tristeza se transformará em alegria. 🙏"
      />
      <Movie>
        <video width="600" height="auto" controls>
          <source src="videos/four.mp4" type="video/mp4" />
        </video>
      </Movie>
      <Footer />
    </div>
  );
}
