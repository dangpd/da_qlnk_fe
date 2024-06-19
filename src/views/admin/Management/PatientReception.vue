<template>
  <div>
    <AdminGrid :title="title" :columns="columns"></AdminGrid>
  </div>
</template>
  
  <script>
import AdminGrid from "../AdminGrid.vue";
export default {
  /**
   * Tên component
   */
  name: "PatientReceptionManagement",
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
      title: "Danh sách tiếp đón bệnh nhân",
      columns: [
        { name: "Name", field: "name", width: "200px" },
        { name: "Age", field: "age", width: "300px" },
        { name: "Country", field: "country" },
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