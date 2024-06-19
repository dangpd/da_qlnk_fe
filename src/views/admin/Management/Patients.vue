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
  name: "PatientsManagement",
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
      title: "Danh sách bệnh nhân",
      columns: [
        { name: "Họ và tên", field: "fullName", width: "200px" }, // Tên cột "Họ và tên" với độ rộng 200px
        { name: "Mã bệnh nhân", field: "patientCode", width: "150px" }, // Tên cột "Mã bệnh nhân" với độ rộng 150px
        { name: "Ngày sinh", field: "dateOfBirth", width: "150px" }, // Tên cột "Ngày sinh" với độ rộng 150px
        { name: "Giới tính", field: "gender", width: "100px" }, // Tên cột "Giới tính" với độ rộng 100px
        { name: "Số điện thoại", field: "phoneNumber", width: "150px" }, // Tên cột "Số điện thoại" với độ rộng 150px
        { name: "Địa chỉ", field: "address", width: "250px" }, // Tên cột "Địa chỉ" với độ rộng 250px
        { name: "CCCD", field: "cccd", width: "150px" }, // Tên cột "CCCD" với độ rộng 150px
        {
          name: "Chuẩn đoán gần nhất",
          field: "latestDiagnosis",
          width: "250px",
        }, // Tên cột "Chuẩn đoán gần nhất" với độ rộng 250px
        { name: "Ngày khám gần nhất", field: "latestExamDate", width: "150px" }, // Tên cột "Ngày khám gần nhất" với độ rộng 150px
      ],
      data: [
        {
          fullName: "Nguyễn Văn A",
          patientCode: "BN001",
          dateOfBirth: "01/01/1990",
          gender: "Nam",
          phoneNumber: "0901234567",
          address: "123 Đường ABC, Quận XYZ, TP HCM",
          cccd: "123456789",
          latestDiagnosis: "Suy tim cấp",
          latestExamDate: "15/06/2024",
        },
        {
          fullName: "Trần Thị B",
          patientCode: "BN002",
          dateOfBirth: "10/05/1985",
          gender: "Nữ",
          phoneNumber: "0987654321",
          address: "456 Đường XYZ, Quận ABC, Hà Nội",
          cccd: "987654321",
          latestDiagnosis: "Viêm đường hô hấp",
          latestExamDate: "12/06/2024",
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