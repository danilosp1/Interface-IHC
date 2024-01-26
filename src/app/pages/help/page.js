'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import image from "../../../../public/logoDC.svg"
import { Search, Info, Laptop2, ArrowDownLeftFromSquare } from 'lucide-react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


export default function Places() {
    const searchParams = useSearchParams()
    const search = searchParams.get('emocao')

    return (
        <main className="flex flex-row h-screen items-center justify-center">
            <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-between items-center p-4 absolute h-full left-0 z-0">
                <Image src={image} width={350} height={350}></Image>
                <Image src={image} width={350} height={350}></Image>
            </div>

            <div className="z-10 w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
                <div className="text-black text-8xl font-normal mb-6 text-center">
                    Ajuda
                </div>
                <div className="text-center text-black text-4xl font-normal w-[60%] 2xl:w-[50%] my-6">
                    Você parece 
                    {search == 1 ? " triste" : " feliz"}
                    , posso te ajudar?
                </div>
                <div className="text-center text-black text-2xl font-bold my-6">
                    Selecione uma opção
                </div>
                <div className="flex flex-row gap-6 mb-6">
                    <Link href="/pages/">
                        <Button className="w-[22rem]">
                            Não estou triste
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-row gap-6">
                    <Link href="/pages/">
                        <Button className="w-[22rem]">
                            Conselho
                            <Search size="28px" />
                        </Button>
                    </Link>
                </div>
                <Link href="/pages/">
                    <div className="text-center text-black text-2xl font-medium italic my-6">
                        Procurar ajuda
                    </div>
                </Link>
                <div className="">
                    <Link href="/pages/home">
                        <Button className="w-[22rem] justify-start gap-24">
                            <Search size="28px" />
                            Voltar
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="z-0 w-[30%] 2xl:w-[25%] flex flex-col py-24 gap-6 items-center p-4 absolute h-full right-0 border-l-2 border-black">
                <div className="text-center text-5xl"> 
                    Sintomas de tristeza
                </div>
                <div className="flex flex-col gap-6 text-xl">
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                </div>
            </div>
        </main>
    );
}

