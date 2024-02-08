import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import { Headset, ChevronLeft, Smile } from 'lucide-react';
<Headset />

export default function Conselho() {
    return (
        <main className="flex flex-row h-ful min-h-screen items-center justify-center">
            <div className="w-[20%] 2xl:w-[25%] hidden lg:flex flex-col justify-between items-center p-4 absolute h-full left-0 z-0">
                <img alt="logo dc" src={image} width={350} height={350}></img>
                <img alt="logo dc" src={image} width={350} height={350}></img>
            </div>

            <div className="z-10 w-full lg:w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
                <div className="text-black text-5xl lg:text-8xl font-normal mb-8 text-center">
                    Conselho
                </div>
                <div className="text-center text-black text-2xl lg:text-3xl font-normal w-[90%] 2xl:w-[50%] my-6 mb-8">
                    As vezes descansar é necessário, não se cobre tanto e faça o que está ao seu alcance
                </div>
                <div className="text-center text-black text-xl lg:text-2xl font-bold my-6">
                    Selecione uma opção
                </div>
                <div className="flex flex-col lg:flex-row gap-6 mb-16">
                    <a href="/atendimento">
                        <Button size="lg" className="lg:w-[22rem]">
                            Atendimento
                            <Headset size="28px" />
                        </Button>
                    </a>
                    <a href="/sentimento">
                        <Button size="lg" className="lg:w-[22rem]">
                            Selecionar sentimento
                            <Smile size="28px" />
                        </Button>
                    </a>
                </div>

                <div className="">
                    <a href="/facecheck">
                        <Button size="lg" className="lg:w-[22rem] justify-start  gap-4 lg:gap-24">
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

