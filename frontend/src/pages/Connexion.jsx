import React from "react";
import "./../styles/Connexion.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { url } from "../utils/url.js";
import { useCookies } from "react-cookie";
import {ToastContainer, toast} from 'react-toastify';

import Cookies from "js-cookie";
export default function Connexion() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("url", url);
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(`${url}api/admin/login`, data);
      Cookies.set("token", response.data.token, {expires: 3600*24})

      navigate("/dashbord");
      console.log("Réponse de l'API :", response.data.token);
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };
  document.title = "Connexion";
  return (
    <div className="Connexion">
      <div className="connexion">
        <div className="cadre1"></div>
        <div className="cadre2">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Connexion</h2>
            <div className="input">
              <div className="inputBox">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="couda.dm@gmail.com"
                  {...register("email", { required: "MEmail requis" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="inputBox">
                <label htmlFor="Password">Mot de passe</label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="............"
                  // required
                  {...register("password", { required: "Mot de passe requis" })}
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
          </form>
        </div>
      </div>
    </div>
  );
}
