// Form1.jsx
import React from "react";
import { InputText } from "primereact/inputtext";
import {Form} from "react-bootstrap";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
const Form1 = ({ formData, onChange, onNext }) => {
  return (
    <div>
      <h2>Formulaire 1</h2>
      <Form.Label>Nom</Form.Label>
      <InputText name="field1" value={formData.field1} required onChange={onChange} /> <br />
      {/* Autres champs de formulaire */}
      <button className="btn btn-primary" onClick={onNext}>Suivant</button>
    </div>
  );
};

export default Form1;
