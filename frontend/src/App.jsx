import "./App.css";
import Connexion from "./pages/Connexion.jsx";
import Dashboard from "./pages/Dashbord.jsx";
import Inscription from "./pages/Inscription.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </>
  );
}

export default App;
