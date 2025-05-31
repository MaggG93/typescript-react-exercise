import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

enum AuthStatus {
  checking = "checking",
  authenticated = "authenticated",
  unauthenticated = "unauthenticated",
}

interface AuthtState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  // Métodos
  loginWithEmailPassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthtState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  const loginWithEmailPassword = (email: string, password: string) => {
    console.log(password);
    setUser({
      name: "Miguel",
      email: email,
    });
    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined); // Limpiamos el usuario
    setStatus(AuthStatus.unauthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,

        // Getter
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        // Tomar métodos fuera del contexto
        // Método para iniciar sesión
        loginWithEmailPassword,

        // Método para cerrar sesión
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
