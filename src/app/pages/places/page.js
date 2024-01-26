import Image from "next/image";
import { Button } from "@/components/ui/button"
import image from "../../../../public/logoDC.svg"
import { Search, Info, Laptop2 } from 'lucide-react';
import Link from 'next/link'

export default function Places() {
  return (
    <main className="flex flex-row h-screen">
      <div className="w-[25%] flex flex-col justify-evenly items-center">
        <Image src={image} width={350} height={350}></Image>
      </div>

      <div className="w-[50%] flex flex-col items-center justify-center h-full">
        <div className="text-black text-8xl font-normal mb-6">
          Lugares
        </div>
        <div className="text-center text-black text-2xl font-normal w-[50%] my-6">
          Estes são os lugares do departamento, selecione um para mais informações
        </div>
        <div className="text-center text-black text-2xl font-bold my-6">
          Selecione uma opção
        </div>
        <div className="flex flex-col gap-6">
          <Link href="/pages/">
          
          </Link>
          <Button className="">
            Lugares
            <Search size="28px" />
          </Button>
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

      <div className="w-[25%] flex flex-col justify-evenly items-center">
        <Image src={image} width={350} height={350}></Image>
      </div>
    </main>
  );
}

