import { useState } from "react"; // Hook para manejar el estado

export const useCounter = () => {
  const [count, setCount] = useState(10);

  const increaseBy = (value: number) => {
    // setCount(count + value);
    // setCount((current) => current + value);
    setCount(Math.max(value + count, 0)); // Limitar el contador a 0
  };

  return {
    // Propiedades
    count,
    // Acciones
    increaseBy,
  };
};
