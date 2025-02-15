import { Request, Response } from "express";

const STATIC_USER = {
  username: "teacher",
  password: "123456",
};

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === STATIC_USER.username && password === STATIC_USER.password) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
