import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import presensiRoutes from "./routes/presensi.routes.js";
import kehadiranRoute from "./routes/kehadiran.routes.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/presensi", presensiRoutes);
app.use("/api/kehadiran", kehadiranRoute);  

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
