<template>
  <div>
    <AdminGrid :title="title" :columns="columns" :data="data"></AdminGrid>
  </div>
</template>
  
  <script>
import AdminGrid from "../AdminGrid.vue";
export default {
  /**
   * Tên component
   */
  name: "PermissionsManagement",
  /**
   * Hứng nhận
   */
  props: {},
  /**
   * Component được sử dụng
   */
  components: { AdminGrid },
  /**
   * Data
   */
  data() {
    return {
      title: "Danh sách quyền",
      columns: [
        { name: "Tên quyền", field: "permissionName", width: "200px" },
        { name: "Số lượng", field: "quantity", width: "100px" },
      ],
      data: [],
    };
  },
  computed: {},
  /**
   * Phương thức
   */
  methods: {
    generatePermissionData() {
      // Số lượng dữ liệu cần sinh
      const numberOfItems = 50; // Ví dụ 50 quyền

      // Mảng chứa các tên quyền có sẵn
      const permissionNames = [
        "Quyền A",
        "Quyền B",
        "Quyền C",
        "Quyền D",
        "Quyền E",
        "Quyền F",
        "Quyền G",
        "Quyền H",
        "Quyền I",
        "Quyền J",
      ];

      // Sinh dữ liệu ngẫu nhiên
      for (let i = 0; i < numberOfItems; i++) {
        const randomPermissionName =
          permissionNames[Math.floor(Math.random() * permissionNames.length)];
        const randomQuantity = Math.floor(Math.random() * 100 + 1); // Số lượng từ 1 đến 100

        // Thêm vào mảng data
        this.data.push({
          permissionName: randomPermissionName,
          quantity: randomQuantity,
        });
      }
    },
  },
  created() {
    this.generatePermissionData();
  },
  /**
   * Theo dõi sự thay đổi
   */
  watch: {},
};
</script>
  
  <style>
</style>