<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="photo" label="英雄头像">
        <template slot-scope="scope">
          <img :src="scope.row.photo" alt="" style="height: 4rem" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/heros/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="del(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getListData, getDelData } from "../../networks/heros/list";
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await getListData();
      this.items = res.data;
    },
    del(row) {
      this.$confirm(`是否删除改英雄${row.name}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await getDelData(row._id);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.fetch();
  },
};
</script>