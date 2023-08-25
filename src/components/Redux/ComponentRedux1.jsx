import React from "react";
import { useDispatch } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../redux/states/user";

export default function ComponentRedux1() {
  const dispatcher = useDispatch();

  const handleClickCreate = () => {
    dispatcher(createUser({ name: "Gaby", email: "gaby@gmail.com" }));
  };

  const handleClickModify = () => {
    dispatcher(modifyUser({ name: "Gaby Modificado", email: "" }));
  };

  const handleClickReset = () => {
    dispatcher(resetUser());
  };

  return (
    <div>
      <button onClick={handleClickCreate}>Enviar info Redux, createUser</button>

      <button onClick={handleClickModify}>Enviar info Redux, modifyUser</button>

      <button onClick={handleClickReset}>Enviar info Redux, resetUser</button>
    </div>
  );
}
