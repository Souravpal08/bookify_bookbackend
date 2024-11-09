const Order = require('./order.model');


const createOrder = async(req, res)=>{

    try {
        //create a new order
        const newOrder= await Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

        
    } catch (error) {
        console.error("Unexpected error to place order",error);
        res.status(500).json({error:"Unexpected error to place order"});
    }

}

const getOrdersByEmail = async(req, res)=>{
    try {
        //get orders by email
        const {email} = req.params;
        const orders = await Order.find({email:email}).sort({createdAt:-1});
        if(!orders) return res.status(404).json({error:"No orders found"});
        res.status(200).json(orders);

    }
    catch (error) {
        console.error("Unexpected error to get orders by email",error);
        res.status(500).json({error:"Unexpected error to get orders by email"});
    }
}

// Controller function to delete an order by ID
const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete the order", error });
  }
};


module.exports = {createOrder, getOrdersByEmail, deleteOrder};