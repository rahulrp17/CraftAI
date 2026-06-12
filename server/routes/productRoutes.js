import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", authMiddleware, createProduct);
router.delete("/:id", authMiddleware, deleteProduct);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updateProduct
);
router.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
    try {
      console.log("File:", req.file);

      res.json({
        success: true,
        imageUrl: req.file.path,
      });
    } catch (error) {
      console.error("UPLOAD ERROR:", error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);
export default router;