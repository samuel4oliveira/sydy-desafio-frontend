import { makeAutoObservable } from "mobx";

class Store {
    currencyData = {};
    historicalData = {};
    currencyState = "fetching";
    historicalState = "fetching";

    constructor() {
        makeAutoObservable(this);
    }

    setCurrencyData(data: {}) {
        this.currencyData = data;
    }

    setHistoricalData(data: {}) {
        this.historicalData = data;
    }

    setCurrencyState(newState: string) {
        this.currencyState = newState;
    }

    setHistoricalState(newState: string) {
        this.historicalState = newState;
    }
}

const store = new Store();

export default store;
