import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Acceuil.css";
import "animate.css/animate.css";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Acceuil() {
  // return (
  //   <>
  //     <h1>Acceuil</h1>
  //     <Link to="/login"> Connexion</Link>
  //   </>
  // );
  return (
    <div className="Acceuil container h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="animate__animated animate__fadeIn">
        Bienvenue sur FinanSimpli
      </h1>
      <p className="animate__animated animate__fadeIn">
        Facilitez la Gestion Financière de Votre Entreprise
      </p>

      <h2>Comment ça fonctionne ?</h2>
      <p>
        FinanSimpli est un outil révolutionnaire conçu pour simplifier
        la saisie des données financières de votre entreprise. Fini le temps
        perdu à enregistrer manuellement des données dans des tableaux Excel !
        Notre plateforme automatisée vous permet de gérer vos finances plus
        efficacement que jamais.
      </p>

      <h2>Les Avantages de FinanSimpli</h2>
      <ul className="list-unstyled">
        <li className="animate__animated animate__fadeInUp">
          <strong>Automatisation :</strong> Plus besoin de saisir manuellement
          les données. Notre système intelligent les collecte et les organise
          pour vous.
        </li>
        <li className="animate__animated animate__fadeInUp">
          <strong>Gain de Temps :</strong> Libérez-vous des tâches fastidieuses
          et concentrez-vous sur ce qui compte vraiment pour votre entreprise.
        </li>
        <li className="animate__animated animate__fadeInUp">
          <strong>Précision :</strong> Réduisez les risques d'erreurs humaines
          grâce à notre automatisation précise.
        </li>
        <li className="animate__animated animate__fadeInUp">
          <strong>Accessibilité :</strong> Accédez à vos données financières à
          tout moment et n'importe où.
        </li>
      </ul>


      <Link to="/login" className="btn btn-primary btn-animate">
         Connexion
      </Link>
    </div>
  );
}
