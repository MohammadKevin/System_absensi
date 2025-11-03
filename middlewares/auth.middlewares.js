import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "latihan_ukl";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "Token tidak ditemukan" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token tidak valid atau sudah kedaluwarsa" });
  }
};