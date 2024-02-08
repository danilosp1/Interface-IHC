import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import { Search, Info, Laptop2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-row h-screen">
      <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-evenly items-center p-4">
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
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
          <a href="/lugares">
            <Button className="">
              Lugares
              <Search size="28px" />
            </Button>
          </a>
          <a href="/facecheck">
            <Button className="">
              Ajuda
              <Info size="28px" />
            </Button>
          </a>
          <a href="/suporte">
            <Button className="">
              Suporte Técnico
              <Laptop2 size="28px" />
            </Button>

          </a>
        </div>
      </div>

      <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-evenly items-center p-4">
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
      </div>
    </main>
  );
}

