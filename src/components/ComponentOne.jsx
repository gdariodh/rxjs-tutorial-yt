import React from "react";
import { sharingInformationService } from "../services/sharing-information.service";

export default function ComponentOne() {
  const handleClick = () => {
    sharingInformationService.setSubject("Hola");
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar information</button>
    </div>
  );
}
