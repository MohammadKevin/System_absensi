import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
try {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(req.params.id) },
    });

    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
try {
    const { name, username, password } = req.body;

    const existingUser = await prisma.user.findUnique({
        where: { username },
    });
    if (existingUser) {
        return res.status(400).json({ message: "Username sudah terdaftar" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            username,
            password: hashedPassword,
            role: "siswa",
        },
    });

    res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
try {
    const user = await prisma.user.update({
        where: { id: parseInt(req.params.id) },
        data: req.body,
    });
    res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
try {
    const user = await prisma.user.delete({
        where: { id: parseInt(req.params.id) },
    });
    res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};