import baseApi from "./baseApi";

class ProductAPI extends baseApi {
  constructor() {
    super(); // Gọi constructor của baseApi để khởi tạo các phương thức từ BaseService
    this.endpoint = "Product"; // Định nghĩa endpoint cho đối tượng Brand
  }

  async getNotAuthen() {
    const endpoint = `${this.endpoint}/NotAuthen`;
    return this.get(endpoint);
  }
}

const productAPI = new ProductAPI();

export default productAPI;
