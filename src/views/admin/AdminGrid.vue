<template>
  <div class="admin-content">
    <div class="header">
      <img class="header-img" src="../../assets/image/logonhakhoa.jpg" alt="" />
      Xin chào, Đăng
    </div>
    <div class="line"></div>
    <div class="title">{{ title }}</div>
    <div class="under-title">
      <ms-input
        :placeholder="'Tìm kiếm'"
        :inpPopupDetail="true"
        @enterInput="enterInput"
        v-model="textSearch"
      ></ms-input>
      <ms-button
        v-if="showButtonAdd"
        @actionButtonClick="actionButtonClick"
        :placeholder="'Thêm mới'"
      ></ms-button>
    </div>
    <div class="grid-viewer">
      <ms-grid-viewer
        :columns="columns"
        :data="data"
        :totalRecord="total"
        @editRow="editRow"
        @deleteRow="deleteRow"
        @loadData="loadData"
        :showAction="showAction"
      ></ms-grid-viewer>
    </div>
  </div>
</template>
  
  <script>
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
    total: {
      type: Number,
      default: 0,
    },
    idField: {
      type: String,
      default: "",
    },
    showButtonAdd: {
      type: Boolean,
      default: true,
    },
    showAction: {
      type: Boolean,
      default: true,
    },
  },
  /**
   * Component được sử dụng
   */
  components: {},
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
      let obj = {
        [this.idField]: 0,
      };
      this.$emit("add", this.idField ? obj : {}, true);
    },

    enterInput(value) {
      const me = this;
      setTimeout(() => {
        me.$emit("loadData", {
          currentPage: 1,
          pageSize: 20,
          textSearch: value,
        });
      }, 300);
    },

    deleteRow(data) {
      this.$emit("deleteRow", data);
    },

    editRow(data) {
      this.$emit("editRow", data, false);
    },

    loadData(payload) {
      const me = this;
      me.$emit("loadData", {
        currentPage: payload.pageChoice,
        pageSize: payload.pageSize,
        textSearch: me.textSearch,
      });
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