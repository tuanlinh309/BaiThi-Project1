# 1. Chọn hệ điều hành nền (Node.js phiên bản 18 gọn nhẹ)
FROM node:18-alpine

# 2. Tạo thư mục làm việc trong container
WORKDIR /app

# 3. Copy file định nghĩa thư viện vào trước
COPY package*.json ./

# 4. Cài đặt thư viện
RUN npm install

# 5. Copy toàn bộ code còn lại vào
COPY . .

# 6. Mở cổng 3000
EXPOSE 3000

# 7. Lệnh chạy server khi container khởi động
CMD ["node", "server.js"]