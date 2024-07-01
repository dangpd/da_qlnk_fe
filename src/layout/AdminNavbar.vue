<template>
  <div class="nav">
    <div class="anav-list">
      <div class="admin-info">
        <img src="../assets/image/logonhakhoa.jpg" alt="" />
      </div>
      <div
        class="anav-item anav-menu"
        v-for="(item, index) in data"
        :key="index"
        :class="{ 'item-active': checkActive(item.url) }"
        @click="changeRouter(item.url, item.children.length > 0 ? true : false)"
      >
        <div class="anav__text">
          {{ item.name }}
        </div>
        <i
          style="color: black"
          class="fa-solid fa-chevron-down"
          v-show="item.children.length > 0"
        ></i>
        <div
          v-show="item.children.length > 0"
          :class="'anav-submenu'"
          :style="{ 'z-index': index }"
        >
          <div
            class="anav-item-submenu"
            v-for="(itemC, indexC) in item.children"
            :key="indexC"
            @click.stop="changeRouter(itemC.url)"
          >
            <div class="anav__texts">{{ itemC.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminNavbar",
  data() {
    return {
      data: [
        {
          name: "Thống kê",
          url: "/statistics",
          children: [],
        },
        {
          name: "Quản lý khám",
          url: "/management",
          children: [
            {
              name: "Tiếp đón bệnh nhân",
              url: "/management/patient-reception",
            },
            {
              name: "DS phiếu khám bệnh",
              url: "/management/exam-result",
            },
            { name: "DS bệnh nhân", url: "/management/patients" },
            { name: "Lịch hẹn khám", url: "/management/appointments" },
            {
              name: "Lịch sử khám bệnh",
              url: "/management/medical-history",
            },
          ],
        },
        {
          name: "Quản lý danh mục",
          url: "/catalog-management",
          children: [
            {
              name: "Danh mục chỉ số khám",
              url: "/catalog-management/examcate",
            },
            {
              name: "Danh sách chỉ số khám",
              url: "/catalog-management/examination",
            },
            {
              name: "Danh mục thuốc",
              url: "/catalog-management/medicalcate",
            },
            {
              name: "Danh sách thuốc",
              url: "/catalog-management/medical",
            },
          ],
        },
        {
          name: "Quản trị hệ thống",
          url: "/system-management",
          children: [
            {
              name: "Quản lý người dùng",
              url: "/system-management/users",
            },
            { name: "Quản lý phòng", url: "/system-management/rooms" },
            {
              name: "Danh sách quyền",
              url: "/system-management/permissions",
            },
            {
              name: "Danh mục chức vụ",
              url: "/system-management/positions",
            },
            {
              name: "Danh mục chuyên khoa",
              url: "/system-management/specialties",
            },
          ],
        },
      ],
    };
  },
  methods: {
    checkActive(data) {
      if (this.$route.path.split("/")[2] && data.split("/")[2]) {
        return this.$route.path.split("/")[2] == data.split("/")[2];
      }
      return false;
    },
    changeRouter(url, hasChildren = false) {
      if (this.$route.path != url) {
        if (!hasChildren) {
          this.$router.push(url); // Thay đổi đường dẫn sử dụng Vue Router
        }
      }
    },
  },
};
</script>

<style>
@import url(../assets/css/admin/adminnavbar.css);
</style>
