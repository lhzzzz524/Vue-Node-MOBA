<template>
  <div id="edit">
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getInputData } from "../../networks/edit";
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async save() {
      console.log(this.model);
      const res = await getInputData(this.model);
      console.log(res);
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
  },
};
</script>