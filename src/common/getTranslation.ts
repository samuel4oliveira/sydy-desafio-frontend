interface Translate {
    [key: string]: {
        name: string;
        symbol: string;
    };
}

const translator = (key: string) => {
    const translate: Translate = {
        EUR: { name: "Euro", symbol: "€" },
        USD: { name: "Dólar", symbol: "$" },
        GBP: { name: "Libra Esterlina", symbol: "£" },
    };
    const { name, symbol } = translate[key];
    return { name, symbol };
};

export default translator;
