const addTwoNumbers = (a: number, b: number): string => {
  // Tipar los parámetros y el valor de retorno
  return `${a + b}`; // El valor de retorno es un string
};

export const BasicFunctions = () => {
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar 2 + 8 = {addTwoNumbers(2, 8)} </span>
    </>
  );
};
