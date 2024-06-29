<template>
  <div :class="{}">
    <input
      class="m-input"
      :type="type"
      :placeholder="placeholder"
      :style="styleInput"
      v-model="value"
      @input="onInput"
      @keyup.enter="onEnter"
      :class="{ 'error-input': showError, 'inp-popup-detail': inpPopupDetail }"
    />
    <div class="under_input" v-show="showError">
      <label style="font-size: 14px">{{ messError }}</label>
    </div>
  </div>
</template>
  
<script>
export default {
  /**
   * Tên component
   */
  name: "MsInput",
  /**
   * Hứng nhận
   */
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    styleInput: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    inpPopupDetail: {
      type: Boolean,
      default: false,
    },
  },

  /**
   * Component được sử dụng
   */
  components: {},
  directives: {},
  /**
   * Data
   */
  data() {
    return {
      value: "",
      showError: false,
      messError: "",
    };
  },
  /**
   * Phương thức
   */
  methods: {
    validate() {
      if (!this.value || this.value == "") {
        this.showError = true;
        this.messError = "Không được bỏ trống";
      } else {
        this.showError = false;
        this.messError = "";
      }
    },
    onEnter() {
      if (this.required) {
        this.validate();
      }
      if (!this.showError) {
        this.$emit("enterInput", this.value);
      }
    },
  },
  created() {
    this.value = this.modelValue;
  },
  /**
   * Theo dõi sự thay đổi
   */
  watch: {
    value(newVal) {
      this.value = newVal;
      this.$emit("update:modelValue", newVal);
      if (this.required) {
        this.validate();
      }
    },
  },
};
</script>
  
<style>
@import url(../assets/css/components/input.css);
.inp-popup-detail {
  width: 500px;
}
</style>