const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Lấy chuỗi kết nối từ biến môi trường Render (Cho bảo mật)
// Nếu chạy dưới máy local thì nó sẽ tìm biến này, nếu không có sẽ lỗi (nhưng ta test trên Render là chính)
const mongoURI = process.env.MONGO_URI; 

// 1. Khai báo kiểu dữ liệu (Schema)
const SinhVienSchema = new mongoose.Schema({
    ten: String,
    mssv: String,
    lop: String
});
// Tạo Model
const SinhVien = mongoose.model('SinhVien', SinhVienSchema);

// 2. Kết nối Database
mongoose.connect(mongoURI)
    .then(async () => {
        console.log("✅ Đã kết nối MongoDB Atlas thành công!");
        
        // Code tự động tạo dữ liệu mẫu nếu Database đang rỗng
        const count = await SinhVien.countDocuments();
        if (count === 0) {
            await SinhVien.create([
                { ten: "Nguyen Phan Tuan Linh", mssv: "HE150000", lop: "KTPM" },
                { ten: "Demo MongoDB Atlas", mssv: "DB001", lop: "Cloud" },
                { ten: "Test Tu Dong", mssv: "AUTO", lop: "CI/CD" }
            ]);
            console.log("✅ Đã tạo dữ liệu mẫu!");
        }
    })
    .catch(err => console.log("❌ Lỗi kết nối:", err));

// 3. API lấy danh sách
app.get('/api/sinhvien', async (req, res) => {
    try {
        const data = await SinhVien.find();
        res.json({
            nguon_du_lieu: "MongoDB Atlas (Cloud Real)",
            so_luong: data.length,
            danh_sach: data
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Trang chủ
app.get('/', (req, res) => {
    res.send(`
        <h1>Project 1 - MongoDB Atlas</h1>
        <p>Kết nối thành công tới Cluster0!</p>
        <p>Xem dữ liệu tại: <a href="/api/sinhvien">/api/sinhvien</a></p>
    `);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});