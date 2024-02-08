import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import lugares from "../../assets/Mapa Piso Terreo DC 2022.jpg"
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
        <div className="text-center text-black text-2xl font-normal my-6">
          Estes são os lugares do departamento
        </div>
          <img src={lugares} alt="locais" className="" style={{transform: "rotate(90deg)"}} width={600}/>
      </div>

      <div className="z-0 w-[20%] 2xl:w-[25%] flex flex-col justify-between items-center p-4 absolute h-full right-0">
        <img alt="logo dc" src={image} width={350} height={350}></img>
        <img alt="logo dc" src={image} width={350} height={350}></img>
      </div>
    </main>
  );
}

