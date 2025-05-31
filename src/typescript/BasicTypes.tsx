export const BasicTypes = () => {
  const name: string = "Miguel"; // Es conveniente poner el tipo de dato
  const age: number = 32;
  const isActive: boolean = true;

  const powers: string[] = ["React", "ReactNative", "Astro"]; // Evitar usar tipo any

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? "Activo" : "Inactivo"}
      <p>{powers.join(", ")}</p>
    </>
  );
};
