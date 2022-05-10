<template>
  <div class="login">
    <el-card header="请登录">
      <el-form @submit.native.prevent="login">
        <el-form-item label="账号">
          <el-input v-model="model.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getLogin } from "../networks/login/login";
export default {
  data() {
    return {
      model: {
        userName: "",
        passWord: "",
      },
    };
  },
  methods: {
    async login() {
      const res = await getLogin(this.model);
      localStorage.token = res.data.token;
      this.$router.push("/");
    },
  },
};
</script>


<style scoped>
.el-card {
  margin: 0 auto;
  margin-top: 160px;
  text-align: center;
  width: 300px;
}
.el-button {
  margin-top: 10px;
}
</style>