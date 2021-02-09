import store from "../store/store";
import getDateInterval from "../common/getDateInterval";
import { useEffect } from "react";

const useFetch = () => {
    useEffect(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => response.json())
            .then((data) => store.setCurrencyData(data.bpi))
            .then(() => store.setCurrencyState("fetched"))
            .catch(() => {
                store.setCurrencyState("error");
            });

        const { startDate, endDate } = getDateInterval(7);
        fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
            .then((response) => response.json())
            .then((data) => store.setHistoricalData(data.bpi))
            .then(() => store.setHistoricalState("fetched"))
            .catch(() => {
                store.setHistoricalState("error");
            });
    }, []);
};

export default useFetch;
