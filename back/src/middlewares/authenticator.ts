import { NextFunction, Request, Response } from "express";

const authenticator = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;

  if (token === "authenticated") next();
  else {
    res.status(400).json({ message: "Please Sign-up or Log-in" });
  }
};

export default authenticator;
