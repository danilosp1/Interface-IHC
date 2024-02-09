import FaceTrackerComponent from '../../components/FaceTrackerComponent';
import { useEffect, useRef, useState } from "react";
import { useExternalScript } from "../../helpers/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "../../helpers/ai-sdk/loader";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/ui/button"
import image from "../../assets/logoDC.svg"
import { ChevronLeft } from 'lucide-react';

const EmotionCheck = () => {
    const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
    const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
    const videoEl = useRef(undefined)
    const [dominantEmotion, setDominantEmotion] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        videoEl.current = document.getElementById("videoEl");
        async function getAiSdk() {
            if (aiSdkState === "ready" && mphToolsState === "ready") {
                const { source, start } = await getAiSdkControls();
                await source.useCamera({
                    toVideoElement: document.getElementById("videoEl"),
                });
                await start();
            }
        }
        getAiSdk();
    }, [aiSdkState, mphToolsState]);

    useEffect(() => {
        bindEvents();
    }, []);

    useEffect(() => {
        switch (dominantEmotion) {
            case "Angry":
                navigate('/ajuda/3');
                break;
            case "Happy":
                navigate('/ajuda/2');
                break;
            case "Surprise":
                navigate('/ajuda/2');
                break;
            case "Sad" || "Fear":
                navigate('/ajuda/1');
                break;
            case "Fear":
                navigate('/ajuda/1');
                break;
            case "Disgust":
                navigate('/ajuda/4');
                break;
            case "Neutral":
                navigate('/ajuda/4');
                break;
            default:
                break;
        }
    }, [dominantEmotion, navigate])

    function bindEvents() {
        window.addEventListener("CY_FACE_EMOTION_RESULT", (evt) => {
            setDominantEmotion(evt.detail.output.dominantEmotion || "");
        });
    }

    return (
        <div className='flex flex-row h-ful min-h-screen items-center justify-center'>
            <div className="w-[20%] 2xl:w-[25%] hidden lg:flex flex-col justify-start items-center p-4 absolute h-full left-0 z-0">
                <img alt="logo dc" src={image} width={350} height={350}></img>
            </div>

            <div className='z-10 w-full lg:w-[60%] 2xl:w-[50%] flex flex-col items-center justify-center h-full'>

                <div className="text-black text-5xl lg:text-8xl font-normal my-6 text-center">
                    Sentimento
                </div>
                <div className="text-center text-black text-xl lg:text-2xl font-normal w-full lg:w-[60%] 2xl:w-[50%] my-6">
                    Vou analisar o que você está sentindo para te ajudar
                </div>

                <div className='w-48 lg:w-96'>
                    <video id="videoEl"></video>
                </div>

                <FaceTrackerComponent videoEl={videoEl}></FaceTrackerComponent>

                <p>Carregando, aguarde</p>
            </div>

            <div className="w-[20%] 2xl:w-[25%] hidden lg:flex flex-col justify-between items-center p-4 absolute h-full right-0 z-0">
            </div>
        </div>
    );
};

export default EmotionCheck;
