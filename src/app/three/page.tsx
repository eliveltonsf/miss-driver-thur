import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Movie from "@/components/movie";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner
        message={`"Assim que, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo." — 2 Coríntios 5:17 📖`}
      >
        <Image
          src="/images/resgate.png"
          alt="Link do instagram do ministerio Resgate"
          width={200}
          height={80}
        />
      </Banner>
      <Hero message="Deus conhece profundamente o nosso coração e escuta cada oração diária. Você foi escolhido! Não importa o tamanho da tempestade que está enfrentando, Ele deseja trazer um renovo à sua vida. Entregue seus problemas e sua vida diante do altar, arrependa-se de tudo o que te afasta da paz de Deus." />
      <Banner
        bgPosition="bg-bottom"
        message="Confie no Senhor, pois Ele aliviará suas cargas e te transformará em uma nova criatura. 🙏"
      />
      <Movie>
        <video width="600" height="auto" controls>
          <source src="videos/three.mp4" type="video/mp4" />
        </video>
      </Movie>
      <Footer />
    </div>
  );
}
