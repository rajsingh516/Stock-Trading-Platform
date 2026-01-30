require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: false
}));

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// DB connect
mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ROUTES
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  if (req.body.mode === "BUY") {
    const existing = await HoldingsModel.findOne({name: req.body.name});
    if (existing) {
      const newQty = existing.qty + req.body.qty;
      const newAvg = (existing.avg * existing.qty + parseFloat(req.body.price) * req.body.qty) / newQty;
      existing.qty = newQty;
      existing.avg = newAvg;
      existing.price = existing.avg * 1.1;
      const pnl = (existing.price - existing.avg) * existing.qty;
      const invested = existing.avg * existing.qty;
      const pnl_percent = invested > 0 ? (pnl / invested) * 100 : 0;
      existing.net = pnl_percent.toFixed(2) + '%';
      await existing.save();
    } else {
      const price = parseFloat(req.body.price) * 1.1;
      const pnl = (price - parseFloat(req.body.price)) * req.body.qty;
      const invested = parseFloat(req.body.price) * req.body.qty;
      const pnl_percent = invested > 0 ? (pnl / invested) * 100 : 0;
      const newHolding = new HoldingsModel({
        name: req.body.name,
        qty: req.body.qty,
        avg: parseFloat(req.body.price),
        price: price,
        net: pnl_percent.toFixed(2) + '%',
        day: "0%",
      });
      await newHolding.save();
    }
  } else if (req.body.mode === "SELL") {
    const existing = await HoldingsModel.findOne({name: req.body.name});
    if (existing) {
      if (existing.qty > req.body.qty) {
        existing.qty -= req.body.qty;
        await existing.save();
      } else {
        await HoldingsModel.deleteOne({name: req.body.name});
      }
    }
  }
  res.send("Order Placed");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});