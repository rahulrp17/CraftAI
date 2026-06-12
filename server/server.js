import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";


dotenv.config();

connectDB();

const app = express();


app.use(cors());

app.use(cookieParser(process.env.COOKIE_SECRET || "your-secret-key"));

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.get("/", (req, res) => {
  res.send("CraftAI API Running...");
});
app.use("/api/ai", aiRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on ${PORT}`)
);  
// console.log("Mongo URI:", process.env.MONGO_URI);

// console.log("Cloud Name:", process.env.CLOUDINARY_NAME);
// console.log("API Key:", process.env.CLOUDINARY_KEY);
// console.log("API Secret:", process.env.CLOUDINARY_SECRET);