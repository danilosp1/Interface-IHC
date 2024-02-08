
import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import { ChevronLeft, Smile, HelpCircle} from 'lucide-react';
import { useParams } from "react-router-dom";
import sentimentoText from "./sentimento.js";


export default function Ajuda() {

    let { tipo } = useParams()

    return (
        <main className="flex lg:flex-row flex-col pt-24 lg:pt-0 h-ful min-h-screen items-center justify-center">
            <div className="w-[20%] 2xl:w-[25%] hidden lg:flex flex-col justify-between items-center p-4 absolute h-full left-0 z-0">
                <img alt="logo dc"src={image} width={350} height={350}></img>
                <img alt="logo dc"src={image} width={350} height={350}></img>
            </div>

            <div className="z-10 w-full lg:w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
                <div className="text-black text-5xl lg:text-8xl font-normal mb-6 text-center">
                    Ajuda
                </div>
                <div className="text-center text-black text-2xl lg:text-4xl font-normal w-[60%] 2xl:w-[50%] my-6">
                    Você parece {sentimentoText[tipo].texto}
                    , posso te ajudar?
                </div>
                <div className="text-center text-black text-xl lg:text-2xl font-bold my-6">
                    Selecione uma opção
                </div>
                <div className="flex flex-row gap-6 mb-6">
                    <a href="/sentimento">
                        <Button size="lg" className="lg:w-[22rem]">
                            Não estou {sentimentoText[tipo].texto}
                        </Button>
                    </a>
                </div>
                <div className="flex flex-row gap-6">
                    <a href="/conselho">
                        <Button size="lg" className="lg:w-[22rem]">
                            Conselho
                            <HelpCircle size="28px" />
                        </Button>
                    </a>
                </div>
                <a href="/atendimento">
                    <div className="text-center text-black text-lg lg:text-2xl font-medium italic my-6">
                        Procurar ajuda
                    </div>
                </a>
                <div className="">
                    <a href="/">
                        <Button size="lg" className="lg:w-[22rem] justify-start  gap-4 lg:gap-24">
                            <ChevronLeft size="28px" />
                            Voltar
                        </Button>
                    </a>
                </div>
            </div>

            <div className="z-0 w-[90%] lg:w-[30%] 2xl:w-[25%] flex flex-col py-8 mt-8 lg:mt-0 lg:py-24 gap-6 items-center p-4 lg:absolute h-full right-0 border-t-2 lg:border-t-0 lg:border-l-2 border-black">
                <div className="text-center text-5xl"> 
                    Sinais de {sentimentoText[tipo].def}
                </div>
                <div className="flex flex-col gap-6 text-xl">
                    <ul style={{listStyle: "outside", listStylePosition: "inside"}}>
                        <div className="font-bold">Físicos</div>
                        {sentimentoText[tipo].fisicos.map(value => {
                            return (
                                <li>{value}</li>
                            )
                        })}
                        <div className="font-bold">Emocionais</div>
                        {sentimentoText[tipo].emocionais.map(value => {
                            return (
                                <li>{value}</li>
                            )
                        })}
                        <div className="font-bold">Cognitivos</div>
                        {sentimentoText[tipo].cognitivos.map(value => {
                            return (
                                <li>{value}</li>
                            )
                        })}
                        <div className="font-bold">Sociais</div>
                        {sentimentoText[tipo].sociais.map(value => {
                            return (
                                <li>{value}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    );
}

