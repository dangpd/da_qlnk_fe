<template>
  <div class="ms-grid-viewer">
    <div class="table-wrapper">
      <table class="full-width-table">
        <thead class="table-thead">
          <tr v-if="serial" class="serial">
            STT
          </tr>
          <tr
            v-for="(item, index) in columns"
            :key="index"
            class="th-item"
            :style="{ width: item.width }"
          >
            {{
              item.name
            }}
          </tr>
        </thead>
        <tbody class="table-tbody">
          <tr
            v-for="(item, index) in data"
            :key="index"
            @click="trClick(item)"
            @dblclick="rowOnDblClick(item)"
            class="table-row"
          >
            <td v-if="serial" class="serial">{{ index + 1 }}</td>
            <!-- STT -->
            <td
              class="tr-item"
              v-for="(column, colIndex) in columns"
              :key="colIndex"
              :style="{ width: column.width }"
            >
              {{ item[column.field] }}
            </td>
            <td class="tr-action icon-delete" @click.stop="deleteRow(item)">
              <i class="fa-regular fa-trash-can"></i>
            </td>
            <td
              class="tr-action icon-edit"
              style="margin-right: 50px"
              @click.stop="editRow(item)"
            >
              <i class="fa-solid fa-pen"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table__paging" v-if="true">
      <div class="paging__left">
        Tổng số bản ghi: <b>{{ totalRecord }}</b>
      </div>
      <div class="paging__right">
        <div class="m-pagding-right-left">
          <div>
            <MsSelectBox :data="dataSelectBox" v-model="pageSize"></MsSelectBox>
          </div>
        </div>
        <div class="m-pagding-right-right">
          <div class="m-page-number-group">
            <span v-show="pageChoice > 1" @click="prePage" class="text-next-pre"
              >Pre</span
            >
            <button
              class="m-page-number"
              v-for="(item, index) in pageNumber"
              :key="index"
              :class="{ 'page-number-select': pageChoice == item }"
              @click="choosePageChoice(item)"
            >
              {{ item }}
            </button>
            <span
              v-show="pageChoice <= totalRecord / pageSize"
              @click="nextPage"
              class="text-next-pre"
              >Next</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsSelectBox from "@/components/MsSelectBox.vue";

export default {
  name: "MsGridViewer",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    totalRecord: {
      type: Number,
      default: 0,
    },
    serial: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    MsSelectBox,
  },
  computed: {
    dataSelectBox() {
      return [
        { feildShow: "10 bản ghi trên trang", feildValue: 10 },
        { feildShow: "20 bản ghi trên trang", feildValue: 20 },
        { feildShow: "50 bản ghi trên trang", feildValue: 50 },
        { feildShow: "70 bản ghi trên trang", feildValue: 70 },
        { feildShow: "100 bản ghi trên trang", feildValue: 100 },
      ];
    },
  },
  data() {
    return {
      pageSize: 10,
      pageNumber: [],
      pageChoice: 1,
    };
  },
  methods: {
    trClick(row) {
      console.log(row);
    },
    rowOnDblClick(row) {
      console.log(row);
    },
    deleteRow(row) {
      this.$emit("deleteRow", row);
    },
    editRow(row) {
      this.$emit("editRow", row);
    },

    prePage() {
      this.pageChoice -= 1;
      this.createPageNumber();
      this.$emit("loadData", {
        pageChoice: this.pageChoice,
        pageSize: this.pageSize,
      });
    },

    nextPage() {
      this.pageChoice += 1;
      this.createPageNumber();
      this.$emit("loadData", {
        pageChoice: this.pageChoice,
        pageSize: this.pageSize,
      });
    },
    choosePageChoice(value) {
      if (!isNaN(value)) {
        this.pageChoice = value;
        this.createPageNumber();
        this.$emit("loadData", {
          pageChoice: this.pageChoice,
          pageSize: this.pageSize,
        });
      }
    },
    createPageNumber() {
      let totalPages = Math.ceil(this.totalRecord / this.pageSize);
      let currentPage = this.pageChoice;
      let pagination = [];

      if (totalPages <= 5) {
        // Less than or equal to 5 pages
        for (let i = 1; i <= totalPages; i++) {
          pagination.push(i);
        }
      } else {
        // More than 5 pages
        if (currentPage <= 2) {
          pagination = [1, 2, 3, "...", totalPages];
        } else if (currentPage >= totalPages - 1) {
          pagination = [1, "...", totalPages - 2, totalPages - 1, totalPages];
        } else {
          pagination = [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
          ];
        }
      }
      this.pageNumber = pagination;
    },
  },
  mounted() {
    this.createPageNumber();
  },
  watch: {
    pageSize: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.pageChoice = 1;
          this.createPageNumber();
          this.$emit("loadData", {
            pageChoice: 1,
            pageSize: newVal,
          });
        }
      },
    },
  },
};
</script>

<style scoped>
@import url(../assets/css/components/gridviewer.css);
</style>
