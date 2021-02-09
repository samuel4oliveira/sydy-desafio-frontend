import { observer } from "mobx-react-lite";
import store from "../../store/store";
import translator from "../../common/getTranslation";
import { nanoid } from "nanoid";
import "./currency-table.css";
import React from "react";

interface Currency {
    [key: string]: {
        code: string;
        description: string;
        rate: string;
        rate_float: number;
        symbol: string;
    };
}

const CurrencyTable: React.FC = () => {
    let tableHead: string[] = [];
    let tableData: string[] = [];
    if (store.currencyState === "fetched") {
        const currencies: Currency = store.currencyData;
        for (const key in currencies) {
            tableHead.push(translator(key).name);
            tableData.push(
                `${translator(key).symbol}
                ${new Intl.NumberFormat("de-DE").format(currencies[key].rate_float)}`
            );
        }
    } else if (store.currencyState === "fetching") {
        return <h2>Carregando</h2>;
    } else if (store.currencyState == "error") {
        return <h2>Erro</h2>;
    }

    return (
        <div className="CurrencyTable">
            <table>
                <thead>
                    <tr>
                        {tableHead.map((th) => (
                            <th key={nanoid()}>{th}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {tableData.map((td) => (
                            <td key={nanoid()}>{td}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default observer(CurrencyTable);
