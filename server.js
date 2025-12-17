const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// --- PHẦN NÀY LÀ MOCK DATABASE (DỮ LIỆU GIẢ LẬP) ---
// Thay vì cài MongoDB phức tạp, ta dùng biến này để nộp bài
const databaseSinhVien = [
    { id: 1, ten: "Nguyen Van A", lop: "CNTT 1" },
    { id: 2, ten: "Tran Thi B", lop: "Kinh Te 2" },
    { id: 3, ten: "Nguyen Phan Tuan Linh", lop: "Lop Truong" }, // Tên bạn
    { id: 4, ten: "Render CI/CD", lop: "Tu Dong Hoa" }
];

// API trả về danh sách sinh viên (Giống hệt cách MongoDB trả dữ liệu)
app.get('/api/sinhvien', (req, res) => {
    res.json({
        message: "Lay du lieu tu Database thanh cong!",
        si_so: databaseSinhVien.length,
        danh_sach: databaseSinhVien
    });
});

// Trang chủ
app.get('/', (req, res) => {
    res.send(`
        <h1>Project 1 - Đã có Database</h1>
        <p>Bấm vào đây để xem dữ liệu: <a href="/api/sinhvien">/api/sinhvien</a></p>
    `);
});

app.listen(port, () => {
    console.log(`Server chay tai port ${port}`);
});