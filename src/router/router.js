import { createRouter, createWebHistory } from "vue-router";
import ForBidden from "@/views/ForBidden.vue"; // Trang báo lỗi 403
import NotFound from "@/views/NotFound.vue"; // Trang báo lỗi 404

// Admin
import AdminHome from "@/views/admin/AdminHome.vue"; // Trang chủ quản trị
import Statistics from "@/views/admin/Statistics.vue"; // Trang thống kê

// Management
import Management from "@/views/admin/Management/Management.vue"; // Trang quản lý
import PatientReception from "@/views/admin/Management/PatientReception.vue"; // Trang tiếp đón bệnh nhân
import MedicalRecords from "@/views/admin/Management/MedicalRecords.vue"; // Trang danh sách phiếu khám bệnh
import Patients from "@/views/admin/Management/Patients.vue"; // Trang danh sách bệnh nhân
import Appointments from "@/views/admin/Management/Appointments.vue"; // Trang lịch hẹn khám
import MedicalHistory from "@/views/admin/Management/MedicalHistory.vue"; // Trang lịch sử khám bệnh

// Catalog Management
import CatalogManagement from "@/views/admin/CatalogManagement/CatalogManagement.vue"; // Trang quản lý danh mục
import MedicalIndexes from "@/views/admin/CatalogManagement/MedicalIndexes.vue"; // Trang danh mục chỉ số khám
import Medicines from "@/views/admin/CatalogManagement/Medicines.vue"; // Trang danh mục thuốc
import Positions from "@/views/admin/CatalogManagement/Positions.vue"; // Trang danh mục chức vụ
import Specialties from "@/views/admin/CatalogManagement/Specialties.vue"; // Trang danh mục chuyên khoa

// System Management
import SystemManagement from "@/views/admin/SystemManagement/SystemManagement.vue"; // Trang quản trị hệ thống
import Users from "@/views/admin/SystemManagement/Users.vue"; // Trang quản lý người dùng
import Rooms from "@/views/admin/SystemManagement/Rooms.vue"; // Trang quản lý phòng
import Permissions from "@/views/admin/SystemManagement/Permissions.vue"; // Trang danh sách quyền

const routes = [
  {
    path: "/admin",
    component: AdminHome,
    children: [
      { path: "statistics", component: Statistics }, // Đường dẫn đến trang thống kê
      {
        path: "management",
        component: Management,
        children: [
          { path: "patient-reception", component: PatientReception }, // Đường dẫn đến trang tiếp đón bệnh nhân
          { path: "medical-records", component: MedicalRecords }, // Đường dẫn đến trang danh sách phiếu khám bệnh
          { path: "patients", component: Patients }, // Đường dẫn đến trang danh sách bệnh nhân
          { path: "appointments", component: Appointments }, // Đường dẫn đến trang lịch hẹn khám
          { path: "medical-history", component: MedicalHistory }, // Đường dẫn đến trang lịch sử khám bệnh
        ],
      },
      {
        path: "catalog-management",
        component: CatalogManagement,
        children: [
          { path: "medical-indexes", component: MedicalIndexes }, // Đường dẫn đến trang danh mục chỉ số khám
          { path: "medicines", component: Medicines }, // Đường dẫn đến trang danh mục thuốc
          { path: "positions", component: Positions }, // Đường dẫn đến trang danh mục chức vụ
          { path: "specialties", component: Specialties }, // Đường dẫn đến trang danh mục chuyên khoa
        ],
      },
      {
        path: "system-management",
        component: SystemManagement,
        children: [
          { path: "users", component: Users }, // Đường dẫn đến trang quản lý người dùng
          { path: "rooms", component: Rooms }, // Đường dẫn đến trang quản lý phòng
          { path: "permissions", component: Permissions }, // Đường dẫn đến trang danh sách quyền
        ],
      },
    ],
  },
  // Trang báo lỗi 403 và 404
  { name: "forbidden", path: "/forbidden", component: ForBidden },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: "#main",
      top: 140,
    };
  },
});

export default router;
