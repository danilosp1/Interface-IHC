import AppRoutes from "./routes/routes";
import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { useExternalScript } from "./helpers/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "./helpers/ai-sdk/loader";

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
