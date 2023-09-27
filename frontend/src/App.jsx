import "./App.css";
import Connexion from "./pages/Connexion.jsx";
import Dashboard from "./pages/Dashbord.jsx";
import Inscription from "./pages/Inscription.jsx";
import Nouvelle from "./pages/Nouvelle";
import Bilan from "./pages/Bilan";
import Acceuil from "./pages/Acceuil";
import Renouvellement from "./pages/Renouvellement";

import Suivi from "./pages/Suivi";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Connexion />} />
        <Route path="/" exact element={<Acceuil />} />
        <Route path="/dashbord" exact element={<Dashboard />} />
        <Route path="/renouvellement" exact element={<Renouvellement />} />
        <Route path="/bilan" exact element={<Bilan />} />
        <Route path="/nouvelle-affaire" exact element={<Nouvelle />} />
        <Route path="/suivi" exact element={<Suivi />} />
        <Route path="/inscription" exact element={<Inscription />} />
      </Routes>
    </>
  );
}

export default App;
