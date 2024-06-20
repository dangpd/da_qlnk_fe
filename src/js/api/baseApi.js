import baseService from "./baseService";

class BaseApi extends baseService {
  constructor() {
    super(); // Gọi constructor của BaseService
    // Không cần khai báo endpoint ở đây, vì sẽ được định nghĩa trong lớp con
  }

  async getAll(showLoading = true) {
    const endpoint = this.endpoint;
    return this.get(endpoint, showLoading);
  }

  async getById(id, showLoading = true) {
    const endpoint = `${this.endpoint}/${id}`;
    return this.get(endpoint, showLoading);
  }

  async add(brandData, showLoading = true) {
    const endpoint = this.endpoint;
    return this.post(endpoint, brandData, showLoading);
  }

  async update(id, brandData, showLoading = true) {
    const endpoint = `${this.endpoint}/${id}`;
    return this.put(endpoint, brandData, showLoading);
  }

  async delete(id, showLoading = true) {
    const endpoint = `${this.endpoint}/${id}`;
    return this.delete(endpoint, showLoading);
  }

  async filter(key = "", pageSize, pageNumber, showLoading = true) {
    const endpoint = `${this.endpoint}/Filter?textSearch=${key}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
    return this.get(endpoint, showLoading);
  }
}

export default BaseApi;