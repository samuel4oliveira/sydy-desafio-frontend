import { observer } from "mobx-react-lite";
import { Line } from "react-chartjs-2";
import store from "../../store/store";
import "./currency-chart.css";
import React from "react";

interface HistoricalCurrency {
    [key: string]: number;
}

const CurrencyChart: React.FC = () => {
    let dates: string[] = [];
    let bitcoinValues: number[] = [];

    if (store.historicalState === "fetched") {
        const historicalCurrency: HistoricalCurrency = store.historicalData;
        for (const key in historicalCurrency) {
            dates.push(key);
            bitcoinValues.push(historicalCurrency[key]);
        }
    } else if (store.historicalState === "fetching") {
        return <h2>Carregando</h2>;
    } else if (store.historicalState == "error") {
        return <h2>Erro</h2>;
    }

    const chartData = {
        labels: dates,
        datasets: [
            {
                label: "Preço do Bitcoin em dólar.",
                data: bitcoinValues,
                borderColor: "#C04159",
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        legend: {
            position: "bottom",
        },
    };

    return (
        <div className="CurrencyChart">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default observer(CurrencyChart);
