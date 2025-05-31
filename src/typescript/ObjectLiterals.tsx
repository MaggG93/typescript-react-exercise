interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address; // El objeto address es de tipo Address
}

interface Address {
  country: string;
  houseNo: string;
  street?: string; // El ? indica que es opcional
}

export const ObjectLiterals = () => {
  const person: Person = {
    // El objeto person es de tipo Person
    age: 32,
    firstName: "Miguel",
    lastName: "González",
    address: {
      country: "España",
      houseNo: "123",
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
