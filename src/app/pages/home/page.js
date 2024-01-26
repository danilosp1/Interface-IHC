import Image from "next/image";
import { Button } from "@/components/ui/button"
import image from "../../../../public/logoDC.svg"
import { Search, Info, Laptop2 } from 'lucide-react';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-row h-screen">
      <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-evenly items-center">
        <Image src={image} width={350} height={350}></Image>
        <Image src={image} width={350} height={350}></Image>
        <Image src={image} width={350} height={350}></Image>  
      </div>

      <div className="w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
        <div className="text-black text-8xl font-normal mb-6 text-center">
          Olá, tudo bem?
        </div>
        <div className="text-center text-black text-2xl font-normal w-[80%] 2xl:w-[50%] my-6">
          Eu sou o robô do departamento da computação e estou aqui para te ajudar!
        </div>
        <div className="text-center text-black text-2xl font-bold my-6">
          Selecione uma opção
        </div>
        <div className="flex flex-col gap-6">
          <Link href="pages/places">
            <Button className="">
              Lugares
              <Search size="28px" />
            </Button>
          </Link>
          <Button className="">
            Ajuda
            <Info size="28px" />
          </Button>
          <Button className="">
            Suporte Técnico
            <Laptop2 size="28px" />
          </Button>
        </div>
      </div>

      <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-evenly items-center">
        <Image src={image} width={350} height={350}></Image>
        <Image src={image} width={350} height={350}></Image>
        <Image src={image} width={350} height={350}></Image>  
      </div>
    </main>
  );
}

