import { Button } from "../../components/ui/button";
import lugares from "../../assets/Mapa Piso Terreo DC 2022.jpg";
import image from "../../assets/logoDC.svg"
import React, { useState, useEffect } from 'react';
import { ChevronLeft } from "lucide-react";

export default function Lugares() {
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
    <main className="flex flex-row h-ful min-h-screen items-center justify-center relative">
      <div className="w-[20%] 2xl:w-[25%] hidden lg:flex flex-col justify-start items-center p-4 absolute h-full left-0 z-0">
        <img alt="logo dc" src={image} width={350} height={350}></img>
      </div>

      <div className="z-10 w-full lg:w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-black text-5xl lg:text-8xl font-normal mb-6 text-center">
            Lugares
          </div>
          <div className="text-center text-black text-xl lg:text-2xl font-normal my-2 lg:my-6">
            Estes são os lugares do departamento
          </div>
        </div>
        <div className="relative w-full h-[70vh] flex justify-center items-center z-0">
          <img
            src={lugares}
            alt="locais"
            className="max-w-full max-h-full"
            style={{
              transform: windowWidth < 1080 ? "rotate(0deg) scale(0.8)" : "rotate(90deg) scale(1.8)",
            }}
          />
        </div>
        <div className="mt-4 z-10">
          <a href="/">
            <Button size={windowWidth < 1080 ? "lg" : ""} className="w-[12rem] flex justify-center items-center">
              <ChevronLeft size="28px" className="mr-2" />
              Voltar
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
