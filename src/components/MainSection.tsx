import Image from "next/image";
import React from "react";
import dimy from "../public/dimy.png";

export default function MainSection() {
  return (
    <section className="flex px-4 sm:px-0">
      <div className="w-full">
        <div className="flex space-x-8 text-left">
          <Image
            alt="dimy"
            src={dimy}
            className="aspect-square h-28 w-28 rounded-full border-2 border-red-900"
          />

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Conheça o Dimitry
            </h1>
            <p className="text-neutral-500">Desenvolvedor Front-End</p>
          </div>
        </div>

        <p className="mx-auto mt-10 w-auto max-w-3xl text-left text-lg font-light">
          Estou aprendendo a desenvolver os melhores produtos utilizando as
          ferramentas que tragam as melhores experiencias para o usuário, e
          consequentemente me tornando o melhor programador e crescendo na
          carreira tech
        </p>

        <div className="mt-10 flex items-center justify-start gap-3 font-semibold">
          <a href="" className="red-underline">
            <span>Github</span>
          </a>
          <a href="" className="red-underline">
            <span>LinkedIn</span>
          </a>
          <a href="" className="red-underline">
            <span>BluSky</span>
          </a>
        </div>
      </div>
    </section>
  );
}
