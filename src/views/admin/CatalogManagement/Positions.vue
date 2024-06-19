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
  name: "PositionsManagement",
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
      title: "Danh mục chức vụ",
      columns: [
        { name: "Chức vụ", field: "position", width: "200px" }, // Tên cột "Chức vụ" với độ rộng 200px
        { name: "Số lượng", field: "quantity", width: "150px" }, // Tên cột "Số lượng" với độ rộng 150px
      ],
      data: [
        { position: "Giám đốc", quantity: 1 },
        { position: "Quản lý", quantity: 3 },
        { position: "Nhân viên", quantity: 15 },
        { position: "Kế toán", quantity: 2 },
        { position: "Lập trình viên", quantity: 10 },
      ],
    };
  },
  computed: {},
  /**
   * Phương thức
   */
  methods: {},
  created() {},
  /**
   * Theo dõi sự thay đổi
   */
  watch: {},
};
</script>
  
  <style>
</style>