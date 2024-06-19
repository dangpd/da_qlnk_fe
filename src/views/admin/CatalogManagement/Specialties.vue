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
  name: "SpecialtiesManagement",
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
      title: "Danh mục chuyên khoa",
      columns: [
        { name: "Chuyên khoa", field: "specialty", width: "200px" }, // Tên cột "Chuyên khoa" với độ rộng 200px
        { name: "Số lượng", field: "quantity", width: "150px" }, // Tên cột "Số lượng" với độ rộng 150px
      ],
      data: [
        { specialty: "Nhi khoa", quantity: 5 },
        { specialty: "Nội khoa", quantity: 10 },
        { specialty: "Ngoại khoa", quantity: 7 },
        { specialty: "Da liễu", quantity: 3 },
        { specialty: "Răng hàm mặt", quantity: 8 },
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