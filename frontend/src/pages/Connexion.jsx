import React from "react";
import "./../styles/Connexion.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { url } from "../utils/url.js";
export default function Connexion() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  console.log('url', url)
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${url}login`, data, {
        withCredentials: true,
      });

      // Gérez la réponse de l'API ici (par exemple, redirigez l'utilisateur si la connexion est réussie)
      console.log("Réponse de l'API :", response.data);
    } catch (error) {
      // Gérez les erreurs ici (par exemple, affichez un message d'erreur)
      console.error("Erreur lors de la connexion :", error);
    }
  };
  document.title = "Connexion";
  return (
    <div className="Connexion">
      <div className="connexion">
        <div className="cadre1"></div>
        <div className="cadre2">
          <div className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Connexion</h2>
            <div className="input">
              <div className="inputBox">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="couda.dm@gmail.com"
                  {...register('email', { required: 'MEmail requis' })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="inputBox">
                <label htmlFor="Password">Mot de passe</label>
                <input
                  type="password"
                  id="Password"
                  placeholder="............"
                  // required
                  {...register('password', { required: 'Mot de passe requis' })}

                />
                {errors.email && <p>{errors.email.message}</p>}
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
