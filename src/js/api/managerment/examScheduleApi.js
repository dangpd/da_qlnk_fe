import baseApi from "../baseApi";

class ExamScheduleAPI extends baseApi {
  constructor() {
    super(); // Gọi constructor của baseApi để khởi tạo các phương thức từ BaseService
    this.endpoint = "ExamSchedule"; // Định nghĩa endpoint cho đối tượng Brand
  }
}

const examScheduleAPI = new ExamScheduleAPI();

export default examScheduleAPI;
