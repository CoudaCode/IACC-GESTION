// Form1.jsx
import React from "react";
import { InputText } from "primereact/inputtext";
import { Form } from "react-bootstrap";
import "primereact/resources/themes/saga-blue/theme.css";

import "primereact/resources/primereact.min.css";
const Form1 = ({ formData, onChange, onNext }) => {
  return (
    <div>
      <h2>Information sur le Client</h2>
      <Form.Label>name</Form.Label> <br />
      <InputText
        name="nom"
        value={formData.nom}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>prenom</Form.Label> <br />
      <InputText
        name="prenom"
        value={formData.prenom}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Addresse</Form.Label> <br />
      <InputText
        name="addresse"
        value={formData.addresse}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Email</Form.Label> <br />
      <InputText
        name="email"
        value={formData.email}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Telephone</Form.Label> <br />
      <InputText
        name="telephone"
        value={formData.telephone}
        required
        onChange={onChange}
      />{" "}
      <br />
      <button className="btn btn-primary" onClick={onNext}>
        Suivant
      </button>
    </div>
  );
};

export default Form1;
