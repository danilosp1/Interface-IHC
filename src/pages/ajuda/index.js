
import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import { Search, Info, Laptop2, ChevronLeft, Smile, HelpCircle} from 'lucide-react';
import { useParams } from "react-router-dom";


export default function Ajuda() {

    let { tipo } = useParams()

    const tristeza = {
        "sintomas_tristeza": {
          "fisicos": [
            "Choro frequente",
            "Fadiga",
            "Distúrbios de sono",
            "Dores no corpo"
          ],
          "emocionais": [
            "Sentimento de vazio",
            "Desânimo",
            "Falta de prazer",
            "Baixa autoestima"
          ],
          "cognitivos": [
            "Dificuldade de concentração",
            "Pensamentos negativos",
            "Autoavaliação negativa"
          ],
          "sociais": [
            "Isolamento social",
            "Dificuldade em interagir",
            "Mudanças no apetite"
          ]
        }
    }

    const felicidade = {
        "sintomas_felicidade": {
          "fisicos": [
            "Sensação de leveza",
            "Sorriso frequente",
            "Aumento de energia",
            "Bem-estar geral"
          ],
          "emocionais": [
            "Contentamento",
            "Entusiasmo",
            "Satisfação",
            "Alegria intensificada"
          ],
          "cognitivos": [
            "Pensamentos positivos",
            "Clareza mental",
            "Foco e concentração"
          ],
          "sociais": [
            "Socialização ativa",
            "Empatia",
            "Compartilhamento de conquistas"
          ]
        }
    }

    const raiva = {
        "sintomas_raiva": {
            "fisicos": [
            "Aumento da frequência cardíaca",
            "Tensão muscular",
            "Respiração acelerada",
            "Punhos cerrados"
            ],
            "emocionais": [
            "Sentimento de irritação",
            "Frustração intensa",
            "Hostilidade",
            "Impaciência"
            ],
            "cognitivos": [
            "Pensamentos negativos",
            "Dificuldade de raciocínio lógico",
            "Foco estreitado"
            ],
            "sociais": [
            "Isolamento social",
            "Comportamento agressivo",
            "Dificuldade de comunicação"
            ]
        }
    }

    const indefinido = {
    "sintomas_emocao_indefinida": {
        "fisicos": [
        "Sensação de desconforto",
        "Inquietação",
        "Variações na energia"
        ],
        "emocionais": [
        "Confusão emocional",
        "Dificuldade em nomear sentimentos",
        "Flutuações de humor"
        ],
        "cognitivos": [
        "Pensamentos confusos",
        "Falta de clareza mental",
        "Reflexões ambíguas"
        ],
        "sociais": [
        "Retraimento social",
        "Dificuldade em expressar emoções",
        "Comportamento reservado"
        ]
    }
    }

    function renderEmotion(tipo) {
        switch (tipo) {
            case '1' :
                return tristeza
                break
            case '2' :
                return raiva
                break
            case '3' :
                return felicidade
                break
            case '4' :
                return indefinido
                break
        }
    }

    return (
        <main className="flex flex-row h-screen items-center justify-center">
            <div className="w-[20%] 2xl:w-[25%] flex flex-col justify-between items-center p-4 absolute h-full left-0 z-0">
                <img alt="logo dc"src={image} width={350} height={350}></img>
                <img alt="logo dc"src={image} width={350} height={350}></img>
            </div>

            <div className="z-10 w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full">
                <div className="text-black text-8xl font-normal mb-6 text-center">
                    Ajuda
                </div>
                <div className="text-center text-black text-4xl font-normal w-[60%] 2xl:w-[50%] my-6">
                    Você parece Triste
                    , posso te ajudar?
                </div>
                <div className="text-center text-black text-2xl font-bold my-6">
                    Selecione uma opção
                </div>
                <div className="flex flex-row gap-6 mb-6">
                    <a href="/sentimento">
                        <Button className="w-[22rem]">
                            Não estou triste
                            <Smile size="28px"/>
                        </Button>
                    </a>
                </div>
                <div className="flex flex-row gap-6">
                    <a href="/conselho">
                        <Button className="w-[22rem]">
                            Conselho
                            <HelpCircle size="28px" />
                        </Button>
                    </a>
                </div>
                <a href="/atendimento">
                    <div className="text-center text-black text-2xl font-medium italic my-6">
                        Procurar ajuda
                    </div>
                </a>
                <div className="">
                    <a href="/">
                        <Button className="w-[22rem] justify-start gap-24">
                            <ChevronLeft size="28px" />
                            Voltar
                        </Button>
                    </a>
                </div>
            </div>

            <div className="z-0 w-[30%] 2xl:w-[25%] flex flex-col py-24 gap-6 items-center p-4 absolute h-full right-0 border-l-2 border-black">
                <div className="text-center text-5xl"> 
                    Sintomas de tristeza
                </div>
                <div className="flex flex-col gap-6 text-xl">
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                    <div>- Lorem epson</div>
                </div>
            </div>
        </main>
    );
}

