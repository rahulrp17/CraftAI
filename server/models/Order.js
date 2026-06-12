import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: String,
    phone: String,
    address: String,

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    quantity: Number,

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);