# 🧾 System Presensi

## Deskripsi
Aplikasi Presensi Online adalah REST API berbasis **Node.js** dan **Prisma ORM** yang digunakan untuk mencatat serta menganalisis kehadiran siswa secara digital.  
API ini memiliki fitur untuk **menambahkan user**, **mencatat presensi (Hadir, Izin, Sakit, Alpa)**, dan **melihat analisis serta rekap kehadiran bulanan**.  

---

## Identitas
**Nama:** Mohammad Kevin Arif Rudianto
**Kelas:** XI RPL 3
**Mapel:** Produktif

---

## Teknologi yang Digunakan
- Node.js
- Express.js
- Prisma ORM
- MySQL
- Dotenv (untuk konfigurasi environment)
- Nodemon (untuk auto-restart server saat development)

---

## Fitur Program
- Tambah User (role default: siswa)
- Input Presensi (status: Hadir, Izin, Sakit, Alpa)
- Analisis Kehadiran Berdasarkan Periode (kelas atau jabatan)
- Rekap Kehadiran Bulanan

---

## Cara Menjalankan Program
1. Clone repository dari GitHub:
   ```bash
   git clone https://github.com/MohammadKevin/System_absensi
   ```
2. Masuk ke folder project:
   ```bash
   cd SYSTEM-PRESENSI
   ```
3. Install semua dependency:
   ```bash
   npm install
   ```
4. Buat file `.env` berisi konfigurasi database:
   ```
   DATABASE_URL="mysql://root:@localhost:3306/system_presensi"
   ```
5. Jalankan migrasi Prisma:
   ```bash
   npx prisma migrate dev
   ```
6. Jalankan server:
   ```bash
   npm run dev
   ```
7. Akses API di:
   ```
   http://localhost:5000/api/
   ```

---

## Dokumentasi Program

### 1️⃣ Struktur Folder
<img width="299" height="595" alt="struktur folder" src="https://github.com/user-attachments/assets/7115f5c8-9202-4393-82bd-a4f432171b81" />

### 2️⃣ Add User (POST)
<img width="1919" height="1079" alt="end point add users" src="https://github.com/user-attachments/assets/76abc662-49d5-48f3-a904-cf714187340c" />

### 3️⃣ Presensi Siswa (POST)
<img width="1919" height="1079" alt="end point add presensi" src="https://github.com/user-attachments/assets/0a4405e5-d37c-4e5e-a3be-9231969d2c8c" />

### 4️⃣ Analisis Kehadiran
<img width="1919" height="1079" alt="end point kehadiran" src="https://github.com/user-attachments/assets/f0a5374c-d9e0-48d9-be32-87f8f4cc1f6f" />

### 5️⃣ Rekap Kehadiran Bulanan
<img width="1919" height="1079" alt="summary" src="https://github.com/user-attachments/assets/653df765-fb75-4729-8871-a93d9627cc68" />

### 6️⃣ Login
<img width="1917" height="1077" alt="end point login users" src="https://github.com/user-attachments/assets/f9455066-e191-4200-9818-5235870d47d1" />

---

## Kesimpulan
Program ini merupakan implementasi **sistem absensi digital sederhana** yang menggunakan Node.js dan Prisma ORM sebagai pengelola data.
Dengan struktur modular berbasis controller dan route, aplikasi ini mudah dikembangkan menjadi sistem presensi yang lebih kompleks dan efisien.
