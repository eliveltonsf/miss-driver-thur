/* eslint-disable react/no-unescaped-entities */

interface BannerProps {
  imageName: string;
  message: string;
  bgPosition?: "bg-center" | "bg-bottom" | "bg-top";
}

export default function Banner({
  imageName,
  message,
  bgPosition,
}: BannerProps) {
  return (
    <section className="overflow-x-hidden">
      <div
        className={`h-svh w-svw bg-fixed bg-[url('/images/${imageName}')] bg-cover bg-no-repeat ${
          bgPosition ? bgPosition : "bg-center"
        } flex justify-center items-center`}
      >
        <h1 className="text-2xl m-5 text-white  text-center md:w-[60%] md:text-4xl">
          {message}
        </h1>
      </div>
    </section>
  );
}
