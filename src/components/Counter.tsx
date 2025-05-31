import { useCounter } from "./hooks/useCounter"; // Importar el custom hook

export const Counter = () => {
  const { count, increaseBy } = useCounter(); // Desestructurar el custom hook

  return (
    <>
      <h3>
        Contador: <small>{count}</small>{" "}
      </h3>

      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>

        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  );
};
