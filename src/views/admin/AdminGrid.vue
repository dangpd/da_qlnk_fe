<template>
  <div class="admin-content">
    <div class="header">
      <img class="header-img" src="../../assets/image/logonhakhoa.jpg" alt="" />
      Xin chào, Đăng
    </div>
    <div class="line"></div>
    <div class="title">{{ title }}</div>
    <div class="under-title">
      <MsInput
        :placeholder="'Tìm kiếm'"
        :required="true"
        :styleInput="{ width: '500px', color: 'blue' }"
        @enterInput="enterInput"
        v-model="textSearch"
      ></MsInput>
      <MsButton
        @actionButtonClick="actionButtonClick"
        :placeholder="'Thêm mới'"
      ></MsButton>
    </div>
    <div class="grid-viewer">
      <MsGridViewer
        :columns="columns"
        :data="data"
        :totalRecord="103"
        @editRow="editRow"
        @deleteRow="deleteRow"
        @loadData="loadData"
      ></MsGridViewer>
    </div>
  </div>
</template>
  
  <script>
import MsInput from "@/components/MsInput.vue";
import MsButton from "@/components/MsButton.vue";
import MsGridViewer from "@/components/MsGridViewer.vue";
export default {
  /**
   * Tên component
   */
  name: "AdminNavbar",
  /**
   * Hứng nhận
   */
  props: {
    title: {
      type: String,
      default: "",
    },
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  /**
   * Component được sử dụng
   */
  components: { MsInput, MsButton, MsGridViewer },
  /**
   * Data
   */
  data() {
    return {
      textSearch: "",
    };
  },
  computed: {},
  /**
   * Phương thức
   */
  methods: {
    actionButtonClick() {
      console.log("ActionButton");
    },
    enterInput(value) {
      console.log(value);
    },
    deleteRow(data) {
      console.log(data);
      this.$toast.success("delete thành công");
    },
    editRow(data) {
      console.log(data);
      this.$toast.success("edit thành công");
    },
    loadData(payload) {
      console.log(payload);
    },
  },
  created() {},
  /**
   * Theo dõi sự thay đổi
   */
  watch: {},
};
</script>
  
  <style>
@import url(../../assets/css/admin/admingrid.css);
</style>