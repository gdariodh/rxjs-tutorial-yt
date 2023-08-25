import React from "react";
import { useSelector } from "react-redux";

export default function ComponentRedux2() {
  const { user } = useSelector((store) => store);

  return <div>El state del user es: {JSON.stringify(user)}</div>;
}
