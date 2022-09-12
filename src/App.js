import "./App.css";
import { React, Suspense, lazy, useState, createContext } from "react";
import Spinner from "./components/Spinner";

const MenuNavbar = lazy(() => import("./components/MenuNavbar"));
const RouterMain = lazy(() => import("./components/RouterMain"));
const Footer = lazy(() => import("./components/Footer"));

export const Context = createContext();

function App() {
  const [walletAddress, setwalletAddress] = useState("");
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Context.Provider value={[walletAddress, setwalletAddress]}>
          <MenuNavbar />
          <RouterMain />
        </Context.Provider>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
