import FaceTrackerComponent from '../../components/FaceTrackerComponent';
import { useEffect, useRef, useState } from "react";
import { useExternalScript } from "../../helpers/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "../../helpers/ai-sdk/loader";

const EmotionCheck = () => {
    const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
    const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
    const videoEl = useRef(undefined)
    const [dominantEmotion, setDominantEmotion] = useState("");

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

    function bindEvents() {
        window.addEventListener("CY_FACE_EMOTION_RESULT", (evt) => {
            setDominantEmotion(evt.detail.output.dominantEmotion || "");
        });
    }

    return (
        <div>
            <video id="videoEl"></video>
            <FaceTrackerComponent videoEl={videoEl}></FaceTrackerComponent>
            <p>Emoção: {dominantEmotion}</p>
        </div>
    );
};

export default EmotionCheck;
