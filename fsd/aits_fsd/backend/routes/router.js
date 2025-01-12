import express from "express";
import {
  addRecipes,
  deleteRecipes,
  getRicpes,
  getRicpesById,
  updateRecipes,
} from "../controller/recipeController.js";

const router = express.Router();

router.get("/recipes", getRicpes);
router.get("/recipes/:id", getRicpesById);
router.post("/recipes", addRecipes);
router.put("/recipes/:id", updateRecipes);
router.delete("/recipes/:id", deleteRecipes);

router.all("*", (req, res, next) => {
  res.send("No Page Found");
  next();
});

export default router;
