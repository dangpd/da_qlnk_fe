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
  name: "MedicinesManagement",
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
      title: "Danh mục thuốc",
      columns: [
        { name: "Tên", field: "name", width: "200px" }, // Tên cột "Tên" với độ rộng 200px
        { name: "Giá tiền", field: "price", width: "150px" }, // Tên cột "Giá tiền" với độ rộng 150px
      ],
      data: [
        { name: "Sản phẩm A", price: 100 },
        { name: "Sản phẩm B", price: 200 },
        { name: "Sản phẩm C", price: 150 },
        { name: "Sản phẩm D", price: 300 },
        { name: "Sản phẩm E", price: 250 },
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