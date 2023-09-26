import "./App.css";
import Connexion from "./pages/Connexion.jsx";
import Dashboard from "./pages/Dashbord.jsx";
import Inscription from "./pages/Inscription.jsx";
import Nouvelle from "./pages/Nouvelle";
import Bilan from "./pages/Bilan"
import Renouvellement from "./pages/Renouvellement"

import Suivi from "./pages/Suivi"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Connexion />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/renouvellement" element={<Renouvellement />} />
        <Route path="/bilan" element={<Bilan />} />
        <Route path="/nouvelle-affaire" element={<Nouvelle />} />
        <Route path="/suivi" element={<Suivi />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </>
  );
}

export default App;
