<template>
  <div id="edit">
    <h1>{{ id ? "编辑" : "新建" }}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button>
          <i class="el-icon-plus" @click="model.items.push({})">添加</i>
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :span="12" v-for="(item, index) in model.items" :key="index">
            <el-form-item label="跳转链接">
              <el-input v-model="item.imgUrl"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top: 20px">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl()"
                :show-file-list="false"
                :on-success="(res) => $set(item, 'img', res.url)"
              >
                <img v-if="item.img" :src="item.img" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item style="text-align: center">
              <el-button
                size="small"
                type="danger"
                @click="model.skills.splice(index, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item class="button">
        <el-button class="button-box" type="primary" native-type="submit"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import About from "../../../../web/src/views/About.vue";
import {
  getInputData,
  getSetInputData,
  getUpdata,
} from "../../networks/ads/edit";

export default {
  components: { About },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      model: {
        name: "",
        items: [],
      },
    };
  },
  methods: {
    uploadUrl() {
      return "http://localhost:3000/admin/api/upload";
    },
    afterUpload(res) {
      this.$set(this.model, "photo", res.url);
    },
    async save() {
      if (this.id) {
        await getUpdata(this.id, this.model);
      } else {
        await getInputData(this.model);
      }
      this.$router.push("/ads/list");
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

<style scoped>
/deep/ .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.button-box {
  margin-left: -120px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 400px;
  height: 175px;
  line-height: 175px;
  text-align: center;
}
.avatar {
  width: 400px;
  height: 175px;
  display: block;
}
</style>