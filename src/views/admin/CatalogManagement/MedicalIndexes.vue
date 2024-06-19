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
  name: "MedicalIndexesManagement",
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
      title: "Danh mục chỉ số khám",
      columns: [
        { name: "Tên", field: "name", width: "200px" }, // Cột "Tên" với độ rộng 200px
        { name: "Giá tiền", field: "price", width: "150px" }, // Cột "Giá tiền" với độ rộng 150px
      ],
      data: [],
    };
  },
  computed: {},
  /**
   * Phương thức
   */
  methods: {
    generateData() {
      // Số lượng dữ liệu cần sinh
      const numberOfItems = 100;

      // Sinh dữ liệu ngẫu nhiên
      for (let i = 0; i < numberOfItems; i++) {
        const randomName = "Product " + (i + 1); // Tên sản phẩm ngẫu nhiên
        const randomPrice = (Math.random() * 1000).toFixed(2); // Giá tiền ngẫu nhiên từ 0 đến 1000 với 2 chữ số thập phân

        // Thêm vào mảng data
        this.data.push({
          name: randomName, // Tên sản phẩm
          price: randomPrice, // Giá tiền sản phẩm
        });
      }
    },
  },
  created() {
    this.generateData();
  },
  /**
   * Theo dõi sự thay đổi
   */
  watch: {},
};
</script>
  
  <style>
</style>