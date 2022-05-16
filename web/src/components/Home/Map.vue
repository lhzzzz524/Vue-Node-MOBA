<template>
  <div class="map card-pt bgc-white">
    <ul class="map-content d-flex fs-sm">
      <li
        class="d-flex flex-cl ai-center"
        v-for="(item, index) in 12"
        :key="index"
      >
        <div class="sprite sprite-news"></div>
        <span>爆料站</span>
      </li>
    </ul>
    <div class="map-unfold bgc-unfold d-flex jc-center">
      <div class="sprite sprite-unfold"></div>
      <span>收起</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.map {
  padding-top: 1.6rem;
  &-content {
    flex-wrap: wrap;
    li {
      width: 25%;
      color: #222;
      margin-bottom: 1.5rem;
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
}
</style>