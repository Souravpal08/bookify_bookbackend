const express = require("express");
const { createOrder,getOrdersByEmail } = require( "./order.controller");
const { get } = require("mongoose");
const { deleteOrder } = require("./order.controller");

const router = express.Router();

//create a new order endpoint
router.post("/", createOrder);

// get orders by userEmail
router.get("/email/:email", getOrdersByEmail);

//delete an order by ID
router.delete("/:orderId", deleteOrder);





module.exports = router;