import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, logout, user } =
    useAuthContext();

  if (isChecking) {
    return <h1>Verificando usuario</h1>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>

          <button onClick={() => logout()}>Salir</button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicación</h3>

          <button
            onClick={() => loginWithEmailPassword("Miguel@gmail.com", "123456")}
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};
