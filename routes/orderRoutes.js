//routes/orderRouttes.js
const express = require("express");
const { placeOrder, getUserOrders, updateOrderStatus } = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");

const orderRouter = express.Router();

// User places an order
orderRouter.post("/place", authMiddleware, placeOrder);

// User can view their orders
orderRouter.get("/my-orders", authMiddleware, getUserOrders);

// Admin updates order status
orderRouter.patch("/update-status/:orderId", authMiddleware, updateOrderStatus);

module.exports = orderRouter;
