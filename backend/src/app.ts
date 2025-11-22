import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.routes";
import transactionsRoutes from "./routes/transaction.routes";
const swaggerDocument = require("./swagger/swagger.json");

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionsRoutes);


app.get("/", (req, res) => {
  res.redirect("/api-docs");
});


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;

