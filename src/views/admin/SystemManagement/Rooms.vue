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
  name: "RoomsManagement",
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
      title: "Danh sách phòng khám",
      columns: [
        { name: "Tên phòng", field: "roomName", width: "200px" },
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
    generateRoomData() {
      // Số lượng dữ liệu cần sinh
      const numberOfItems = 50; // Ví dụ 50 phòng

      // Mảng chứa các tên phòng có sẵn
      const roomNames = [
        "Phòng A",
        "Phòng B",
        "Phòng C",
        "Phòng D",
        "Phòng E",
        "Phòng F",
        "Phòng G",
        "Phòng H",
        "Phòng I",
        "Phòng J",
      ];

      // Sinh dữ liệu ngẫu nhiên
      for (let i = 0; i < numberOfItems; i++) {
        const randomRoomName =
          roomNames[Math.floor(Math.random() * roomNames.length)];
        const randomQuantity = Math.floor(Math.random() * 100 + 1); // Số lượng từ 1 đến 100

        // Thêm vào mảng data
        this.data.push({
          roomName: randomRoomName,
          quantity: randomQuantity,
        });
      }
    },
  },
  created() {
    this.generateRoomData();
  },
  /**
   * Theo dõi sự thay đổi
   */
  watch: {},
};
</script>
  
  <style>
</style>