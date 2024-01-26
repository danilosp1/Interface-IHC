import Image from "next/image";
import { Button } from "@/components/ui/button"
import image from "../../../../public/logoDC.svg"
import { Search, Info, Laptop2, ArrowDownLeftFromSquare } from 'lucide-react';
import Link from 'next/link'


export default function Places() {
    return (
        <main className="flex flex-row h-screen items-center justify-center">
            <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-between items-center p-4 absolute h-full left-0 z-0">
                <Image src={image} width={350} height={350}></Image>
                <Image src={image} width={350} height={350}></Image>
            </div>

            <div className="z-10 w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
                <div className="text-black text-8xl font-normal mb-8 text-center">
                    Atendimento
                </div>
                <div className="text-center text-black text-4xl font-normal w-[80%] 2xl:w-[50%] my-6 mb-8">
                    A UFSCar possui serviços gratuitos de atendimento psicológico
                </div>
                <div className="text-center text-black text-4xl font-bold my-2">
                Projeto X: (99) 99999-9999
                </div>
                <div className="text-center text-black text-4xl font-bold my-2">
                    Projeto X: (99) 99999-9999
                </div>
                <div className="text-center text-black text-4xl font-bold my-2 mb-12">
                    Projeto X: (99) 99999-9999
                </div>

                <div className="">
                    <Link href="/pages/">
                        <Button className="w-[22rem] justify-start gap-24">
                            <Search size="28px" />
                            Voltar
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="z-0 w-[20%] 2xl:w-[25%] flex flex-col justify-between items-center p-4 absolute h-full right-0">
                <Image src={image} width={350} height={350}></Image>
                <Image src={image} width={350} height={350}></Image>
            </div>
        </main>
    );
}

