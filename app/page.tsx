"use client";
import AdaptativeBanner from "./components/AdaptiveBanner";
import FixedBannerResponsivo from "./components/FixedBannerResponsivo";
import SearchForm from "./components/SearchForm";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Scrollbar, Navigation, Autoplay } from "swiper/modules";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import { imoveis, swiperImages } from "./constants/constants";
import Team from "./components/Team";
import News from "./components/News";

export default function Home() {
  return (
    <>
      <div className="pt-[100px]">
        <FixedBannerResponsivo
          url="/banner.jpg"
          height={750}
          backdrop={{ active: true, percent: 5, hexcolor: "#000000" }}
        >
          {" "}
          <div className="hidden lg:flex relative w-fit top-16 left-16">
            <SearchForm />
          </div>
        </FixedBannerResponsivo>
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
          <div className="relative top-[-30px] lg:pl-[120px] lg:top-0">
            <img
              src="/image1.webp"
              className="w-full max-w-[400px] lg:w-[400px] rounded-xl"
            />
          </div>
        }
      ></AdaptativeBanner>
      <section className="bg-white py-12 w-[90%] max-w-screen-xl mx-auto flex flex-col items-center ">
        <h2 className="mb-12 text-xl md:text-2xl">Alguns de nossos imóveis</h2>
        <Carousel className="w-full max-w-screen-2xl mx-auto cursor-grab">
          <CarouselContent>
            {imoveis.map((imovel: any) => (
              <CarouselItem
                key={imovel.img}
                className="md:basis-1/2 xl:basis-1/3"
              >
                <div className=" w-[280px] h-[400px] mb-3 bg-gray-100 shadow-sm shadow-gray-500 mx-auto rounded-xl flex flex-col">
                  <div className="h-[180px] w-full">
                    <img
                      src={imovel.img}
                      className="rounded-t-xl w-full h-[180px]"
                    />
                  </div>
                  <div className="flex flex-col h-full py-4 px-3 justify-between">
                    <div className="flex items-center justify-between">
                      <h3 className="text-md font-semibold">{imovel.lugar}</h3>
                      <span className="px-2 bg-blue-500 text-white text-xs w-fit rounded-full">
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
      <section className="bg-white py-12 w-[90%] max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="border border-gray-300  min-w-[280px] w-full flex flex-col xl:h-[500px]  xl:flex-row">
          <div className="bg-gray-200 h-[350px] flex items-center gap-x-6 xl:h-[500px]">
            <div className="h-full flex flex-col items-center sm:w-[50%] justify-center sm:pl-6 gap-y-12 sm:items-start">
              <h2 className="text-lg text-center font-semibold px-2 sm:text-start sm:px-0">
                Alugar bem, sem complicação e fiador
              </h2>
              <p className="text-center sm:text-justify">
                Agende visitas online, negocie sem intermediários e assine o
                contrato digitalmente. Sem fiador. Sem depósito caução. Sem
                filas.
              </p>
              <button className="bg-gray-900/60 p-2 text-white rounded-lg">
                Ver apartamentos para alugar
              </button>
            </div>
            <div className="h-[350px] hidden sm:flex items-center justify-center w-[50%]  xl:h-[500px]">
              <img src="/house.png" className="max-w-[280px]" />
            </div>
          </div>
          <div className="h-[500px] xl:w-[40%]">
            <Swiper
              scrollbar={{
                hide: true,
              }}
              navigation={true}
              loop={true}
              modules={[Scrollbar, Navigation, Autoplay]}
              className="mySwiper w-full h-full"
            >
              {swiperImages.map((image: any) => (
                <SwiperSlide key={image}>
                  <img src={image} className="w-full h-full object-cover"></img>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="bg-slate-900 w-full py-16 flex flex-col items-center">
        <div className="w-full max-w-screen-md flex flex-col items-center mb-12">
          <h2 className="text-xl md:text-2xl text-white mb-6">Nossa missão</h2>
          <p className="text-lg text-white text-center px-2">
            Nossa missão é atender nossos clientes com excelência, transparência
            e segurança para atingir e superar expectativas, sempre buscando o
            melhor.
          </p>
        </div>
        <div className="w-[90%] grid justify-items-center gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 max-w-screen-xl">
          <div className="w-[280px] h-[280px] flex flex-col items-center gap-y-4 ">
            <div>
              <img src="/missao/1.png" />
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <h2 className="text-lg font-semibold text-white">
                Não achou seu imovél?
              </h2>
              <p className="text-center text-white">
                Informe as características do imóvel que deseja que iremos te
                retornar.
              </p>
            </div>
          </div>
          <div className="w-[280px] h-[280px] flex flex-col items-center gap-y-4 ">
            <div>
              <img src="/missao/2.png" />
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <h2 className="text-lg font-semibold text-white">
                Vender/Alugar Imóvel?
              </h2>
              <p className="text-center text-white text-md">
                Oferecemos o melhor suporte para anunciar o seu imóvel em nosso
                site.
              </p>
            </div>
          </div>
          <div className="w-[280px] h-[280px] flex flex-col items-center gap-y-4 ">
            <div>
              <img src="/missao/3.png" />
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <h2 className="text-lg font-semibold text-white">
                Horário de Atendimento
              </h2>
              <p className="text-center text-white text-md">
                Estamos à sua disposição de segunda à sexta, das 8 às 18hs.
              </p>
            </div>
          </div>
          <div className="w-[280px] h-[280px] flex flex-col items-center gap-y-4 ">
            <div className="w-[115px]  pt-6 pb-[13px]">
              <img src="/missao/4.png" />
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <h2 className="text-lg font-semibold text-white">
                Teleatendimento
              </h2>
              <p className="text-center text-white text-md">
                Na Era, você será atendido em qualquer lugar que esteja.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <FixedBannerResponsivo
        url="/banner2.jpg"
        height={700}
        backdrop={{ active: true, percent: 65, hexcolor: "#000000" }}
      >
        <News />
      </FixedBannerResponsivo>
    </>
  );
}
