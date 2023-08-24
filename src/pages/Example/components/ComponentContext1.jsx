import { useExampleContext } from "../context/example.context";

export default function ComponentContext1() {
  const { setExampleContextValue } = useExampleContext();

  const handleClick = () => {
    setExampleContextValue("Hola, soy un value enviado por context");
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar Info por context</button>
    </div>
  );
}
