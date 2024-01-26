import Image from "next/image";
import { Button } from "@/components/ui/button"
import image from "../../../../public/logoDC.svg"
import { Search, Info, Laptop2, ArrowDownLeftFromSquare } from 'lucide-react';
import Link from 'next/link'


export default function Sentimento() {
  return (
    <main className="flex flex-row h-screen items-center justify-center">
      <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-between items-center p-4 absolute h-full left-0 z-0">
        <Image src={image} width={350} height={350}></Image>
        <Image src={image} width={350} height={350}></Image>
      </div>

      <div className="z-10 w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
        <div className="text-black text-8xl font-normal mb-6 text-center">
          Como se sente?
        </div>
        <div className="text-center text-black text-2xl font-bold my-6">
          Selecione uma opção
        </div>
        <div className="flex flex-row gap-6 mb-6">
          <Link href="/pages/">
            <Button className="w-[22rem]">
              Estou triste
              <ArrowDownLeftFromSquare size="28px" />
            </Button>
          </Link>
          <Link href="/pages/">
            <Button className="w-[22rem]">
              Estou irritado
              <Search size="28px" />
            </Button>
          </Link>
        </div>
        <div className="flex flex-row gap-6 mb-12">
          <Link href="/pages/">
            <Button className="w-[22rem]">
              Estou feliz
              <Search size="28px" />
            </Button>
          </Link>
          <Link href="/pages/">
            <Button className="w-[22rem]">
              Não sei
              <Search size="28px" />
            </Button>
          </Link>
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

