import baseApi from "../baseApi";

class UserAPI extends baseApi {
  constructor() {
    super(); // Gọi constructor của baseApi để khởi tạo các phương thức từ BaseService
    this.endpoint = "User"; // Định nghĩa endpoint cho đối tượng Brand
  }
}

const userAPI = new UserAPI();

export default userAPI;
