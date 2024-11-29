// import VideoThumb from "../../public/images/thumb-video.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-black h-svh w-svw">
      <div className=" mx-auto mt-28">
        <div className="max-w-6xl px-4 sm:px-6 mx-auto flex flex-col justify-center items-center pb-12 md:pb-16">
          <h2
            className="h2 font-bold mb-4 text-white flex justify-center items-center gap-3"
            data-aos="fade-up"
          >
            Fale conosco{" "}
          </h2>
          <div className="flex flex-col md:flex-row">
            <span className="text-xl text-gray-400 flex justify-center">
              Você tem 7 minutos para falar?
            </span>
            <span className="text-xl text-orange-500 mb-8 flex justify-center ml-3">
              eu tenho 7 minutos para te ouvir!
            </span>
          </div>

          <p
            className="text-xl text-gray-400 mb-8 flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-xl text-white mb-8 flex justify-center ml-3 font-semibold">
              Nossas redes sociais:
            </span>
            <a
              className=" flex justify-center items-center gap-2 hover:text-orange-500"
              href="https://www.instagram.com/resgate.live?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <Image
                src="/images/resgate.png"
                alt="Link do instagram do ministério Resgate"
                width={200}
                height={80}
              />
            </a>
          </p>
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              className=" flex justify-center items-center gap-2 hover:text-orange-500"
              href="https://www.instagram.com/livecnmaraponga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <Image
                src="/images/live.png"
                alt="Link do instagram do  ministerio Resgate"
                width={200}
                height={80}
              />
            </a>
          </p>
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              className=" flex justify-center items-center gap-2 hover:text-orange-500"
              href="https://www.instagram.com/cnmaraponga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <Image
                src="/images/cn.png"
                alt="Link do instagram do  ministerio Resgate"
                width={200}
                height={80}
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
