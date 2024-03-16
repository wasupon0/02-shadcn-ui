import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  title: { type: String },
  image: { type: String },
  time: { type: Number },
  description: { type: String },
  vegan: { type: Boolean },
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
