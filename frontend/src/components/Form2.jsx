// Form2.jsx
import React from "react";
import { InputText } from "primereact/inputtext";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
const Form2 = ({ formData, onChange, onPrevious, onSubmit }) => {
  return (
    <div>
      <h2>Formulaire 2</h2>
      <InputText name="field2" value={formData.field2} required onChange={onChange} /> <br />
      {/* Autres champs de formulaire */}
      <button className="btn btn-primary" onClick={onPrevious}>Précédent</button>
      <button className="btn btn-primary" onClick={onSubmit}>Soumettre</button>
    </div>
  );
};

export default Form2;
