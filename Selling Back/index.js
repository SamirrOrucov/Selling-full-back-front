import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from 'cors'
const { Schema } = mongoose;
const app = express();
app.use(express.json());
app.use(cors())

const shopSchema = new Schema({
  image: String,
  title: String,
  description: String,
});
const ShopModel = mongoose.model("ShopModel", shopSchema);

app.get("/", async(req, res) => {
  try {
    const shop =await ShopModel.find({});
    res.send(shop);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/:id",async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await ShopModel.findById(id);

    res.send(shop);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { image, title, description } = req.body;
    const shop = new ShopModel({ image, title, description });
    await shop.save();
    res.send("Got a POST request");
  } catch (error) {
    res.send(error.message);
  }
});



app.delete("/:id",async (req, res) => {
  try {
    const { id } = req.params;
    const shop =await ShopModel.findByIdAndDelete(id);
    res.send("Got a DELETE request at /user");
  } catch (error) {
    res.send(error.message);
  }
});
mongoose
  .connect(process.env.DB_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
