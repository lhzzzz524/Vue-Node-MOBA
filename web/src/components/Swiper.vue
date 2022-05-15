<template>
  <div class="swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in imgList" :key="index">
        <img :src="item" alt="" />
      </swiper-slide>
      <div class="swiper-pagination myPgn" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      imgList: [
        require("../assets/img/swiper1.jpeg"),
        require("../assets/img/swiper2.jpeg"),
        require("../assets/img/swiper3.jpeg"),
      ],
      swiperOptions: {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination {
    text-align: right;
    padding: 0 1rem 0.5rem 0;
  }

  /deep/ .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 2px;
    background: white;
  }
  /deep/ .swiper-pagination-bullet-active {
    background: #4b67af;
  }
}
</style>