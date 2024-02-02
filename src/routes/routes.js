import { Routes, Route } from "react-router-dom";
import { Home, Ajuda, Atendimento, Conselho, Places, Sentimento, Support } from "../pages/index"

const AppRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/ajuda" element={<Ajuda />} />
                <Route path="/atendimento" element={<Atendimento />} />
                <Route path="/conselho" element={<Conselho />} />
                <Route path="/places" element={<Places />} />
                <Route path="/sentimento" element={<Sentimento />} />
                <Route path="/support" element={<Support />} />
            </Routes>
        </>
    );
};
export default AppRoutes;