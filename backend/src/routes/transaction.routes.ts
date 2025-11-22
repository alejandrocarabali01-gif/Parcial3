import { Router } from "express";

const router = Router();

// Transacciones
router.get("/", (req, res) => res.json({ msg: "Lista de transacciones" }));
router.post("/", (req, res) => res.json({ msg: "Transacción creada" }));
router.get("/:id", (req, res) => res.json({ msg: "Detalle de transacción" }));
router.put("/:id", (req, res) => res.json({ msg: "Transacción actualizada" }));
router.delete("/:id", (req, res) => res.json({ msg: "Transacción eliminada" }));

// Reportes
router.get("/report/daily", (req, res) => res.json({ msg: "Reporte diario" }));
router.get("/report/monthly", (req, res) => res.json({ msg: "Reporte mensual" }));
router.get("/report/category", (req, res) => res.json({ msg: "Reporte por categoría" }));

// Estadísticas
router.get("/stats/totals", (req, res) => res.json({ msg: "Totales" }));
router.get("/stats/summary", (req, res) => res.json({ msg: "Resumen" }));

export default router;
