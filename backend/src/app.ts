import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("./swagger/swagger.json");

const app = express();

app.use(express.json());
app.use(cors());

// 👉 Redirigir la ruta raíz hacia Swagger
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// Documentación Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
