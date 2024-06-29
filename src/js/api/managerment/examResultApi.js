import baseApi from "../baseApi";

class ExamResultAPI extends baseApi {
  constructor() {
    super(); // Gọi constructor của baseApi để khởi tạo các phương thức từ BaseService
    this.endpoint = "ExamResult"; // Định nghĩa endpoint cho đối tượng Brand
  }
}

const examResultAPI = new ExamResultAPI();

export default examResultAPI;
