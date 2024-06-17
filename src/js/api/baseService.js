import axios from "axios";
import router from "@/router/router";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

class BaseService {
  constructor() {
    instance.interceptors.request.use(
      (config) => {
        // Kiểm tra và thêm token vào header nếu có
        const token = localStorage.getItem("jwtToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            console.log("Unauthorized: Bạn cần đăng nhập.");
            // Điều hướng người dùng đến trang bị cấm mà không hiển thị cảnh báo runtime
            router.push({ name: "forbidden" }).catch(() => {});
            return Promise.reject(error); // Đảm bảo từ chối promise
          } else if (error.response.status === 403) {
            console.log("Forbidden: Bạn không có quyền truy cập.");
            // Điều hướng người dùng đến trang bị cấm mà không hiển thị cảnh báo runtime
            router.push({ name: "forbidden" }).catch(() => {});
            return Promise.reject(error); // Đảm bảo từ chối promise
          }
        } else {
          console.log("Lỗi mạng hoặc lỗi không xác định:", error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  async get(endpoint) {
    try {
      const response = await instance.get(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(endpoint, data) {
    try {
      const response = await instance.post(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(endpoint, data) {
    try {
      const response = await instance.put(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(endpoint) {
    try {
      const response = await instance.delete(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      console.log("Lỗi từ máy chủ:", error.response);
    } else if (error.request) {
      console.log("Không nhận được phản hồi từ máy chủ:", error.request);
    } else {
      console.log("Lỗi:", error.message);
    }
  }
}

export default BaseService;
