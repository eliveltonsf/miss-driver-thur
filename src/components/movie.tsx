import { ReactNode } from "react";

interface MovieProps {
  children: ReactNode;
}

export default function Movie({ children }: MovieProps) {
  return (
    <section className="bg-white h-auto w-svw flex justify-center items-center pt-7">
      <div className="mx-auto">
        <div className="max-w-6xl px-4 sm:px-6 mx-auto text-center pb-12 md:pb-16">
          <p
            className="text-xl m-3 text-gray-400 md:text-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}
