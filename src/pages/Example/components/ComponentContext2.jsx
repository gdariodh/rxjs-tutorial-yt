import { useExampleContext } from "../context/example.context";

export default function ComponentContext2() {
  const { exampleContextValue } = useExampleContext();

  return (
    <div>
      <p>El value es: {exampleContextValue}</p>
    </div>
  );
}
