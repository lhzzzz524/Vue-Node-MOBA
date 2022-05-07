<template>
  <div id="edit">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <el-form-item label="名字">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="图片">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl()"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.photo" :src="model.photo" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item in categoryArr"
                :key="item._id"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              style="margin-top: 12px"
              :max="10"
              v-model="model.scores.difficult"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              style="margin-top: 12px"
              :max="10"
              v-model="model.scores.skills"
            ></el-rate> </el-form-item
          ><el-form-item label="攻击">
            <el-rate
              style="margin-top: 12px"
              :max="10"
              v-model="model.scores.attack"
            ></el-rate> </el-form-item
          ><el-form-item label="生存">
            <el-rate
              style="margin-top: 12px"
              :max="10"
              v-model="model.scores.survive"
            ></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.goods1" multiple>
              <el-option
                v-for="item in goods"
                :key="item._id"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.goods2" multiple>
              <el-option
                v-for="item in goods"
                :key="item._id"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能">
          <el-button>
            <i class="el-icon-plus" @click="model.skills.push({})">添加技能</i>
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col
              :span="12"
              v-for="(item, index) in model.skills"
              :key="index"
            >
              <el-form-item label="技能名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="技能图标">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl()"
                  :show-file-list="false"
                  :on-success="(res) => $set(item, 'icon', res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="技能描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  size="small"
                  type="danger"
                  @click="model.skills.splice(index, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item class="button">
        <el-button class="button-box" type="primary" native-type="submit"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  getInputData,
  getSetInputData,
  getUpdata,
} from "../../networks/heros/edit";
import { getListData } from "../../networks/categories/list";
import { getGoodsData } from "../../networks/goods/list";

export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      model: {
        name: "",
        scores: {},
        skills: [],
      },
      categoryArr: [],
      goods: [],
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
      this.$router.push("/heros/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await getSetInputData(this.id);
      // this.model = Object.assign({}, this.model, res.data);
      this.model = res.data;
    },
    async category() {
      const res = await getListData();
      const goodsRes = await getGoodsData();
      this.categoryArr = res.data;
      this.goods = goodsRes.data;
    },
  },
  created() {
    this.category();
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
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>