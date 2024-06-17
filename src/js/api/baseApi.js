import baseService from "./baseService";

class BaseApi extends baseService {
  constructor() {
    super(); // Gọi constructor của BaseService
    // Không cần khai báo endpoint ở đây, vì sẽ được định nghĩa trong lớp con
  }

  // Lấy tất cả các Brand
  async getAll() {
    const endpoint = this.endpoint;
    return this.get(endpoint);
  }

  // Lấy thông tin Brand theo ID
  async getById(id) {
    const endpoint = `${this.endpoint}/${id}`;
    return this.get(endpoint);
  }

  // Thêm mới một Brand
  async add(brandData) {
    const endpoint = this.endpoint;
    return this.post(endpoint, brandData);
  }

  // Cập nhật thông tin của một Brand
  async update(id, brandData) {
    const endpoint = `${this.endpoint}/${id}`;
    return this.put(endpoint, brandData);
  }

  // Xóa một Brand dựa vào ID
  async delete(id) {
    const endpoint = `${this.endpoint}/${id}`;
    return this.delete(endpoint);
  }

  // Lọc danh sách các Brand
  async filter(key = "", pageSize, pageNumber) {
    const endpoint = `${this.endpoint}/Filter?textSearch=${key}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
    return this.get(endpoint);
  }
}

export default BaseApi;
