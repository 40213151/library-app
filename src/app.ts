import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "HW" });
});

app.listen(PORT, () => console.log("SIR"));
