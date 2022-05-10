<template>
  <div id="edit">
    <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  getInputData,
  getSetInputData,
  getUpdata,
} from "../../networks/adminUsers/edit";
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      model: {},
      parents: [],
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await getUpdata(this.id, this.model);
      } else {
        await getInputData(this.model);
      }
      this.$router.push("/adminUser/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await getSetInputData(this.id);
      this.model = res.data;
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>