import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import {Info, Computer, MonitorCheck, Presentation, Droplets, LibraryBig, ChevronLeft} from 'lucide-react';


export default function Places() {
  return (
    <main className="flex flex-row h-screen items-center justify-center">
      <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-between items-center p-4 absolute h-full left-0 z-0">
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
      </div>

      <div className="z-10 w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
        <div className="text-black text-8xl font-normal mb-6 text-center">
          Lugares
        </div>
        <div className="text-center text-black text-2xl font-normal w-[60%] 2xl:w-[50%] my-6">
          Estes são os lugares do departamento, selecione um para mais informações
        </div>
        <div className="text-center text-black text-2xl font-bold my-6">
          Selecione uma opção
        </div>
        <div className="flex flex-row gap-6 mb-6">
          <a href="/places">
            <Button className="w-[22rem]">
              Banheiros
              <Droplets size="28px" />
            </Button>
          </a>
          <a href="/places">
            <Button className="w-[22rem]">
              LIG
              <Computer size="28px" />
            </Button>
          </a>
          <a href="/places">
            <Button className="w-[22rem]">
              Secretaria
              <Info size="28px" />
            </Button>
          </a>
        </div>
        <div className="flex flex-row gap-6 mb-12">
          <a href="/places">
            <Button className="w-[22rem]">
              Auditório
              <Presentation size="28px" />
            </Button>
          </a>
          <a href="/places">
            <Button className="w-[22rem]">
              Laboratórios
              <MonitorCheck size="28px" />
            </Button>
          </a>
          <a href="/places">
            <Button className="w-[22rem]">
              Professores
              <LibraryBig size="28px" />
            </Button>
          </a>
        </div>
        <div className="">
          <a href="/">
            <Button className="w-[22rem] justify-start gap-24">
              <ChevronLeft size="28px" />
              Voltar
            </Button>
          </a>
        </div>
      </div>

      <div className="z-0 w-[20%] 2xl:w-[25%] flex flex-col justify-between items-center p-4 absolute h-full right-0">
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
      </div>
    </main>
  );
}

