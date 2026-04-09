import React,{useState, useContext} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({stock}) => {
    const {uid, mode} = stock;
    const { closeBuyWindow, refreshHoldings, watchlist, addToWatchlist, removeFromWatchlist, updateWatchlistPrice } = useContext(GeneralContext);
    const [stockQuantity, setStockQuanity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const handleBuyClick =  () => {
        axios.post("http://localhost:3002/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: mode,
        }).then(() => {
            refreshHoldings();
            if (mode === "BUY") {
                const existing = watchlist.find(s => s.name === uid);
                if (existing) {
                    updateWatchlistPrice(uid, stockPrice);
                } else {
                    addToWatchlist({name: uid, price: stockPrice, percent: "0%", isDown: false});
                }
            } else if (mode === "SELL") {
                removeFromWatchlist(uid);
            }
            closeBuyWindow();
        });
    };
    const handleCancelClick = () => {
        closeBuyWindow();
    };
    return (
        <div className="containerClass" id="buy-window" draggable="true">
            <div className="regular-rder">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty</legend>
                        <input type="number" name="qty" id="qty" onChange={(e) => setStockQuanity(e.target.value)} value={stockQuantity}/>
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" id="price" step="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice}/>
                    </fieldset>
                </div>
            </div>
            <div className="buttons">
                <span>Margin required $140.65</span>
                <div>
                    <span className="btn btn-blue" onClick = {handleBuyClick}>{mode}</span>
                    <span className="btn btn-grey" onClick={handleCancelClick}>Cancel</span>
                </div>
            </div>
        </div>
    );
};
export default BuyActionWindow;