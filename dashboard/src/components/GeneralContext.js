import React,{useState, useEffect} from "react";
import axios from "axios";
import { watchlist } from "../data/data";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid, mode) => {},
    closeBuyWindow: () => {},
    holdings: [],
    refreshHoldings: () => {},
    watchlist: [],
    addToWatchlist: (stock) => {},
});
export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStock, setSelectedStock] = useState({uid: "", mode: ""});
    const [holdings, setHoldings] = useState([]);
    const invested = holdings.reduce((sum, h) => sum + (h.avg ?? 0) * (h.qty ?? 0), 0);
    const availableMargin = Math.max(0, 10000000 - invested);
    const [watchlistData, setWatchlistData] = useState(watchlist);
    const fetchHoldings = async () => {
        try {
            const res = await axios.get("http://localhost:3002/allHoldings");
            setHoldings(res.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchHoldings();
    }, []);
    const handleOpenBuyWindow = (uid, mode) => {
        setIsBuyWindowOpen(true);
        setSelectedStock({uid, mode});
    };
    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStock({uid: "", mode: ""});
    };
    const addToWatchlist = (stock) => {
        setWatchlistData(prev => [...prev, stock]);
    };
    const removeFromWatchlist = (name) => {
        setWatchlistData(prev => prev.filter(s => s.name !== name));
    };
    const updateWatchlistPrice = (name, price) => {
        setWatchlistData(prev => prev.map(s => s.name === name ? {...s, price} : s));
    };
    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                holdings,
                refreshHoldings: fetchHoldings,
                invested,
                availableMargin,
                watchlist: watchlistData,
                addToWatchlist,
                removeFromWatchlist,
                updateWatchlistPrice,
            }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow stock={selectedStock} />}
        </GeneralContext.Provider>
    );
};
export default GeneralContext;