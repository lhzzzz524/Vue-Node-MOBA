<template>
  <div class="map card-mt bgc-white">
    <ul class="map-content d-flex fs-sm" :class="{ active: isUnfold === true }">
      <li
        class="d-flex flex-cl ai-center"
        v-for="(item, index) in 12"
        :key="index"
      >
        <div class="sprite sprite-news"></div>
        <span>爆料站</span>
      </li>
    </ul>
    <div class="map-unfold bgc-unfold d-flex jc-center" v-show="!isUnfold">
      <div class="sprite sprite-unfold"></div>
      <span @click="isUnfold = !isUnfold">收起</span>
    </div>
    <div class="map-unfold bgc-unfold d-flex jc-center" v-show="isUnfold">
      <div class="sprite sprite-unfold turn"></div>
      <span @click="isUnfold = !isUnfold">展开</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUnfold: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  padding-top: 1.6rem;
  &-content {
    flex-wrap: wrap;
    li {
      width: 25%;
      color: #222;
      padding-top: 0.3rem;
      margin-bottom: 1.6rem;
      text-align: center;
      border-left: 1px solid #d4d9de;
      .sprite-news {
        width: 1.7692rem;
        height: 1.5385rem;
        background-position: 63.546% 15.517%;
      }
    }
    :nth-child(4n + 1) {
      border: 0;
    }
    &.active {
      overflow: hidden;
      overflow-x: scroll;
      flex-wrap: nowrap;
      li {
        flex-shrink: 0;
        border-left: 1px solid #d4d9de;
      }
    }
  }

  &-unfold {
    padding: 0.6rem 0;
    .sprite-unfold {
      position: relative;
      top: 0.1rem;
      width: 0.7692rem;
      height: 0.7692rem;
      margin-right: 0.2rem;
      background-position: 38.577% 52.076%;
    }
  }
  .turn {
    transform: rotate(180deg);
  }
}
</style>