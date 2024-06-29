<template>
  <div>
    <ms-admin-grid
      :title="title"
      :columns="columns"
      :data="data"
      :total="total"
      :idField="idField"
      @loadData="loadData"
      @editRow="addoredit"
      @add="addoredit"
      @deleteRow="deleteRow"
    ></ms-admin-grid>
  </div>

  <ms-popup v-if="showPopup" @close="closePopup" @save="save">
    <template v-slot:header>
      {{ titleDetail }}
    </template>
    <template v-slot:body>
      <div class="field-item">
        <div style="width: 150px">Bệnh nhân khám</div>
        <ms-combobox
          :useApi="false"
          :dataProps="dataPatient"
          v-model="currentItem.PatientID"
          propValue="PatientID"
          propName="fullname"
          ref="cbxPatient"
          style="width: 500px"
        ></ms-combobox>
      </div>
      <div class="field-item">
        <div style="width: 150px">Thời gian khám</div>
        <el-date-picker
          v-model="currentItem.DateScheduled"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          type="date"
          placeholder="Chọn ngày"
        >
        </el-date-picker>
      </div>
      <div class="field-item">
        <div style="width: 150px">Nội dung khám</div>
        <ms-input
          :inpPopupDetail="true"
          v-model="currentItem.ExamContent"
        ></ms-input>
      </div>
      <div class="field-item">
        <div style="width: 150px">Trạng thái</div>
        <ms-input
          :inpPopupDetail="true"
          v-model="currentItem.Status"
        ></ms-input>
      </div>
      <div class="field-item">
        <div style="width: 150px">Bác sĩ khám</div>
        <ms-combobox
          :useApi="false"
          :dataProps="dataDoctor"
          v-model="currentItem.DoctorID"
          propValue="DoctorID"
          propName="DoctorName"
          ref="cbxDoctor"
          style="width: 500px"
        ></ms-combobox>
      </div>
    </template>
    <template v-slot:footer></template>
  </ms-popup>
</template>
  
  <script>
import examScheduleApi from "@/js/api/managerment/examScheduleApi";
import patientApi from "@/js/api/managerment/patientApi";
export default {
  /**
   * Tên component
   */
  name: "ExamScheduleManagement",
  /**
   * Hứng nhận
   */
  props: {},
  /**
   * Component được sử dụng
   */
  components: {},
  /**
   * Data
   */
  data() {
    return {
      title: "Danh sách lịch hẹn khám",
      columns: [
        { name: "Họ và tên", field: "Fullname", width: "200px" }, // Tên cột "Họ và tên" với độ rộng 200px
        { name: "Mã bệnh nhân", field: "PatientNumber", width: "150px" }, // Tên cột "Mã bệnh nhân" với độ rộng 150px
        {
          name: "Thời gian khám",
          field: "DateScheduled",
          type: "datetime",
          width: "150px",
        }, // Tên cột "Thời gian khám" với độ rộng 150px
        { name: "Bác sĩ khám", field: "DoctorName", width: "150px" }, // Tên cột "Mã bệnh nhân" với độ rộng 150px
        { name: "Nội dung khám", field: "ExamContent", width: "150px" }, // Tên cột "Mã bệnh nhân" với độ rộng 150px
        { name: "Trạng thái", field: "StatusName", width: "150px" }, // Tên cột "Trạng thái" với độ rộng 150px
      ],
      data: [],
      total: 0,
      payload: {
        currentPage: 1,
        pageSize: 20,
        textSearch: "",
      },
      showPopup: false,
      titleDetail: "Chi tiết lịch hẹn khám",
      currentItem: {},
      isAdd: false,
      idField: "ExamScheduleID",
      dataPatient: [],
      dataDoctor: [],
    };
  },
  computed: {},
  /**
   * Phương thức
   */
  methods: {
    /**
     * Load data
     * @param {*} param
     */
    async loadData(param = {}) {
      const me = this;
      let payload = { ...me.payload, ...param };
      let res = await examScheduleApi.getListAsync(payload);
      if (res && res.data.length >= 0 && res.total >= 0) {
        me.data = res.data;
        me.total = res.total;
      }
    },

    /**
     * Đóng form
     */
    closePopup() {
      const me = this;
      me.showPopup = false;
      me.loadData();
    },

    /**
     * Thêm hoặc sửa
     * @param {*} data
     * @param {*} isNew
     */
    async addoredit(data = {}, isNew = false) {
      const me = this;
      me.currentItem = {};
      me.isAdd = isNew;
      me.currentItem = data;
      let res = await patientApi.getDataComboboxAsync();
      if (res && res.length >= 0) {
        me.dataPatient = res;
      }
      me.showPopup = true;
    },

    /**
     * Lưu fỏrm
     * @param {*} isNew
     */
    async save() {
      const me = this;
      let res = await examScheduleApi.insertOrUpdateAsync(me.currentItem);
      if (me.isAdd) {
        res
          ? me.$toast.success("Thêm mới thành công")
          : me.$toast.error("Thêm mới thất bại");
      } else {
        res
          ? me.$toast.success("Sửa thành công")
          : me.$toast.error("Sửa thất bại");
      }
      me.showPopup = false;
      await me.loadData();
    },

    /**
     * Xóa
     * @param {*} data
     */
    async deleteRow(data) {
      const me = this;
      let res = await examScheduleApi.deleteAsync(
        `${me.idField}=${data[me.idField]}`
      );
      if (res) {
        me.$toast.success("Xóa thành công");
      } else {
        me.$toast.error("Xóa thất bại");
      }
      await me.loadData();
    },
  },
  async created() {
    const me = this;
    me.loadData();
  },

  /**
   * Theo dõi sự thay đổi
   */
  watch: {},
};
</script>
  
  <style>
.field-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>