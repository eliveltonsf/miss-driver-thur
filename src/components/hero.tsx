interface HeroProps {
  message: string;
}

export default function Hero({ message }: HeroProps) {
  return (
    <section className="bg-white h-svh w-svw flex justify-center items-center">
      <div className="mx-auto">
        <div className="max-w-6xl px-4 sm:px-6 mx-auto text-center pb-12 md:pb-16">
          <p
            className="text-xl m-3 text-gray-400 md:text-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}
