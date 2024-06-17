import baseApi from "./baseApi";

class BrandAPI extends baseApi {
  constructor() {
    super(); // Gọi constructor của baseApi để khởi tạo các phương thức từ BaseService
    this.endpoint = "Brand"; // Định nghĩa endpoint cho đối tượng Brand
  }
}

const brandAPI = new BrandAPI();

export default brandAPI;
