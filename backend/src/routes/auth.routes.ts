import { Router, Request, Response } from "express";

// Local login handler to avoid missing controller module; replace with actual controller export later.
const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
	return res.status(400).json({ message: "Missing username or password" });
  }

  // TODO: replace with real authentication logic
  return res.status(200).json({ message: "Logged in", user: { username } });
};

const router = Router();

router.post("/login", login);

export default router;
