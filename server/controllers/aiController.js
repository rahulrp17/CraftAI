import axios from "axios";
import Product from "../models/Product.js";
import dotenv from "dotenv";

dotenv.config();

export const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const userMessage = message.toLowerCase();

    // ===============================
    // WOOD CRAFT
    // ===============================
    if (userMessage.includes("wood") || userMessage.includes("wood craft")) {
      const products = await Product.find({
        category: "Wood Craft",
      });

      return res.json({
        success: true,
        type: "products",
        products,
      });
    }

    // ===============================
    // CLAY ART
    // ===============================
    if (userMessage.includes("clay") || userMessage.includes("clay art")) {
      const products = await Product.find({
        category: "Pottery",
      });

      return res.json({
        success: true,
        type: "products",
        products,
      });
    }

    // ===============================
    // HOME DECOR
    // ===============================
    if (
      userMessage.includes("home decor") ||
      userMessage.includes("decor") ||
      userMessage.includes("decoration")||
      userMessage.includes("Home decorations")
    ) {
      const products = await Product.find({
        category: "Home Decor",
      });

      return res.json({
        success: true,
        type: "products",
        products,
      });
    }

    // ===============================
    // PAINTINGS
    // ===============================
    if (
      userMessage.includes("painting") ||
      userMessage.includes("paintings") ||
      userMessage.includes("art")
    ) {
      const products = await Product.find({
        category: "Art & Paintings",
      });

      return res.json({
        success: true,
        type: "products",
        products,
      });
    }

    // ===============================
    // FASHION DESIGN
    // ===============================
    if (
      userMessage.includes("fashion") ||
      userMessage.includes("fashion design") ||
      userMessage.includes("design")||
      userMessage.includes("Fashion Design")||
      userMessage.includes("Design")||
      userMessage.includes("Fashion")
    ) {
      const products = await Product.find({
        category: "Fashion Design",
      });

      return res.json({
        success: true,
        type: "products",
        products,
      });
    }

    // ===============================
    // JEWELLERY
    // ===============================
    if (userMessage.includes("jewellery") || userMessage.includes("jewelry")) {
      const products = await Product.find({
        category: "Jewellery",
      });

      return res.json({
        success: true,
        type: "products",
        products,
      });
    }

    // ===============================
    // GIFTS UNDER ₹1000
    // ===============================
    if (userMessage.includes("gift") || userMessage.includes("under 1000")) {
      const products = await Product.find({
        price: { $lte: 1000 },
      }).limit(10);

      return res.json({
        success: true,
        type: "products",
        products,
      });
    }

    // ===============================
    // ALL PRODUCTS
    // ===============================
    if (
      userMessage.includes("products") ||
      userMessage.includes("show products") ||
      userMessage.includes("all products")||
      userMessage.includes("handmade products")||
      userMessage.includes("Handmade products")||
      userMessage.includes("Handicraft Products")
    ) {
      const products = await Product.find().limit(20);

      return res.json({
        success: true,
        type: "products",
        products,
      });
    }

    // ===============================
    // OPENROUTER FALLBACK
    // ===============================
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/free",
        messages: [
          {
            role: "system",
            content: `


You are CraftAI Assistant.

You help users discover:

* Handmade Gifts
* Home Decor
* Wood Craft
* Clay Art
* Jewellery
* Art & Paintings
* Fashion Design
* Pottery
* clay art


You provide information about products and services for each category.

Keep answers short.
Use bullet points.
Be friendly.
use english.
`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    return res.json({
      success: true,
      reply:
        response.data.choices?.[0]?.message?.content ||
        "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.log(error.response?.data || error);

    return res.status(500).json({
      success: false,
      message: "AI Error",
    });
  }
};
