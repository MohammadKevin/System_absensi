import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAttendanceSummary = async (req, res) => {
try {
    const { userId } = req.params;
    const { month } = req.query;

    if (!month)
        return res.status(400).json({
            status: "error",
            message: "Parameter 'month' (format: YYYY-MM) wajib diisi",
        });

    const start = new Date(`${month}-01T00:00:00Z`);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);

    const attendances = await prisma.attendance.findMany({
        where: {
            userId: Number(userId),
            date: {
            gte: start,
            lt: end,    
            },
        },
    });

    const summary = {
        HADIR: attendances.filter(a => a.status.toUpperCase() === "HADIR").length,
        IZIN: attendances.filter(a => a.status.toUpperCase() === "IZIN").length,
        SAKIT: attendances.filter(a => a.status.toUpperCase() === "SAKIT").length,
        ALPA: attendances.filter(a => a.status.toUpperCase() === "ALPA").length,
    };

    res.status(200).json({
        status: "success",
        data: {
            userId: Number(userId),
            month,
            attendance_summary: summary,
        },
    });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const analysisAttendance = async (req, res) => {
try {
    const { start_date, end_date, group_by } = req.body;

    if (!start_date || !end_date) {
        return res.status(400).json({
            status: "error",
            message: "start_date dan end_date wajib diisi",
        });
    }

    const attendances = await prisma.attendance.findMany({
        where: {
            date: {
            gte: new Date(start_date),
            lte: new Date(end_date),
            },
        },
        include: {
            user: {
            select: {
                name: true,
                username: true,
                role: true,
            },
            },
        },
    });

    if (attendances.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "Tidak ada data kehadiran pada periode tersebut",
        });
    }

    const grouped = {};
    for (const record of attendances) {
        const groupKey =
            group_by === "kelas"
            ? record.user.class || "Tidak ada kelas"
            : record.user.role || "Tidak ada jabatan";

        if (!grouped[groupKey]) {
        grouped[groupKey] = {
            total_users: new Set(),
            total: { HADIR: 0, IZIN: 0, SAKIT: 0, ALPA: 0 },
        };
    }

        grouped[groupKey].total_users.add(record.user.username);
        grouped[groupKey].total[record.status] =
            (grouped[groupKey].total[record.status] || 0) + 1;
    }

    const analysisResult = Object.entries(grouped).map(([group, data]) => {
        const total = Object.values(data.total).reduce((a, b) => a + b, 0);
        const rate = {
            HADIR: (data.total.hadir / total) * 100 || 0,
            IZIN: (data.total.izin / total) * 100 || 0,
            SAKIT: (data.total.sakit / total) * 100 || 0,
            ALPA: (data.total.alpa / total) * 100 || 0,
        };

        return {
            group,
            total_users: data.total_users.size,
            attendance_rate: rate,
            total_attendance: data.total,
        };
    });

    res.status(200).json({
        status: "success",
        data: {
            analysis_period: { start_date, end_date },
            group_by,
            grouped_analysis: analysisResult,
        },
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: error.message });
    }
};