import Product from "../models/Product.js";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (
    email === "admin@craftai.com" &&
    password === "admin123"
  ) {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      success: true,
      token,
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Credentials",
  });
};


export const getStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    const totalStockResult = await Product.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$stock" },
        },
      },
    ]);

    const categoryStats = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      success: true,
      stats: {
        totalProducts,
        totalStock: totalStockResult[0]?.total || 0,
        categoryStats,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch stats",
    });
  }
};