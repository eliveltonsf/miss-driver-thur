/* eslint-disable react/no-unescaped-entities */

import { ReactNode } from "react";

interface BannerProps {
  message: string;
  bgPosition?: "bg-center" | "bg-bottom" | "bg-top";
  children?: ReactNode;
}

export default function Banner({ message, bgPosition, children }: BannerProps) {
  return (
    <section className="overflow-x-hidden">
      <div
        className={`h-svh w-svw bg-fixed bg-[url('/images/banner.png')] bg-cover bg-no-repeat ${
          bgPosition ? bgPosition : "bg-center"
        } flex flex-col justify-center items-center`}
      >
        {children}
        <h1 className="text-2xl m-5 text-white  text-center md:w-[60%] md:text-4xl">
          {message}
        </h1>
      </div>
    </section>
  );
}
