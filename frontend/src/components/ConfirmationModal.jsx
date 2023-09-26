// ConfirmationModal.jsx
import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
const ConfirmationModal = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Dialog
      visible={isVisible}
      onHide={onClose}
      header="Confirmation"
      footer={
        <div>
          <Button label="Non" icon="pi pi-times" onClick={onClose} />
          <Button label="Oui" icon="pi pi-check" onClick={onConfirm} />
        </div>
      }
    >
      Confirmez-vous l'envoi du formulaire ?
    </Dialog>
  );
};

export default ConfirmationModal;
