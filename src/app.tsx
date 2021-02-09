import CurrencyTable from "./components/currency-table";
import CurrencyChart from "./components/currency-chart";
import useFetch from "./hooks/useFetch";
import React from "react";
import "./app.css";

const App: React.FC = () => {
    useFetch();
    return (
        <div className="App">
            <h1>₿ITCOIN</h1>
            <CurrencyTable />
            <CurrencyChart />
            <a href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a>
        </div>
    );
};

export default App;
