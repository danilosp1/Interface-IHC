import { Routes, Route } from "react-router-dom";
import { Home, Ajuda, Atendimento, Conselho, Lugares, Sentimento, Suporte, EmotionCheck } from "../pages/index"

const AppRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/ajuda/:tipo" element={<Ajuda />} />
                <Route path="/atendimento" element={<Atendimento />} />
                <Route path="/conselho" element={<Conselho />} />
                <Route path="/lugares" element={<Lugares />} />
                <Route path="/sentimento" element={<Sentimento />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="/facecheck" element={<EmotionCheck />} />
            </Routes>
        </>
    );
};
export default AppRoutes;