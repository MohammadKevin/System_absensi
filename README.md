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
![Struktur Folder](./dokumentasi/struktur%20folder.png)

### 2️⃣ Add User (POST)
![Add User](./dokumentasi/end%20point%20add%20users.png)

### 3️⃣ Presensi Siswa (POST)
![Presensi Siswa](./dokumentasi/end%20point%20add%20presensi.png)

### 4️⃣ Analisis Kehadiran
![Analysis](./dokumentasi/end%20point%20kehadiran.png)

### 5️⃣ Rekap Kehadiran Bulanan
![Summary](./dokumentasi/summary.png)

### 6️⃣ Login
![Login User](./dokumentasi/end%20point%20login%20users.png)

---

## Kesimpulan
Program ini merupakan implementasi **sistem absensi digital sederhana** yang menggunakan Node.js dan Prisma ORM sebagai pengelola data.
Dengan struktur modular berbasis controller dan route, aplikasi ini mudah dikembangkan menjadi sistem presensi yang lebih kompleks dan efisien.
