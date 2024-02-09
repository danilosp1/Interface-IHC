import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import { ChevronLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';


export default function Suporte() {
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
                <div className="text-black text-5xl lg:text-8xl font-normal mb-8 text-center">
                    Suporte
                </div>
                <div className="text-center text-black text-xl lg:text-2xl font-normal w-[60%] 2xl:w-[50%] my-6 mb-8">
                    Encontrou um erro? Reporte para o DC
                </div>
                <div className="text-center text-black text-xl lg:text-2xl font-bold my-6 mb-48">
                    +55 (16) 3351-8232
                </div>

                <div className="">
                    <a href="/">
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

