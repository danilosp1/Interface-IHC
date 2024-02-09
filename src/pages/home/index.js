import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import { Search, Laptop2, HeartHandshake } from 'lucide-react';
import React, { useState, useEffect } from 'react';



export default function Home() {

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
    <main className="flex flex-row h-ful min-h-screen">
      <div className="hidden lg:flex w-[20%] 2xl:w-[25%] flex-col justify-start items-center p-4">
        <img alt="logo dc" src={image} width={350} height={350}></img>
      </div>

      <div className="w-full pt-24 lg:w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
        <div className="text-black text-5xl lg:text-8xl font-normal mb-6 text-center">
          Olá, tudo bem?
        </div>
        <div className="text-center text-black text-xl lg:text-2xl font-normal w-[80%] 2xl:w-[50%] my-6">
          Eu sou o robô do departamento da computação e estou aqui para te ajudar!
        </div>
        <div className="text-center text-black text-2xl font-bold my-6">
          Selecione uma opção
        </div>
        <div className="flex flex-col gap-6">
          <a href="/lugares">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="">
              Lugares
              <Search size="28px" />
            </Button>
          </a>
          <a href="/facecheck">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="">
              Ajuda Emocional
              <HeartHandshake size="28px" />
            </Button>
          </a>
          <a href="/suporte">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="">
              Suporte Técnico
              <Laptop2 size="28px" />
            </Button>

          </a>
        </div>
      </div>
    </main>
  );
}

