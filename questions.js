const fullQuestionBank = [
    // ========================================================================
    // PHẦN 1: TỔNG QUAN, LÝ THUYẾT & 7 NGUYÊN TẮC KIỂM THỬ (17 CÂU)
    // ========================================================================
    { q: "Kiểm thử phần mềm là quá trình thực thi một chương trình với mục đích là tìm ra lỗi. Đây là định nghĩa của ai?", opts: ["Glen Myers", "ANSI/IEEE", "Dijkstra", "Beizer"], ans: 0 },
    { q: "Theo Dijkstra, kiểm thử phần mềm giúp tìm ra sự hiện diện của lỗi nhưng không thể chỉ ra...", opts: ["Nguyên nhân của lỗi", "Sự vắng mặt của lỗi", "Cách khắc phục lỗi", "Thời điểm xảy ra lỗi"], ans: 1 },
    { q: "Sự khác biệt chính giữa Verification (Xác minh) và Validation (Thẩm định) là gì?", opts: ["Verification là làm đúng sản phẩm, Validation là làm đúng quy trình", "Verification trả lời câu hỏi 'Are we building the product right?', Validation trả lời 'Are we building the right product?'", "Cả hai đều thực hiện trên phần mềm đã hoàn thiện", "Không có sự khác biệt"], ans: 1 },
    { q: "Trình tự nhân quả đúng nhất của 3 khái niệm: Error, Defect (Bug) và Failure là gì?", opts: ["Defect -> Error -> Failure", "Failure -> Defect -> Error", "Error (Con người làm sai) -> Defect (Nằm trong code) -> Failure (Phần mềm chạy sai)", "Error và Defect là một, sinh ra Failure"], ans: 2 },
    { q: "Nếu lập trình viên gõ nhầm dấu '<' thành '<=' trong câu lệnh điều kiện, lỗi này trong mã nguồn được gọi là gì?", opts: ["Failure", "Defect / Bug / Fault", "Mistake", "Incident"], ans: 1 },
    { q: "Cặp khái niệm QA (Quality Assurance) và QC (Quality Control): Khẳng định nào ĐÚNG?", opts: ["QA tập trung vào Quá trình (Process-oriented), QC tập trung vào Sản phẩm (Product-oriented)", "QA là tìm bug, QC là ngăn ngừa bug", "QA do Tester làm, QC do Project Manager làm", "Cả hai đều chỉ chạy script automation"], ans: 0 },
    { q: "Nghịch lý thuốc trừ sâu (Pesticide Paradox) trong kiểm thử có nghĩa là gì?", opts: ["Kiểm thử càng nhiều, lỗi càng ẩn sâu", "Nếu lặp lại cùng một tập test case nhiều lần, nó sẽ không tìm thêm được lỗi mới", "Không thể tìm ra tất cả các lỗi", "Càng sửa lỗi này sẽ càng sinh ra lỗi khác"], ans: 1 },
    { q: "Để khắc phục 'Nghịch lý thuốc trừ sâu', Tester cần phải làm gì?", opts: ["Chạy auto test nhiều lần hơn", "Thường xuyên review, cập nhật và viết thêm các test case mới", "Không làm gì cả", "Đổi ngôn ngữ lập trình"], ans: 1 },
    { q: "Khẳng định nào sau đây là nguyên lý 'Ngụy biện không có lỗi' (Absence of errors fallacy)?", opts: ["Phần mềm không có lỗi là phần mềm hoàn hảo", "Việc tìm và sửa lỗi sẽ vô nghĩa nếu hệ thống được xây dựng không đáp ứng nhu cầu của người dùng", "Mọi phần mềm đều có lỗi ẩn", "Không thể test mọi trường hợp"], ans: 1 },
    { q: "Tình huống: Phần mềm của bạn đã pass 100% test case và không còn bug. Bạn tuyên bố với sếp 'Phần mềm đã hoàn toàn hết lỗi'. Bạn đã vi phạm nguyên tắc nào?", opts: ["Nguyên tắc 1: Kiểm thử chứng minh sự hiện diện của lỗi", "Nguyên tắc 3: Kiểm thử sớm", "Nguyên tắc 4: Lỗi thường gom cụm", "Nguyên tắc 6: Kiểm thử phụ thuộc ngữ cảnh"], ans: 0 },
    { q: "Tại sao nguyên tắc 'Kiểm thử toàn bộ (Exhaustive Testing) là không thể' lại đúng?", opts: ["Vì Tester lười biếng", "Vì hệ thống không bao giờ có bug", "Vì tập hợp tất cả các giá trị đầu vào, đầu ra và đường dẫn logic là vô hạn, không đủ thời gian và tài nguyên để test hết", "Vì công cụ chưa đủ mạnh"], ans: 2 },
    { q: "Nguyên tắc 'Kiểm thử toàn diện' (Exhaustive testing) CHỈ CÓ THỂ thực hiện được trong trường hợp nào?", opts: ["Dự án có ngân sách khổng lồ", "Chỉ khi phần mềm cực kỳ đơn giản với không gian đầu vào rất nhỏ", "Khi dùng tool Automation mạnh nhất", "Khi khách hàng yêu cầu"], ans: 1 },
    { q: "Khác biệt giữa Severity (Độ nghiêm trọng) và Priority (Độ ưu tiên) là gì?", opts: ["Severity do Dev đánh giá, Priority do Tester đánh giá", "Severity ảnh hưởng tiến độ, Priority ảnh hưởng khách hàng", "Severity là mức độ tàn phá hệ thống của Bug, Priority là thứ tự thời gian cần phải fix Bug đó", "Là 2 từ đồng nghĩa"], ans: 2 },
    { q: "Ví dụ nào sau đây là: Severity THẤP (Low) nhưng Priority CAO (High)?", opts: ["Hệ thống sập toàn bộ khi ấn thanh toán", "Sai logo của đối tác lớn ngay trang chủ", "Nút 'Hủy' không hoạt động ở trang ít người dùng", "Tràn bộ nhớ cache sau 10 ngày"], ans: 1 },
    { q: "Lỗi (Defect) thường có chi phí sửa chữa CAO NHẤT khi được phát hiện ở giai đoạn nào?", opts: ["Requirement (Thu thập yêu cầu)", "Coding (Viết mã)", "Testing (Kiểm thử)", "Production / Release (Đã phát hành)"], ans: 3 },
    { q: "Kiểm thử tĩnh (Static Testing) có thể tìm thấy lỗi mà kiểm thử động (Dynamic Testing) KHÓ tìm thấy. Ví dụ nào sau đây là lỗi do Static Testing phát hiện?", opts: ["Nút bấm không phản hồi", "Trang web load chậm", "Mã nguồn vi phạm chuẩn coding (Coding standard), có đoạn code chết (Dead code)", "Sai kết quả tính toán"], ans: 2 },
    { q: "Trách nhiệm cốt lõi của Tester trong một dự án phần mềm là gì?", opts: ["Sửa lỗi code thay cho Dev", "Tìm kiếm lỗi, đánh giá chất lượng và cung cấp thông tin rủi ro cho các bên liên quan", "Quyết định thời điểm phát hành phần mềm", "Viết tài liệu hướng dẫn sử dụng"], ans: 1 },

    // ========================================================================
    // PHẦN 2: CÁC MỨC ĐỘ KIỂM THỬ & VÒNG ĐỜI (18 CÂU)
    // ========================================================================
    { q: "Đâu KHÔNG phải là một cấp độ trong quy trình kiểm thử chuẩn (Test Levels)?", opts: ["Unit Testing", "Integration Testing", "System Testing", "White-box Testing"], ans: 3 },
    { q: "Mức độ kiểm thử nào kết hợp các module độc lập lại với nhau để kiểm tra sự giao tiếp giữa chúng?", opts: ["Unit Testing", "System Testing", "Integration Testing", "Acceptance Testing"], ans: 2 },
    { q: "Trong Integration Testing, phân biệt Stub và Driver?", opts: ["Stub gọi module đang test, Driver được module đang test gọi", "Stub là giả lập của module con (bị gọi), Driver là giả lập của module cha (đi gọi)", "Cả hai dùng trong Bottom-up", "Không có sự khác biệt"], ans: 1 },
    { q: "Kỹ thuật Tích hợp từ dưới lên (Bottom-up Integration) cần sử dụng thành phần giả lập nào?", opts: ["Stub", "Driver", "Cả Stub và Driver", "Không cần giả lập"], ans: 1 },
    { q: "System Testing (Kiểm thử hệ thống) thường được thiết kế dựa trên tài liệu nào?", opts: ["Code nguồn", "Tài liệu thiết kế chi tiết (Low-level design)", "Tài liệu đặc tả yêu cầu hệ thống (SRS)", "Sách hướng dẫn sử dụng"], ans: 2 },
    { q: "Quá trình kiểm thử nào thường do khách hàng/người dùng cuối thực hiện tại môi trường của khách hàng?", opts: ["Alpha Testing", "Beta Testing", "Integration Testing", "Unit Testing"], ans: 1 },
    { q: "Khẳng định nào ĐÚNG nhất về Alpha Testing?", opts: ["Làm bởi end-user thực tế ở nhà của họ", "Thực hiện bởi đội ngũ nội bộ giả lập làm người dùng, tại môi trường của công ty phát triển", "Chạy hoàn toàn tự động", "Chỉ test API"], ans: 1 },
    { q: "Đâu là ví dụ của một non-functional test (kiểm thử phi chức năng)?", opts: ["Kiểm tra tính năng đăng nhập", "Kiểm tra khả năng chịu tải của hệ thống (Load testing)", "Kiểm tra thanh toán giỏ hàng", "Kiểm tra thêm/sửa/xóa"], ans: 1 },
    { q: "Kiểm thử bảo trì (Maintenance Testing) được thực hiện khi nào?", opts: ["Khi hệ thống đang được code", "Khi thu thập yêu cầu", "Khi hệ thống đã live và có sự thay đổi/nâng cấp, thêm tính năng mới hoặc vá lỗi", "Trước khi bàn giao cho khách"], ans: 2 },
    { q: "Trong mô hình chữ V (V-Model), giai đoạn 'Phân tích Yêu cầu Nghiệp vụ' (BRS) tương ứng với mức độ kiểm thử nào?", opts: ["Unit Testing", "Integration Testing", "System Testing", "Acceptance Testing (UAT)"], ans: 3 },
    { q: "Trong V-Model, tài liệu 'Đặc tả Yêu cầu Hệ thống' (SRS) là nền tảng để thiết kế test case cho cấp độ nào?", opts: ["Unit Testing", "System Testing", "Integration Testing", "Alpha Testing"], ans: 1 },
    { q: "Trong V-Model, pha 'Thiết kế Chi tiết' (Low-Level Design) được đối chiếu (verify) bởi mức độ kiểm thử nào?", opts: ["Unit Testing", "Integration Testing", "System Testing", "Acceptance Testing"], ans: 0 },
    { q: "Trong quy trình Scrum/Agile, kiểm thử được thực hiện khi nào?", opts: ["Chỉ cuối mỗi Sprint", "Liên tục trong suốt quá trình phát triển (Continuous testing)", "Sau khi toàn dự án xong", "Ở Sprint 0"], ans: 1 },
    { q: "Regression Testing (Kiểm thử hồi quy) có mục đích gì?", opts: ["Đảm bảo các thay đổi/sửa lỗi mới không làm hỏng các chức năng cũ đang hoạt động tốt", "Test hiệu suất", "Tìm lỗi hoàn toàn mới", "Test bảo mật"], ans: 0 },
    { q: "Khái niệm 'Môi trường kiểm thử' (Test Environment) bao gồm những gì?", opts: ["Chỉ phần mềm đang test", "Chỉ tool test", "Phần cứng, phần mềm, mạng lưới, hệ điều hành được setup để test", "Phòng của Tester"], ans: 2 },
    { q: "So sánh 3 loại Review trong Static Testing: Loại nào trang trọng nhất, tuân thủ quy trình nghiêm ngặt, có biên bản và checklist?", opts: ["Informal Review", "Walkthrough", "Technical Review", "Inspection (Thanh tra)"], ans: 3 },
    { q: "Trong các loại Review, hình thức 'Walkthrough' có đặc điểm cốt lõi nào?", opts: ["Do sếp chủ trì", "Do chính tác giả (của tài liệu/code) dẫn dắt và giải thích cho team", "Không ghi biên bản", "Chỉ dùng review code"], ans: 1 },
    { q: "Thành phần nào KHÔNG nhất thiết phải có mặt trong một tài liệu Kế hoạch kiểm thử (Test Plan)?", opts: ["Phạm vi kiểm thử (Scope)", "Mã nguồn chi tiết của tính năng", "Rủi ro dự án (Risks)", "Tài nguyên và Lịch trình (Schedule)"], ans: 1 },

    // ========================================================================
    // PHẦN 3: KIỂM THỬ HỘP ĐEN & THIẾT KẾ TEST CASE (18 CÂU)
    // ========================================================================
    { q: "Kiểm thử hộp đen (Black-box testing) chủ yếu tập trung vào điều gì?", opts: ["Cấu trúc code", "Chức năng (Functionality) và Yêu cầu của hệ thống", "Mức độ phủ nhánh", "Tối ưu RAM"], ans: 1 },
    { q: "Sự khác biệt khi kết hợp Phân lớp tương đương (EP) và Giá trị biên (BVA) là gì?", opts: ["EP lấy đại diện vùng, BVA nhắm vào điểm mút (biên) của vùng đó", "EP tìm lỗi ở biên, BVA tìm ở giữa", "EP cho hộp trắng, BVA cho hộp đen", "Chúng là một"], ans: 0 },
    { q: "Chức năng mua vé xem phim yêu cầu số vé mua mỗi lần là số nguyên từ [1, 10]. Áp dụng BVA (2-value), bộ test case nào ĐÚNG nhất?", opts: ["1, 10", "0, 1, 10, 11", "1, 2, 9, 10", "0, 1, 2, 9, 10, 11"], ans: 1 },
    { q: "Ô nhập năm sinh hợp lệ từ [1900, 2026]. Áp dụng Phân tích giá trị biên mạnh (Robustness 3-value), bộ giá trị chuẩn là?", opts: ["1899, 1900, 2026, 2027", "1900, 1901, 2025, 2026", "1899, 1900, 1901, 2025, 2026, 2027", "1900, 1950, 2026"], ans: 2 },
    { q: "Nếu một form tạo mật khẩu yêu cầu: 'Có chữ hoa, chữ thường và số'. Test case nào mang tính Biên mạnh (Robustness/Negative) tốt nhất để kiểm tra khả năng validation?", opts: ["Abc12345", "Nhập mật khẩu có chữ hoa, chữ thường, số và thêm 1 KÝ TỰ ĐẶC BIỆT (ví dụ: Abc12345@)", "chuthuong123", "CHUHOA123"], ans: 1 },
    { q: "Một textbox nhập tháng trong năm (1 đến 12). Theo Phân lớp tương đương (EP), các lớp được chia như thế nào?", opts: ["Hợp lệ: 1 đến 12. Không hợp lệ: 0, 13", "Hợp lệ: 1<=x<=12. Không hợp lệ: x<1 và x>12", "Chỉ test từ 1 đến 12", "Hợp lệ: 1, 12"], ans: 1 },
    { q: "Hệ thống tính tiền vé: Trẻ em (<1m2) free, Người lớn (>=1m2) 100k. Dev thường mắc lỗi toán học ở giá trị biên nào nhất?", opts: ["0", "1.19m và 1.2m", "2m", "100k"], ans: 1 },
    { q: "Kỹ thuật kiểm thử Bảng quyết định (Decision Table): Nếu có 4 điều kiện đầu vào (Đúng/Sai) độc lập, có tối đa bao nhiêu quy tắc (Rules)?", opts: ["8", "12", "16", "32"], ans: 2 },
    { q: "Kỹ thuật kiểm thử Bảng quyết định: Nếu có 3 điều kiện đầu vào, bảng quyết định sẽ có bao nhiêu rule?", opts: ["3", "6", "8", "9"], ans: 2 },
    { q: "Một trang web chiếu phim có luật: Khách hàng là Sinh viên (ĐK1) HOẶC là Thành viên VIP (ĐK2) thì được giảm 20%. Kỹ thuật thiết kế test case nào là TỐT NHẤT?", opts: ["Phân lớp tương đương", "Chuyển trạng thái", "Đoán lỗi", "Bảng quyết định (Decision Table)"], ans: 3 },
    { q: "Tính năng đăng nhập tài khoản khóa user sau 3 lần nhập sai mật khẩu liên tiếp. Kỹ thuật thiết kế test case nào mô tả chuẩn nhất logic này?", opts: ["Phân tích giá trị biên", "Kiểm thử chuyển trạng thái (State Transition Testing)", "Bảng quyết định", "Đoán lỗi"], ans: 1 },
    { q: "Kỹ thuật 'Pairwise Testing' (Kiểm thử theo cặp) mang lại lợi ích gì nổi bật nhất?", opts: ["Test được giao diện", "Giảm đáng kể số lượng test case tổ hợp mà vẫn giữ được tỷ lệ phát hiện lỗi cao", "Không cần viết tài liệu", "Phát hiện lỗi logic trong code nhanh hơn BVA"], ans: 1 },
    { q: "Use Case Testing là một hình thức kiểm thử thường được áp dụng tốt nhất ở mức độ nào?", opts: ["Unit Testing", "System Testing / Acceptance Testing", "White-box Testing", "Static Testing"], ans: 1 },
    { q: "Kỹ thuật 'Đoán lỗi' (Error Guessing) phụ thuộc nhiều nhất vào yếu tố nào?", opts: ["Công cụ tự động", "Code phức tạp", "Kinh nghiệm, trực giác của Tester về những nơi Dev hay làm sai", "Tài liệu SRS"], ans: 2 },
    { q: "Kiểm thử khám phá (Exploratory Testing) là sự kết hợp đồng thời của các hoạt động nào?", opts: ["Học hỏi hệ thống, thiết kế test case và thực thi test case cùng lúc", "Viết code và test", "Lập kế hoạch và báo cáo", "Cài server"], ans: 0 },
    { q: "Kiểm thử 'Hộp xám' (Gray-box Testing) là gì?", opts: ["Kiểm thử giao diện", "Kết hợp Hộp đen và Hộp trắng (biết một phần cấu trúc code/DB để test tốt hơn)", "Kiểm thử bảo mật", "Kiểm thử hiệu năng"], ans: 1 },
    { q: "Bài toán cước Taxi: 2km đầu 15k, km 3 đến 10 giá 12k, trên 10km giá 10k. Kỹ thuật nào xử lý tốt nhất?", opts: ["Phân lớp tương đương & Giá trị biên kết hợp", "Chuyển trạng thái", "Error Guessing", "Bảng quyết định"], ans: 0 },
    { q: "Kỹ thuật kiểm thử Bảng quyết định rất hữu ích khi hệ thống có đặc điểm gì?", opts: ["Nhiều vòng lặp phức tạp", "Có sự kết hợp phức tạp giữa nhiều quy tắc kinh doanh logic (Business Rules) đan xen", "Giao diện nhiều màu sắc", "Chỉ có 1 biến đầu vào"], ans: 1 },

    // ========================================================================
    // PHẦN 4: KIỂM THỬ HỘP TRẮNG (CODE COVERAGE & MCCABE) (16 CÂU)
    // ========================================================================
    { q: "Kiểm thử hộp trắng (White-box testing) còn được gọi là gì?", opts: ["Behavioral Testing", "Glass-box / Structural Testing", "System Testing", "UAT"], ans: 1 },
    { q: "Khẳng định nào sau đây là ĐÚNG khi so sánh Phủ lệnh (Statement Coverage) và Phủ nhánh (Branch Coverage)?", opts: ["100% Phủ lệnh đảm bảo 100% Phủ nhánh", "100% Phủ nhánh luôn đảm bảo 100% Phủ lệnh", "Hoàn toàn độc lập", "Phủ nhánh chỉ áp dụng vòng lặp"], ans: 1 },
    { q: "Mối quan hệ giữa Phủ Đường Dẫn (Path Coverage) và Phủ Nhánh (Branch Coverage)?", opts: ["Số lượng test case của Path Coverage luôn nhỏ hơn Branch Coverage", "Số lượng test case của Path Coverage luôn LỚN HƠN HOẶC BẰNG Branch Coverage", "Bằng nhau", "Không liên quan"], ans: 1 },
    { q: "Công thức tính độ phức tạp McCabe (Cyclomatic Complexity) là V(G) = E - N + 2. Theo số nút quyết định (Predicate nodes - P), công thức là gì?", opts: ["V(G) = P - 1", "V(G) = P", "V(G) = P + 1", "V(G) = P + 2"], ans: 2 },
    { q: "Một đoạn mã kiểm tra user đăng nhập có 3 lệnh IF rẽ nhánh độc lập. Độ phức tạp Cyclomatic V(G) là bao nhiêu?", opts: ["2", "3", "4", "5"], ans: 2 },
    { q: "Nếu Cyclomatic V(G) = 4, điều này mang ý nghĩa thực tiễn gì cho Tester?", opts: ["Hàm có 4 dòng", "Cần chạy tool 4 lần", "Có tối đa 4 đường dẫn độc lập (Independent Paths), cần ít nhất 4 test case để đạt 100% Path Coverage cơ bản", "Code có 4 lỗi"], ans: 2 },
    { q: "Độ bao phủ câu lệnh (Statement Coverage) 100% đảm bảo điều gì?", opts: ["Mọi dòng code đều được thực thi ít nhất 1 lần", "Mọi nhánh điều kiện đều đi qua", "Mọi path đều chạy", "Hết lỗi"], ans: 0 },
    { q: "Cho đoạn code: `if (x > 0) { y = 1; }`. Cần ít nhất bao nhiêu Test case để đạt 100% Statement Coverage?", opts: ["1 (với x > 0)", "2 (với x > 0 và x <= 0)", "3", "0"], ans: 0 },
    { q: "Cho đoạn code: `if (x > 0) { y = 1; }`. Cần ít nhất bao nhiêu Test case để đạt 100% Branch Coverage?", opts: ["1", "2 (với x > 0 và x <= 0)", "3", "4"], ans: 1 },
    { q: "Trong hàm switch-case có 4 case cụ thể và 1 case default. Để đạt 100% Branch coverage, cần mấy test case?", opts: ["3", "4", "5", "6"], ans: 2 },
    { q: "Câu lệnh `if (a > 0 && b < 10)` có mấy nhánh logic cơ bản (True/False của khối lệnh) cần kiểm thử để đạt 100% Branch Coverage?", opts: ["1", "2", "3", "4"], ans: 1 },
    { q: "Cho đoạn code: `while (x > 0) { x--; }`. Nếu test case đầu vào x = 0, điều gì xảy ra?", opts: ["Thực thi 1 lần", "Lỗi vô tận", "Khối lệnh bên trong vòng lặp KHÔNG được thực thi lần nào", "Crash app"], ans: 2 },
    { q: "Cho đoạn code: `do { x--; } while (x > 0);`. Nếu test case đầu vào x = 0, điều gì xảy ra?", opts: ["KHÔNG thực thi lần nào", "Khối lệnh bên trong do-while được thực thi ít nhất 1 lần", "Lỗi biên dịch", "Lỗi vô tận"], ans: 1 },
    { q: "Kiểm thử đột biến (Mutation Testing) trong hộp trắng là gì?", opts: ["Test giao diện", "Chèn các lỗi nhân tạo (mutants) vào mã nguồn để kiểm tra xem bộ Test Case hiện tại có phát hiện ra và 'giết' được lỗi đó không", "Xóa code đi viết lại", "Chạy code trên máy ảo"], ans: 1 },
    { q: "Điểm yếu lớn nhất của Kiểm thử Hộp trắng (White-box testing) là gì?", opts: ["Không test được code", "Cần tool đắt tiền", "Không thể phát hiện được các lỗi do tính năng bị 'thiếu' (Dev quên chưa code tính năng đó vào)", "Mất nhiều RAM"], ans: 2 },
    { q: "Để kiểm thử hộp trắng hiệu quả, Tester bắt buộc phải có kỹ năng nào?", opts: ["Vẽ đồ họa", "Kinh doanh", "Đọc hiểu mã nguồn (Code), thuật toán và cấu trúc phần mềm", "Sửa máy tính"], ans: 2 },

    // ========================================================================
    // PHẦN 5: CÔNG CỤ JUNIT 5 & AUTOMATION (15 CÂU)
    // ========================================================================
    { q: "Trong JUnit 5, Annotation nào dùng để khai báo một phương thức là một Test case?", opts: ["@TestCase", "@Test", "@Check", "@Run"], ans: 1 },
    { q: "Annotation nào dùng để đánh dấu một hàm sẽ chạy TRƯỚC MỖI test case trong JUnit 5?", opts: ["@BeforeAll", "@BeforeEach", "@Test", "@AfterEach"], ans: 1 },
    { q: "Annotation `@AfterAll` (chạy 1 lần sau khi kết thúc toàn bộ class test) trong JUnit 5 yêu cầu hàm bên dưới phải có từ khóa gì?", opts: ["final", "abstract", "static", "private"], ans: 2 },
    { q: "Annotation nào cho phép chạy một test case lặp lại nhiều lần với các tập dữ liệu khác nhau?", opts: ["@RepeatedTest", "@Test", "@ParameterizedTest", "@DataTest"], ans: 2 },
    { q: "Hàm `assertEquals(expected, actual)` dùng để làm gì?", opts: ["Kiểm tra trỏ cùng vùng nhớ", "Kiểm tra giá trị thực tế có BẰNG giá trị mong đợi không", "Kiểm tra Null", "Ép kiểu"], ans: 1 },
    { q: "Hàm nào trong JUnit dùng để kiểm tra xem một đối tượng có mang giá trị Null hay không?", opts: ["assertFalse()", "assertNotNull()", "assertNull()", "assertTrue()"], ans: 2 },
    { q: "Hàm `assertThrows(Exception.class, () -> {...})` dùng để làm gì?", opts: ["Bỏ qua test", "Kiểm tra xem một đoạn code có ném ra đúng loại Exception mong muốn không", "Dừng app", "Xóa log"], ans: 1 },
    { q: "Nếu muốn một Test case bị báo lỗi (Fail) nếu nó chạy lâu hơn 2 giây, bạn dùng hàm nào trong JUnit 5?", opts: ["assertTimeout()", "assertTime()", "assertEquals()", "assertWait()"], ans: 0 },
    { q: "Để thiết lập thứ tự chạy các Test case, ta dùng Annotation nào kết hợp với `@TestMethodOrder`?", opts: ["@Sequence", "@Order", "@Priority", "@RunFirst"], ans: 1 },
    { q: "Trong JUnit, annotation `@Disabled` dùng để?", opts: ["Tạm bỏ qua, vô hiệu hóa việc chạy test case được đánh dấu", "Đánh dấu test fail", "Xóa hệ thống", "Xóa code"], ans: 0 },
    { q: "Lớp kiểm thử (Test class) trong Maven/Gradle thông thường cần đặt tên thế nào để tự động nhận diện chạy test?", opts: ["Bắt đầu hoặc kết thúc bằng chữ 'Test' (vd: LoginTest)", "Bất kỳ", "Đuôi .junit", "Tiền tố Unit_"], ans: 0 },
    { q: "Khi dùng `@ParameterizedTest` với `@ValueSource(ints = {1, 2, 3})`, test case sẽ được chạy mấy lần?", opts: ["1", "2", "3", "Tùy file XML"], ans: 2 },
    { q: "Lợi ích số 1 của Kiểm thử tự động (Automation Testing) là gì?", opts: ["Tìm 100% bug", "Bỏ Tester thủ công", "Thực thi cực nhanh và chính xác các bộ test lặp đi lặp lại (đặc biệt là Regression Test)", "Không cần code"], ans: 2 },
    { q: "Thuật ngữ 'False Positive' trong automation nghĩa là gì?", opts: ["Test báo đỗ, nhưng app có lỗi", "Test case báo LỖI (Fail) nhưng thực chất app chạy đúng (Lỗi do script test, mạng chập chờn...)", "Lỗi nghiêm trọng", "App hoàn hảo"], ans: 1 },
    { q: "Một test case tốt trong Automation cần đảm bảo tính chất nào?", opts: ["Độc lập, không bị phụ thuộc vào kết quả của test case khác", "Dài 1000 dòng code", "Giao diện đẹp", "Luôn phải chạy cuối cùng"], ans: 0 },

    // ========================================================================
    // PHẦN 6: BUGZILLA, SELENIUM IDE & VÒNG ĐỜI BUG (16 CÂU)
    // ========================================================================
    { q: "Khi Tester báo cáo lỗi lần đầu trên Bugzilla, trạng thái của Bug thường là gì?", opts: ["RESOLVED", "NEW / UNCONFIRMED", "VERIFIED", "CLOSED"], ans: 1 },
    { q: "Dev đã sửa code xong, họ chuyển trạng thái bug trên Bugzilla thành gì để báo Tester?", opts: ["CLOSED", "RESOLVED / FIXED", "REOPENED", "DUPLICATE"], ans: 1 },
    { q: "Vòng đời Bug: Dev báo RESOLVED. Tester test lại nhưng LỖI VẪN XẢY RA. Tester sẽ làm gì?", opts: ["Đổi thành CLOSED", "Đổi thành REOPENED", "Đổi thành DEFERRED", "Đổi thành INVALID"], ans: 1 },
    { q: "Trạng thái 'DEFERRED' của Bug có nghĩa là gì?", opts: ["Không phải lỗi", "Đã fix", "Lỗi có thật, nhưng được trì hoãn không sửa trong bản release hiện tại (dời sang bản cập nhật sau)", "Từ chối test"], ans: 2 },
    { q: "Nếu Dev thấy Bug báo cáo đã từng có người khác báo cáo y hệt trước đó, họ sẽ đánh dấu là gì?", opts: ["INVALID", "WONTFIX", "DUPLICATE", "LATER"], ans: 2 },
    { q: "Khi Tester kiểm tra lại và thấy Bug đã thực sự được sửa hết, Tester sẽ đóng Bug với trạng thái gì?", opts: ["VERIFIED / CLOSED", "REOPENED", "NEW", "ASSIGNED"], ans: 0 },
    { q: "Trạng thái 'WONT FIX' (Sẽ không sửa) dùng khi nào?", opts: ["Tester làm sai", "Chi phí sửa lỗi quá cao so với rủi ro nó mang lại, hoặc bản chất đó là một tính năng chứ không phải bug", "Chưa rảnh để sửa", "Lỗi đã báo cáo rồi"], ans: 1 },
    { q: "Công cụ Bugzilla KHÔNG có chức năng nào sau đây?", opts: ["Ghi nhận lỗi (Log bug)", "Quản lý trạng thái", "Tự động chạy script mã nguồn Java (Test Execution)", "Theo dõi vòng đời bug"], ans: 2 },
    { q: "Trường 'Environment' (Môi trường) trong Bugzilla thường ghi nhận thông tin gì?", opts: ["Tên người test", "Trình duyệt, Hệ điều hành, Độ phân giải màn hình lúc xảy ra lỗi", "Mức độ lỗi", "Mã code bị sai"], ans: 1 },
    { q: "Selenium IDE chủ yếu dùng để làm gì?", opts: ["Test bảo mật", "Test API", "Kiểm thử tự động giao diện web bằng cách Ghi và Phát lại (Record & Playback)", "Test tốc độ mạng"], ans: 2 },
    { q: "Thành phần cốt lõi của Selenium IDE là gì?", opts: ["Phần mềm exe nặng 2GB", "Một tiện ích mở rộng (Extension/Add-on) cài trực tiếp trên trình duyệt Chrome/Firefox", "Thư viện Java", "App điện thoại"], ans: 1 },
    { q: "Selenium WebDriver hỗ trợ viết kịch bản automation bằng ngôn ngữ nào?", opts: ["Chỉ Java", "Chỉ Python", "Đa ngôn ngữ (Java, C#, Python, Ruby, JavaScript...)", "Chỉ HTML"], ans: 2 },
    { q: "Trong Selenium, lệnh nào dùng để mở một trang web với URL cụ thể?", opts: ["driver.open(\"URL\")", "driver.get(\"URL\")", "driver.navigate()", "driver.click()"], ans: 1 },
    { q: "Trong Selenium, Locator (bộ định vị phần tử) nào thường được ưu tiên sử dụng nhất vì tính duy nhất và tìm kiếm nhanh nhất?", opts: ["By.className", "By.name", "By.id", "By.tagName"], ans: 2 },
    { q: "Khi lấy đường dẫn XPath trong Selenium, Xpath Tuyệt đối (Absolute XPath) thường bắt đầu bằng ký tự nào?", opts: ["//", "/", "#", "."], ans: 1 },
    { q: "Tại sao dùng XPath tương đối (//) thường tốt hơn XPath tuyệt đối (/) trong Automation UI?", opts: ["Dễ nhìn hơn", "Chạy nhanh gấp đôi", "Ít bị gãy (break) kịch bản test khi cấu trúc cây HTML của trang web có sự thay đổi nhỏ", "XPath tuyệt đối không dùng được"], ans: 2 },
    // ========================================================================
    // PHẦN 7: BỘ CÂU HỎI BẪY TỪ KHÓA - ĐÚNG GU THẦY RA ĐỀ (20 CÂU)
    // ========================================================================
    { q: "Test vs Debug: Ai là người thực hiện Debug (Gỡ lỗi)?", opts: ["Tester", "Developer", "Khách hàng", "Project Manager"], ans: 1 },
    { q: "Câu hỏi 'Are we building the product RIGHT?' (Đang xây đúng cách, đúng quy trình không?) là nói về khái niệm nào?", opts: ["Validation", "Verification", "Debugging", "Quality Control"], ans: 1 },
    { q: "Trong quy trình Tích hợp từ trên xuống (Top-down), bắt buộc phải tạo thành phần giả lập nào?", opts: ["STUB (Giả lập cấp dưới)", "DRIVER (Giả lập cấp trên)", "Cả Stub và Driver", "API"], ans: 0 },
    { q: "Trong mô hình V-Model, pha 'Thiết kế chi tiết (Low-Level Design)' được đối chiếu kiểm tra bởi mức độ test nào?", opts: ["System Testing", "Unit Testing", "Integration Testing", "Acceptance Testing"], ans: 1 },
    { q: "Tài liệu Business/User Requirements (Yêu cầu nghiệp vụ) là nền tảng để viết Test Case cho cấp độ nào?", opts: ["Unit Test", "Integration Test", "System Test", "Acceptance Test (UAT)"], ans: 3 },
    { q: "Kỹ thuật nào phụ thuộc HOÀN TOÀN vào trực giác và kinh nghiệm của người kiểm thử?", opts: ["Pairwise", "Error Guessing (Đoán lỗi)", "Decision Table", "BVA"], ans: 1 },
    { q: "Trong Decision Table, nếu có 4 điều kiện True/False độc lập thì số rules (cột) tối đa là bao nhiêu?", opts: ["4", "8", "16", "32"], ans: 2 },
    { q: "Hệ thống có 3 biến đầu vào, mỗi biến có 1 lớp hợp lệ và 2 lớp không hợp lệ. Phân lớp tương đương Strong Robust cần bao nhiêu Test Case?", opts: ["9", "12", "27", "1"], ans: 2 },
    { q: "Nguyên tắc 'Pesticide Paradox' (Nghịch lý thuốc trừ sâu) khuyên Tester nên làm gì?", opts: ["Viết code gỡ lỗi", "Thường xuyên cập nhật và thêm mới test case", "Dừng test khi không còn lỗi", "Chạy automation 24/7"], ans: 1 },
    { q: "Tester kiểm tra lại lỗi đã được Dev báo sửa xong (Fixed), nhưng chức năng thanh toán vẫn bị lỗi y hệt lúc đầu. Trạng thái Bug sẽ là?", opts: ["CLOSED", "DEFERRED", "REOPENED", "INVALID"], ans: 2 },
    { q: "Dev xác định chi phí sửa một lỗi giao diện quá cao so với rủi ro, và quyết định không sửa nó nữa. Dev sẽ gán trạng thái Bug là gì?", opts: ["WONT FIX", "INVALID", "REOPENED", "DUPLICATE"], ans: 0 },
    { q: "Mục đích lớn nhất của công cụ Selenium IDE là gì?", opts: ["Test bảo mật", "Quản lý Bug", "Record & Playback UI", "Viết mã nguồn Java"], ans: 2 },
    { q: "Theo tài liệu, công cụ nào của Microsoft chuyên dùng để sinh Test Case theo kỹ thuật Pairwise?", opts: ["Selenium", "Bugzilla", "PICT", "JUnit"], ans: 2 },
    { q: "Phủ điều kiện con (Condition Coverage - Cấp 3) bắt buộc phải thỏa mãn yêu cầu gì?", opts: ["Mỗi lệnh chạy 1 lần", "Mỗi nhánh ra True và False", "Mỗi điều kiện luận lý con ra True và False", "Kết hợp Cấp 2 và Cấp 3"], ans: 2 },
    { q: "Để test hộp trắng cho 1 vòng lặp (while/for) đạt hiệu quả cao nhất, bắt buộc phải có test case cho các trường hợp nào?", opts: ["0 lần, 1 lần, nhiều lần", "Chỉ cần 1 lần", "Chạy vô tận", "Bỏ qua vòng lặp"], ans: 0 },
    { q: "Đoạn code: `for (int i=0; i<n; i++) { if (a[i] == x) break; }`. Độ phức tạp Cyclomatic V(G) là bao nhiêu?", opts: ["1", "2", "3", "4"], ans: 2 }, // V(G) = 1 (for) + 1 (if) + 1 = 3
    { q: "Chức năng đặt vé xem phim có tính năng chọn ghế. Nếu bạn chọn ghế đã có người đặt, hệ thống ném ra `SeatUnavailableException`. Trong JUnit 5, lệnh nào dùng để test trường hợp này?", opts: ["assertEquals", "assertTrue", "assertThrows", "assertNotNull"], ans: 2 },
    { q: "Trong JUnit 5, Annotation nào sẽ chạy 1 lần DUY NHẤT SAU KHI hoàn tất tất cả các test case trong class?", opts: ["@AfterEach", "@AfterAll", "@AfterClass", "@After"], ans: 1 },
    { q: "Hàm `assertThrows(Exception.class, () -> {...})` có tham số thứ 2 là `() -> {...}`. Cấu trúc này gọi là gì?", opts: ["Vòng lặp", "Mảng (Array)", "Biểu thức Lambda", "Khối if-else"], ans: 2 },
    { q: "Muốn truyền trực tiếp nhiều dòng dữ liệu vào một Test Case trong JUnit 5 để chạy lặp lại, ta dùng Annotation nào?", opts: ["@ValueSource", "@CsvSource", "@MethodSource", "@RepeatedTest"], ans: 1 },
    // ========================================================================
    // PHẦN 8: TRÙM CUỐI - 40 CÂU BẪY CỰC NGẮN TỪ PHỤ LỤC ÔN THI
    // ========================================================================
    { q: "Lỗi bị Tester mở lại vì test thấy Dev sửa chưa đúng hoặc lỗi tái xuất hiện được gọi là trạng thái gì trên Bugzilla?", opts: ["CLOSED", "REOPENED", "DEFERRED", "DUPLICATE"], ans: 1 }, // 
    { q: "Dev xác định lỗi do Tester báo cáo thực chất trùng lặp với một lỗi đã được ghi nhận trước đó. Trạng thái Bug là gì?", opts: ["REJECTED", "INVALID", "DUPLICATE", "WONT FIX"], ans: 2 }, // 
    { q: "Test ngẫu nhiên, tự do, 'kiểm những gì có thể, phần còn lại để user phát hiện' là mức độ phủ nào?", opts: ["Phủ cấp 0 (Ad-hoc)", "Phủ cấp 1", "Phủ cấp 2", "Exploratory Testing"], ans: 0 }, // [cite: 175]
    { q: "Tài liệu High-Level Design (HLD) tương ứng với cấp độ kiểm thử nào trong V-Model?", opts: ["Unit Testing", "System Testing", "Integration Testing", "Acceptance Testing"], ans: 2 }, // [cite: 46]
    { q: "Trong Integration Testing, chiến lược nào tích hợp tất cả các module cùng một lúc?", opts: ["Top-down", "Bottom-up", "Sandwich", "Big Bang"], ans: 3 }, // [cite: 77]
    { q: "Đối tượng giả dùng để gọi module cấp thấp cần test (dùng trong Bottom-up) gọi là gì?", opts: ["Stub", "Driver", "Mock", "Fake"], ans: 1 }, // 
    { q: "Đối tượng giả có logic đơn giản, có thể hoạt động được (ví dụ database giả trong bộ nhớ) gọi là gì?", opts: ["Dummy", "Stub", "Fake", "Mock"], ans: 2 }, // 
    { q: "Đối tượng/dữ liệu truyền vào cho đủ tham số, lấp chỗ trống nhưng gần như không dùng đến gọi là gì?", opts: ["Mock", "Dummy", "Stub", "Driver"], ans: 1 }, // 
    { q: "Kiểm thử nhanh các chức năng chính để xem bản build có đủ ổn định để test sâu hơn tiếp không được gọi là gì?", opts: ["Sanity Testing", "Smoke Testing", "Regression Testing", "Retesting"], ans: 1 }, // 
    { q: "Kiểm thử nhanh một phần chức năng sau khi có thay đổi nhỏ (hẹp hơn Regression) gọi là gì?", opts: ["Smoke Testing", "Sanity Testing", "Alpha Testing", "Performance Testing"], ans: 1 }, // 
    { q: "Kiểm thử lại đúng cái lỗi đã được sửa để xác nhận nó đã thực sự hết lỗi gọi là gì?", opts: ["Regression Testing", "Retesting", "System Testing", "Unit Testing"], ans: 1 }, // 
    { q: "Đạt 100% Decision Coverage (Phủ nhánh) có đảm bảo đạt 100% Statement Coverage (Phủ lệnh) không?", opts: ["Có", "Không", "Tùy trường hợp", "Hoàn toàn không liên quan"], ans: 0 }, // 
    { q: "Đạt 100% Statement Coverage (Phủ lệnh) có đảm bảo đạt 100% Decision Coverage (Phủ nhánh) không?", opts: ["Có", "Không", "Tùy độ dài của code", "Chắc chắn 100%"], ans: 1 }, // 
    { q: "Trong phương pháp Phân lớp tương đương, 'Weak Normal' tính số Test Case dựa trên toán tử nào?", opts: ["Nhân (Tích) tất cả số class", "Cộng (Tổng) tất cả số class", "Max (Lấy số class lớn nhất)", "Min (Lấy số class nhỏ nhất)"], ans: 2 }, // [cite: 100]
    { q: "Công thức Worst-Cases BVA cho n biến đầu vào là gì?", opts: ["4n + 1", "6n + 1", "5^n", "7^n"], ans: 2 }, // [cite: 106]
    { q: "Bảng quyết định có ký hiệu '-' (Don't care) mang ý nghĩa gì?", opts: ["Lỗi đánh máy", "Điều kiện đó bắt buộc phải False", "Điều kiện đó không ảnh hưởng đến action/kết quả", "Điều kiện đó chưa được test"], ans: 113 }, // [cite: 113]
    { q: "Kỹ thuật nào dựa trên luồng thao tác (flow) của người dùng để kiểm thử theo nghiệp vụ?", opts: ["State Transition Testing", "Use Case Testing", "Decision Table", "BVA"], ans: 1 }, // 
    { q: "Hệ thống có các trạng thái (Open -> Assigned -> Fixed -> Closed). Kỹ thuật hộp đen nào tối ưu nhất?", opts: ["Equivalence Partitioning", "State Transition Testing", "Pairwise Testing", "Use Case Testing"], ans: 1 }, // 
    { q: "Framework kiểm thử đơn vị cho nền tảng .NET/C# là gì?", opts: ["JUnit", "PHPUnit", "NUnit", "Selenium"], ans: 2 }, // 
    { q: "Framework kiểm thử đơn vị cho PHP là gì?", opts: ["PHPUnit", "JUnit", "NUnit", "TestNG"], ans: 0 }, // 
    { q: "Quy trình thực hiện Test theo pattern chuẩn AAA là viết tắt của gì?", opts: ["Assert, Act, Arrange", "Arrange, Act, Assert", "Act, Arrange, Assert", "Apply, Action, Assert"], ans: 1 }, // [cite: 324]
    { q: "Trong JUnit 5, tham số đầu tiên của hàm `assertEquals(?, ?)` là gì?", opts: ["actual (Giá trị thực tế)", "expected (Giá trị mong đợi)", "delta (Sai số)", "message (Câu thông báo)"], ans: 1 }, // [cite: 333]
    { q: "Trong JUnit 5, nếu gọi sai thứ tự `assertEquals(actual, expected)` thì hậu quả là gì?", opts: ["Bị lỗi biên dịch, không chạy được", "Test vẫn chạy, nhưng khi fail thì câu thông báo lỗi bị ngược (gây khó debug)", "Test luôn luôn Pass", "Hệ thống crash"], ans: 1 }, // [cite: 333]
    { q: "Để so sánh 2 mảng (Array) trong JUnit 5, ta BẮT BUỘC phải dùng hàm nào?", opts: ["assertEquals", "assertArray", "assertArrayEquals", "assertTrue"], ans: 2 }, // [cite: 576]
    { q: "Để so sánh 2 số thực (double/float) trong JUnit 5, cần thêm tham số thứ 3 là gì?", opts: ["message", "delta (sai số cho phép)", "timeout", "exception"], ans: 1 }, // [cite: 576]
    { q: "Annotation `@Disabled` trong JUnit 5 có tác dụng gì?", opts: ["Xóa test case khỏi dự án", "Bỏ qua (skip) không chạy test case đó", "Làm test case luôn Fail", "Chạy test case ngầm"], ans: 1 }, // [cite: 574]
    { q: "Annotation nào dùng để đọc danh sách dữ liệu test trực tiếp từ một file CSV bên ngoài?", opts: ["@CsvSource", "@ValueSource", "@CsvFileSource", "@MethodSource"], ans: 2 }, // [cite: 574]
    { q: "Thư viện Hamcrest trong JUnit cung cấp tính năng gì?", opts: ["Kết nối Database", "Cung cấp các hàm assert đọc dễ hiểu như tiếng Anh (Ví dụ: `assertThat(x, equalTo(3))`)", "Tự động sinh Test Case", "Chụp ảnh màn hình lỗi"], ans: 1 }, // [cite: 478]
    { q: "Matcher nào của Hamcrest kiểm tra một chuỗi có CHỨA chuỗi con hay không?", opts: ["equalTo()", "hasItem()", "containsString()", "everyItem()"], ans: 2 }, // [cite: 483]
    { q: "Matcher `hasItems(x, y)` của Hamcrest dùng để kiểm tra điều gì trong một List?", opts: ["List CHỈ CÓ đúng x và y", "List KHÔNG CÓ x và y", "List có CHỨA cả x và y (có thể có phần tử khác)", "List rỗng"], ans: 2 }, // [cite: 483]
    { q: "Matcher `everyItem(greaterThan(0))` của Hamcrest có ý nghĩa gì?", opts: ["Ít nhất 1 phần tử > 0", "Phần tử đầu tiên > 0", "MỌI phần tử trong danh sách đều > 0", "Không có phần tử nào > 0"], ans: 2 }, // [cite: 483]
    { q: "Matcher `arrayContainingInAnyOrder(...)` của Hamcrest kiểm tra điều gì?", opts: ["Array đúng phần tử VÀ đúng thứ tự", "Array đúng phần tử nhưng KHÔNG CẦN đúng thứ tự", "Array rỗng", "Array có chứa 1 phần tử bất kỳ"], ans: 1 }, // [cite: 483]
    { q: "Khẳng định nào là ĐÚNG về Retesting và Regression Testing?", opts: ["Retesting là kiểm tra diện rộng, Regression là kiểm tra diện hẹp", "Retesting kiểm tra lại đúng lỗi đã sửa, Regression kiểm tra phần mềm cũ xem có bị ảnh hưởng bởi code mới không", "Chúng là 2 từ đồng nghĩa", "Đều là Test hộp trắng"], ans: 1 }, // 
    { q: "Code Review (Xem xét mã nguồn) là một ví dụ của loại kiểm thử nào?", opts: ["Dynamic Testing (Kiểm thử động)", "Static Testing (Kiểm thử tĩnh)", "White-box Testing", "System Testing"], ans: 1 }, // 
    { q: "Theo nguyên tắc 'Lỗi tập trung' (Defect clustering), Tester nên làm gì?", opts: ["Test đều mọi module như nhau", "Ưu tiên test kỹ khu vực có rủi ro cao hoặc thường xuyên xuất hiện nhiều lỗi", "Chỉ test module cuối cùng", "Không cần test lại module cũ"], ans: 1 }, // 
    { q: "Nếu có 5 tham số đầu vào với số lượng giá trị lần lượt là 3, 3, 3, 2, 2. Nếu áp dụng Full Combination (Tổ hợp đầy đủ), số Test Case là bao nhiêu?", opts: ["13", "18", "36", "108"], ans: 3 }, // 
    { q: "Một vòng lặp `while` trong mã nguồn có khả năng sinh ra điều gì đáng sợ nhất đối với Phủ đường dẫn (Path Coverage)?", opts: ["Làm giảm Statement Coverage", "Làm tăng số lượng đường đi (paths) lên đến vô hạn, rất khó đạt 100% Path Coverage", "Không thể viết Test Case", "Tự động đạt 100% Cấp 4"], ans: 1 }, // 
    { q: "Lỗi phát hiện ở giai đoạn nào thường tốn chi phí và công sức khắc phục NHỎ NHẤT?", opts: ["Thiết kế hệ thống", "Coding (Viết mã)", "Requirements (Thu thập yêu cầu)", "Production"], ans: 2 }, // 
    { q: "Lỗi phát hiện ở giai đoạn nào thường kéo theo việc phải sửa lại cả thiết kế, code và test lại từ đầu (tốn kém nhất)?", opts: ["Lỗi trong đặc tả yêu cầu (Requirements) phát hiện muộn", "Lỗi cú pháp (Syntax error)", "Lỗi giao diện (UI)", "Lỗi cài đặt"], ans: 0 }, // 
    { q: "Đâu là một ví dụ rõ nhất của Usability Testing (Kiểm thử khả dụng)?", opts: ["Đo thời gian phản hồi của API", "Test lỗ hổng SQL Injection", "Kiểm tra xem người già có dễ dàng bấm nút mua hàng trên app không", "Chạy 100.000 user cùng lúc"], ans: 2 } //
];