// Form2.jsx
import React from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Form } from "react-bootstrap";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
const Form2 = ({ formData, onChange, onPrevious, onSubmit }) => {
  const cities = ["Mensuelle", "Trimestrielle", "Semestrielle", "Annuelle"];
 
  return (
    <div>
      <h2>Information Sur la vehicule</h2>
  
      <Form.Label>Periode</Form.Label> <br />
      <Dropdown
      name="periode"
        value={formData.periode}
        onChange={onChange}
        options={cities}
        placeholder="Select a City"
        className="w-full md:w-14rem"
      /> <br />
      <Form.Label>Immatriculation</Form.Label> <br />
     
      <InputText
        name="immatriculation"
        value={formData.immatriculation}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Marque du vehicule</Form.Label> <br />
      <InputText
        name="marque"
        value={formData.marque}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Usage</Form.Label> <br />
      <InputText
        name="usage"
        value={formData.usage}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Puissance</Form.Label> <br />
      <InputText
        name="puissance"
        value={formData.puissance}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Energie</Form.Label> <br />
      <InputText
        name="energie"
        value={formData.energie}
        required
        onChange={onChange}
      />{" "} <br />
      <Form.Label>Date de Premiere Circulation</Form.Label> <br />
      <InputText
        name="dateCirculation"
        value={formData.dateCirculation}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Date d'Effet</Form.Label> <br />
      <InputText
        name="dateEffet"
        value={formData.dateEffet}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Date d'Echeance</Form.Label> <br />
      <InputText
        name="dateEcheance"
        value={formData.dateEcheance}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Commission</Form.Label> <br />
      <InputText
        name="commission"
        value={formData.commission}
        required
        onChange={onChange}
      />{" "}
      <br />
      <Form.Label>Montant Compagnie</Form.Label> <br />
      <InputText
        name="MtnCompagnie"
        value={formData.MtnCompagnie}
        required
        onChange={onChange}
      />{" "}
      <br />
      <button className="btn btn-primary" onClick={onPrevious}>
        Précédent
      </button>
      <button className="btn btn-primary" onClick={onSubmit}>
        Soumettre
      </button>
    </div>
  );
};

export default Form2;
