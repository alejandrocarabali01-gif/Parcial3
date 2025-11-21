import { Request, Response } from "express";
import { users } from "../models/user.model";

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Credenciales incorrectas" });
  }

  res.json({
    message: "Inicio de sesión exitoso",
    userId: user.id
  });
};
