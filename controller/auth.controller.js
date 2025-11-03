import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const login = async (req, res) => {
try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
        where: { username },
    });
    if (!user) {
        return res.status(401).json({ message: "Username atau password salah" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Username atau password salah" });
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "5d" }
    );

    res.status(200).json({
        message: "Login berhasil",
        token: `Bearer ${token}`,
        user: {
            id: user.id,
            name: user.name,
            username: user.username,
            role: user.role,
        },
    });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};