<template>
  <div class="login-container">
    <div>
      <span>Đăng nhập</span>
      <div class="input-login">
        <span class="text-lo">Tên đăng nhập:</span>
        <el-input
          v-model="username"
          style="width: 240px"
          placeholder="Nhập tên đăng nhập"
        />
      </div>
      <div class="input-login">
        <span class="text-lo">Mật khẩu:</span>
        <el-input
          v-model="password"
          style="width: 240px"
          type="password"
          placeholder="Nhập mật khẩu"
          show-password
        />
      </div>
      <el-button type="success" @click="loginAsync">Đăng nhập</el-button>
    </div>
  </div>
</template>
    
    <script>
import authenticationApi from "@/js/api/authenticationApi";
export default {
  /**
   * Tên component
   */
  name: "LoginHome",
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
      username: "",
      password: "",
    };
  },
  computed: {},
  /**
   * Phương thức
   */
  methods: {
    async loginAsync() {
      const me = this;
      if (me.username == "" || me.password == "") {
        me.$toast.warning("Bạn đã nhập thiếu tên đăng nhập hoặc mật khẩu!");
        return;
      }
      let res = await authenticationApi.LoginAsync({
        username: me.username,
        password: me.password,
      });
      if (res && res.data) {
        me.$toast.success("Đăng nhập thành công");
        localStorage.setItem("jwtToken", res.data.token);
        localStorage.setItem("fullname", res.data.userInfo.fullname);
        me.$router.push("/statistics");
      }
    },
  },
  created() {},

  /**
   * Theo dõi sự thay đổi
   */
  watch: {},
};
</script>
    
    <style scope>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}
.text-lo {
  width: 200px;
}
.input-login {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
</style>