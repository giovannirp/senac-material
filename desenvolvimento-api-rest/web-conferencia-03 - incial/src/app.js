import express from "express";
const app = express();

// indicar para express ler body com json
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Testando API");
  });

export default app;