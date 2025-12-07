import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState("GEL");

    const switchCurrency = () => {
        setCurrency(current => (current === "USD" ? "GEL" : "USD"));
    };

    return (
        <CurrencyContext.Provider value={{ currency, switchCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyProvider;
