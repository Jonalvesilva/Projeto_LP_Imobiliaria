import AdaptativeBanner from "./components/AdaptiveBanner";
import FixedBannerResponsivo from "./components/FixedBannerResponsivo";
import SearchForm from "./components/SearchForm";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import { imoveis } from "./constants/constants";

export default function Home() {
  return (
    <>
      <div className="pt-[100px]">
        <FixedBannerResponsivo
          url="/banner.jpg"
          height={750}
          backdrop={{ active: true, percent: 5, hexcolor: "#000000" }}
          children={
            <div className="hidden lg:flex relative w-fit top-16 left-16">
              <SearchForm />
            </div>
          }
        />
      </div>
      <section className="w-full py-8 lg:hidden flex justify-center">
        <SearchForm />
      </section>
      <AdaptativeBanner
        color="#0f172a"
        children1={
          <div
            className="flex flex-col items-center justify-center gap-y-12 lg:justify-start lg:items-start lg:relative  
          lg:gap-y-16 xl:gap-y-16 2xl:gap-y-[83px]"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white">
              Porque escolher a Era?
            </h2>
            <p className="text-md md:text-xl lg:text-2xl text-white text-center lg:text-justify">
              A Era garante pagamento do aluguel todo dia 12, mesmo se o
              inquilino atrasar. Proprietários ainda contam com proteção contra
              danos deixados no imóvel ao final do contrato. Clique abaixo para
              saber mais.
            </p>
            <button className="p-3 bg-white text-black rounded-xl w-full">
              Quero Saber Mais
            </button>
          </div>
        }
        children2={
          <div className="lg:pl-[120px]">
            <img
              src="/image1.webp"
              className="w-full max-w-[400px] lg:w-[400px] rounded-xl"
            />
          </div>
        }
      ></AdaptativeBanner>
      <section className="bg-white py-12 w-[90%] max-w-screen-xl mx-auto flex flex-col items-center ">
        <h2 className="mb-12 text-xl">Alguns de nossos imóveis</h2>
        <Carousel className="w-full max-w-screen-2xl mx-auto cursor-grab">
          <CarouselContent>
            {imoveis.map((imovel: any) => (
              <CarouselItem
                key={imovel.img}
                className="md:basis-1/2 xl:basis-1/3"
              >
                <div className=" w-[300px] h-[400px] mb-3 bg-gray-100 shadow-sm shadow-gray-500 mx-auto rounded-xl flex flex-col">
                  <div className="h-[180px] w-full">
                    <img
                      src={imovel.img}
                      className="rounded-t-xl w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col h-full py-4 px-3 justify-between">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{imovel.lugar}</h3>
                      <span className="px-2 bg-blue-500 text-white text-sm w-fit rounded-full">
                        R$ {imovel.preco}
                      </span>
                    </div>
                    <p className="text-sm text-justify">{imovel.descricao}</p>

                    <button className="p-1 bg-slate-600 rounded-xl text-white">
                      Saber Mais
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
}
