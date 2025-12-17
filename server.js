const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// 1. Cấu hình để Server hiểu được dữ liệu JSON gửi lên (QUAN TRỌNG)
app.use(express.json());
app.use(express.static('public'));

const mongoURI = process.env.MONGO_URI;

const SinhVienSchema = new mongoose.Schema({
    ten: String,
    mssv: String,
    lop: String
});
const SinhVien = mongoose.model('SinhVien', SinhVienSchema);

mongoose.connect(mongoURI).then(() => console.log("✅ DB Connected"))
    .catch(err => console.log(err));

// --- CÁC API ---

// 1. Lấy danh sách
app.get('/api/sinhvien', async (req, res) => {
    const data = await SinhVien.find().sort({_id: -1}); // Lấy mới nhất lên đầu
    res.json(data);
});

// 2. Thêm sinh viên mới (POST)
app.post('/api/sinhvien', async (req, res) => {
    try {
        const svMoi = new SinhVien(req.body);
        await svMoi.save(); // Lưu vào MongoDB thật
        res.json({ success: true, data: svMoi });
    } catch (e) {
        res.status(500).json({ error: "Lỗi lưu dữ liệu" });
    }
});

// 3. Xóa sinh viên (DELETE)
app.delete('/api/sinhvien/:id', async (req, res) => {
    try {
        await SinhVien.findByIdAndDelete(req.params.id); // Xóa khỏi MongoDB thật
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: "Lỗi xóa dữ liệu" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});