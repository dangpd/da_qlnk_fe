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
          url: "/admin/statistics",
          children: [],
        },
        {
          name: "Quản lý khám",
          url: "/admin/management",
          children: [
            {
              name: "Tiếp đón bệnh nhân",
              url: "/admin/management/patient-reception",
            },
            {
              name: "DS phiếu khám bệnh",
              url: "/admin/management/medical-records",
            },
            { name: "DS bệnh nhân", url: "/admin/management/patients" },
            { name: "Lịch hẹn khám", url: "/admin/management/appointments" },
            {
              name: "Lịch sử khám bệnh",
              url: "/admin/management/medical-history",
            },
          ],
        },
        {
          name: "Quản lý danh mục",
          url: "/admin/catalog-management",
          children: [
            {
              name: "Danh mục chỉ số khám",
              url: "/admin/catalog-management/medical-indexes",
            },
            {
              name: "Danh mục thuốc",
              url: "/admin/catalog-management/medicines",
            },
            {
              name: "Danh mục chức vụ",
              url: "/admin/catalog-management/positions",
            },
            {
              name: "Danh mục chuyên khoa",
              url: "/admin/catalog-management/specialties",
            },
          ],
        },
        {
          name: "Quản trị hệ thống",
          url: "/admin/system-management",
          children: [
            {
              name: "Quản lý người dùng",
              url: "/admin/system-management/users",
            },
            { name: "Quản lý phòng", url: "/admin/system-management/rooms" },
            {
              name: "Danh sách quyền",
              url: "/admin/system-management/permissions",
            },
          ],
        },
      ],
    };
  },
  methods: {
    checkActive(data) {
      return this.$route.path.split("/")[2] == data.split("/")[2];
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
