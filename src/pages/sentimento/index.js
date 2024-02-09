import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import { HelpCircle, Smile, Frown, Angry, ChevronLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Sentimento() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className="flex flex-row h-ful min-h-screen items-center justify-center">
      <div className="w-[20%] 2xl:w-[25%] hidden lg:flex flex-col justify-between items-center p-4 absolute h-full left-0 z-0">
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
      </div>

      <div className="z-10 w-full lg:w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
        <div className="text-black text-5xl lg:text-8xl font-normal mb-6 text-center">
          Como se sente?
        </div>
        <div className="text-center text-black text-xl lg:text-2xl font-bold my-6">
          Selecione uma opção
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <a href="/ajuda/1">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="lg:w-[22rem]">
              Estou triste
              <Frown size="28px" />
            </Button>
          </a>
          <a href="/ajuda/3">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="lg:w-[22rem]">
              Estou irritado
              <Angry size="28px" />
            </Button>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <a href="/ajuda/2">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="lg:w-[22rem]">
              Estou feliz
              <Smile size="28px" />
            </Button>
          </a>
          <a href="/ajuda/4">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="lg:w-[22rem]">
              Não sei
              <HelpCircle size="28px" />
            </Button>
          </a>
        </div>
        <div className="">
          <a href="/facecheck">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="lg:w-[22rem] justify-start  gap-4 lg:gap-24">
              <ChevronLeft size="28px" />
              Voltar
            </Button>
          </a>
        </div>
      </div>

      <div className="z-0 w-[20%] 2xl:w-[25%] hidden lg:flex flex-col justify-between items-center p-4 absolute h-full right-0">
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
      </div>
    </main>
  );
}

