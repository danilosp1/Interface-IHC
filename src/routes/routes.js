import { Routes, Route } from "react-router-dom";
import { Home, Ajuda, Atendimento, Conselho, Lugares, Sentimento, Suporte } from "../pages/index"

const AppRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/ajuda" element={<Ajuda />} />
                <Route path="/atendimento" element={<Atendimento />} />
                <Route path="/conselho" element={<Conselho />} />
                <Route path="/lugares" element={<Lugares />} />
                <Route path="/sentimento" element={<Sentimento />} />
                <Route path="/suporte" element={<Suporte />} />
            </Routes>
        </>
    );
};
export default AppRoutes;