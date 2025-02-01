import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Movie from "@/components/movie";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner
        message={`"Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele." — Salmos 118:24 📖`}
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
        message="Neste dia, lembre-se de que cada novo dia é uma oportunidade dada
            por Deus para renovarmos nossa fé, esperança e amor. Que você possa
            encontrar alegria nas pequenas coisas, gratidão em seu coração e paz
            em sua alma. Aproveite este dia para se conectar com Deus, refletir
            sobre Suas bênçãos e compartilhar amor e bondade com aqueles ao seu
            redor. Que a luz divina ilumine seu caminho e que você sinta a
            presença do Senhor em cada momento!"
      />
      <Banner
        bgPosition="bg-bottom"
        message="Aproveite cada momento com Senhor Jesus! Deus te abençoe! 🙏"
      />
      <Movie>
        <video width="600" height="auto" controls>
          <source src="videos/one.mp4" type="video/mp4" />
        </video>
      </Movie>
      <Footer />
    </div>
  );
}
