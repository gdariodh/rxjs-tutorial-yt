import ComponentContext1 from "./components/ComponentContext1";
import ComponentContext2 from "./components/ComponentContext2";
import { ExampleProvider } from "./context/example.context";

export default function Example() {
  return (
    <div>
      <ExampleProvider>
        <ComponentContext1 />
        <ComponentContext2 />
      </ExampleProvider>
    </div>
  );
}
