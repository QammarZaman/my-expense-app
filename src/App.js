import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Balance } from "./components/Balance";
import { Incomexpenses } from "./components/incomexpenses";
import { Trancsactionlist } from "./components/Trancsactionlist";
import { AddTransactions } from "./components/AddTransactions";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Incomexpenses />
        <Trancsactionlist />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
