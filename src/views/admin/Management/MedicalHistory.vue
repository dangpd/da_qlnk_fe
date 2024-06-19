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
  name: "MedicalHistoryManagement",
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
      title: "Danh sách lịch sử khám bệnh",
      columns: [
        { name: "Họ và tên", field: "fullName", width: "200px" }, // Cột Họ và tên, độ rộng 200px
        { name: "Mã bệnh nhân", field: "patientCode", width: "150px" }, // Cột Mã bệnh nhân, độ rộng 150px
        { name: "Thời gian khám", field: "examTime", width: "200px" }, // Cột Thời gian khám, độ rộng 200px
        { name: "Chỉ số khám", field: "examIndex", width: "150px" }, // Cột Chỉ số khám, độ rộng 150px
        { name: "Kết luận khám", field: "diagnosis", width: "250px" }, // Cột Kết luận khám, độ rộng 250px
        { name: "Trạng thái", field: "status", width: "150px" }, // Cột Trạng thái, độ rộng 150px
      ],
      data: [
        {
          fullName: "Nguyễn Văn A",
          patientCode: "BN001",
          examTime: "08:00 - 09:00, 2024-06-18",
          examIndex: "120/80 mmHg",
          diagnosis: "Bình thường",
          status: "Đã khám",
        },
        {
          fullName: "Trần Thị B",
          patientCode: "BN002",
          examTime: "09:30 - 10:30, 2024-06-18",
          examIndex: "140/90 mmHg",
          diagnosis: "Cần theo dõi",
          status: "Chờ khám",
        },
        {
          fullName: "Phạm Văn C",
          patientCode: "BN003",
          examTime: "10:30 - 11:30, 2024-06-18",
          examIndex: "110/70 mmHg",
          diagnosis: "Không nguy hiểm",
          status: "Đã khám",
        },
        // Các dòng dữ liệu khác
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