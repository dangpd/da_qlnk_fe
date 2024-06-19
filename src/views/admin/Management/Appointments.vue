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
  name: "AppointmentsManagement",
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
      title: "Danh sách lịch hẹn khám",
      columns: [
        { name: "Họ và tên", field: "fullName", width: "200px" }, // Tên cột "Họ và tên" với độ rộng 200px
        { name: "Mã bệnh nhân", field: "patientCode", width: "150px" }, // Tên cột "Mã bệnh nhân" với độ rộng 150px
        { name: "Thời gian khám", field: "examTime", width: "150px" }, // Tên cột "Thời gian khám" với độ rộng 150px
        { name: "Chỉ số khám", field: "examIndex", width: "150px" }, // Tên cột "Chỉ số khám" với độ rộng 150px
        { name: "Trạng thái", field: "status", width: "150px" }, // Tên cột "Trạng thái" với độ rộng 150px
      ],
      data: [
        {
          fullName: "Nguyễn Văn A",
          patientCode: "BN001",
          examTime: "10:00 - 11:00, 15/06/2024",
          examIndex: "120/80 mmHg",
          status: "Đã khám",
        },
        {
          fullName: "Trần Thị B",
          patientCode: "BN002",
          examTime: "08:30 - 09:30, 14/06/2024",
          examIndex: "140/90 mmHg",
          status: "Chờ khám",
        },
        // Các dòng dữ liệu khác tương tự
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