import "./App.css";
import { FormsPage } from "./components/FormsPage";
// import { UsersPage } from "./components/UsersPage";
// import { LoginPage } from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";
// import { Counter } from "./components/Counter";
// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { BasicTypes } from "./typescript/BasicTypes";

function App() {
  return (
    <AuthProvider>
      <div>
        <h1>React + TS</h1>

        {/*<BasicTypes />*/}
        {/*<ObjectLiterals />*/}
        {/*<BasicFunctions />*/}
        {/*<Counter />*/}
        {/*{<LoginPage />}*/}
        <FormsPage />
      </div>
    </AuthProvider>
  );
}

export default App;
