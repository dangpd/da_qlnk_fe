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
  name: "UsersManagement",
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
      title: "Danh sách người dùng",
      columns: [
        { name: "Họ và Tên", field: "name", width: "200px" },
        { name: "Tài khoản", field: "account", width: "200px" },
        { name: "Chức vụ", field: "position", width: "150px" },
        { name: "Phòng", field: "room", width: "150px" },
        { name: "Chuyên môn", field: "specialty", width: "200px" },
        { name: "Quyền", field: "permissions", width: "150px" },
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
      const numberOfItems = 102;

      // Mảng chứa các chức vụ có sẵn
      const positions = [
        "Manager",
        "Developer",
        "Designer",
        "Tester",
        "Support",
      ];

      // Mảng chứa các phòng ban có sẵn
      const rooms = ["Room A", "Room B", "Room C", "Room D"];

      // Mảng chứa các chuyên môn có sẵn
      const specialties = [
        "Cardiology",
        "Dermatology",
        "Neurology",
        "Pediatrics",
      ];

      // Mảng chứa các quyền có sẵn
      const permissions = ["Read", "Write", "Execute"];

      // Sinh dữ liệu ngẫu nhiên
      for (let i = 0; i <= numberOfItems; i++) {
        const randomName = "Person " + (i + 1);
        const randomAccount = "user" + (i + 1);
        const randomPosition =
          positions[Math.floor(Math.random() * positions.length)];
        const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
        const randomSpecialty =
          specialties[Math.floor(Math.random() * specialties.length)];
        const randomPermissions =
          permissions[Math.floor(Math.random() * permissions.length)];

        // Thêm vào mảng data
        this.data.push({
          name: randomName,
          account: randomAccount,
          position: randomPosition,
          room: randomRoom,
          specialty: randomSpecialty,
          permissions: randomPermissions,
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