<template>
  <div id="edit">
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类名称">
        <el-select v-model="model.parent" placeholder="请选择">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
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
import {
  getInputData,
  getSetInputData,
  getUpdata,
} from "../../networks/categories/edit";
import { getListData } from "../../networks/categories/list";
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
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await getSetInputData(this.id);
      this.model = res.data;
    },
    async getParentsData() {
      const res = await getListData();
      this.parents = res.data;
    },
  },
  created() {
    this.getParentsData();
    this.id && this.fetch();
  },
};
</script>