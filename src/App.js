import AppRoutes from "./routes/routes";
import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { useExternalScript } from "./helpers/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "./helpers/ai-sdk/loader";

function App() {
  const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
  const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
  const videoEl = useRef(undefined)

  useEffect(() => {
    videoEl.current = document.getElementById("videoEl");
    async function getAiSdk (){
      if(aiSdkState === "ready" && mphToolsState === "ready"){
        const { source, start } = await getAiSdkControls();
      await source.useCamera({
        toVideoElement: document.getElementById("videoEl"),
      });
        await start();
      }
    }
    getAiSdk();
  }, [aiSdkState, mphToolsState]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
