import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransanctionList from "./components/TransanctionList";
import AddTransanction from "./components/AddTransanction";
import { GlobalProvider } from "./context/globalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransanctionList/>
        <AddTransanction/>
      </div>
    </GlobalProvider>
  );
};

export default App;
