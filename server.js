const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Bai Thi CI/CD</title></head>
      <body style="text-align: center; padding-top: 50px;">
        <h1 style="color: blue;">Xin chào! Đây là Project 1</h1>
        <p>Phiên bản: V1 - Chạy trên Render</p>
        <p>Người thực hiện: [Tên Của Bạn]</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server dang chay tai port ${port}`);
});