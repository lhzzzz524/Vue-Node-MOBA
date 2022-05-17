<template>
  <div class="home">
    <Swiper></Swiper>
    <Map></Map>
    <NewsInfo :newsInfo="newsInfo" :icon="'orders-o'" :cardTitle="'新闻资讯'">
      <template #news="{ items, clickTab }">
        <div
          class="vant-news-content d-flex ai-center"
          v-for="(citem, cindex) in items.category"
          :key="cindex"
        >
          <span
            class="fs-sm"
            :style="{
              borderColor: categoryColor[clickTab],
              color: categoryColor[clickTab],
            }"
            >{{ citem.categoryName }}</span
          >
          <div class="flex-1 fs-lg">{{ citem.title }}</div>
          <time class="fs-sm">{{ citem.time }}</time>
        </div>
      </template>
    </NewsInfo>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
  </div>
</template>

<script>
import NewsInfo from "../components/Home/NewsInfo.vue";
import Swiper from "../components/Home/Swiper.vue";
import Map from "../components/Home/Map.vue";

export default {
  name: "Home",
  components: {
    NewsInfo,
    Swiper,
    Map,
  },
  data() {
    return {
      categoryColor: ["#ff3636", "1e96ab", "#f09a37", "ff3636", "#4d9cff"],
      newsInfo: [
        {
          name: "热门",
          category: new Array(5).fill().map((i) => ({
            categoryName: "热门",
            title: "元歌源·梦新皮肤最新进展",
            time: "05/16",
          })),
        },
        {
          name: "新闻",
          category: new Array(5).fill().map((i) => ({
            categoryName: "新闻",
            title: "元歌源·梦新皮肤最新进展",
            time: "05/16",
          })),
        },
        {
          name: "公告",
          category: new Array(5).fill().map((i) => ({
            categoryName: "公告",
            title: "元歌源·梦新皮肤最新进展",
            time: "05/16",
          })),
        },
        {
          name: "活动",
          category: new Array(5).fill().map((i) => ({
            categoryName: "活动",
            title: "元歌源·梦新皮肤最新进展",
            time: "05/16",
          })),
        },
        {
          name: "赛事",
          category: new Array(5).fill().map((i) => ({
            categoryName: "赛事",
            title: "元歌源·梦新皮肤最新进展",
            time: "05/16",
          })),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #ededed;
}
.vant-news-content {
  margin: 1rem 0;
  span {
    border: 1px solid #1e96ab;
    color: #1e96ab;
    border-radius: 3px;
    padding: 0 0.2rem;
    margin-right: 0.4rem;
  }
}
</style>
