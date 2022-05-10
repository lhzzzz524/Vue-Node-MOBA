<template>
  <div id="edit">
    <h1>{{ id ? "编辑" : "新建" }}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类名称">
        <el-select v-model="model.categories" placeholder="请选择" multiple>
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor
          v-model="model.body"
          use-custom-image-handler
          @image-added="handleImageAdded"
        ></vue-editor>
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
} from "../../networks/article/edit";
import { getListData } from "../../networks/categories/list";
import axios from "axios";
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
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/admin/api/upload",
        data: formData,
      });
      const url = res.data.url;
      Editor.insertEmbed(cursorLocation, "image", url);
      resetUploader();
    },
    async save() {
      if (this.id) {
        await getUpdata(this.id, this.model);
      } else {
        await getInputData(this.model);
      }
      this.$router.push("/article/list");
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
      const optionFilter = res.data.filter((item, index) => {
        return !item.hasOwnProperty("parent");
      });
      this.parents = optionFilter;
    },
  },
  created() {
    this.getParentsData();
    this.id && this.fetch();
  },
};
</script>