import React from "react";
import "./../styles/Connexion.css";
import { Link } from "react-router-dom";
export default function Connexion() {
  return (
    <div className="Connexion">
      <div className="connexion">
        <div className="cadre1"></div>
        <div className="cadre2">
          <div className="form">
            <h2>Connexion</h2>
            <div className="input">
              <div className="inputBox">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  id="username"
                  placeholder="couda.dm@gmail.com"
                  required
                />
              </div>
              <div className="inputBox">
                <label htmlFor="Password">Mot de passe</label>
                <input
                  type="password"
                  id="Password"
                  placeholder="............"
                  required
                />
              </div>
              <p className="forget">
                <Link to={"#"}> Mot de passe oublié ? </Link>
              </p>
              <div className="inputBox">
                <input type="submit" value="Connexion" required />
              </div>
            </div>
            <p className="forget">
              J'ai pas de compte ? <Link to={"/inscription"}>Inscription</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
