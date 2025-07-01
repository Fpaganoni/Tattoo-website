"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticator = (req, res, next) => {
    const { token } = req.headers;
    if (token === "authenticated")
        next();
    else {
        res.status(400).json({ message: "Please Sign-up or Log-in" });
    }
};
exports.default = authenticator;
