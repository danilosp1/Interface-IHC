import { Button } from "../../components/ui/button";
import image from "../../assets/logoDC.svg";
import lugares from "../../assets/Mapa Piso Terreo DC 2022.jpg";
import { ChevronLeft } from "lucide-react";

export default function Lugares() {
  return (
    <main className="flex flex-row h-screen items-center justify-center">
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <a href="/">
          <Button className="w-[12rem] flex justify-center items-center">
            <ChevronLeft size="28px" className="mr-2" />
            Voltar
          </Button>
        </a>
      </div>
      <div className="z-10 w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full relative">
        <div className="flex flex-col items-center justify-center">
          <div className="text-black text-8xl font-normal mb-6 text-center">
            Lugares
          </div>
          <div className="text-center text-black text-2xl font-normal my-6">
            Estes são os lugares do departamento
          </div>
        </div>
        <div
          className="relative"
          style={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={lugares}
            alt="locais"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "rotate(90deg) scale(1.8)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
