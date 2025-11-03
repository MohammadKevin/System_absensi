import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllAttendance = async (req, res) => {
    try {
        const Attendance = await prisma.Attendance.findMany();
        res.status(200).json(Attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAttendanceById = async (req, res) => {
    try {
        const Attendance = await prisma.Attendance.findUnique({
            where: { id: parseInt(req.params.id) },
        });
        res.status(200).json(Attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createAttendance = async (req, res) => {
    try {
        const { userId, date, time, status } = req.body;
        const Attendance = await prisma.Attendance.create({
            data: {
                userId : parseInt(userId),
                date : new Date(date),
                time,
                status,
            },
        });
        res.status(201).json({
            message: "Attendance berhasil dibuat",
            Attendance,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

export const updateAttendance = async (req, res) => {
    try {
        const Attendance = await prisma.Attendance.update({
            where: { id: parseInt(req.params.id) },
            data: req.body,
        });
        res.status(200).json(Attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAttendance = async (req, res) => {
    try {
        const Attendance = await prisma.Attendance.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.status(200).json(Attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};