<template>
  <div class="card card-mt bgc-white">
    <div class="card-title fs-xl">
      <van-icon :name="icon" class="news-icon" />
      <span>{{ cardTitle }}</span>
    </div>
    <van-tabs
      v-model="active"
      @click="onClick"
      @change="onChange"
      swipeable
      animated
    >
      <van-tab
        v-for="(item, index) in newsInfo"
        :key="index"
        :title="item.name"
      >
        <slot name="news" :items="item" :clickTab="clickTab"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: "" },
    cardTitle: { type: String, default: "" },
    newsInfo: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      active: 0,
      clickTab: 0,
    };
  },
  methods: {
    onClick(name) {
      this.clickTab = name;
    },
    onChange(name) {
      this.clickTab = name;
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .van-tab__pane {
  padding: 0 1.7rem;
}
/deep/ .van-tabs__nav--line {
  border-color: #db9e3f;
  padding-bottom: 7px;
}

/deep/ .van-tab--active {
  color: #db9e3f;
}

/deep/ .van-tabs__line {
  background-color: #db9e3f;
  width: 2rem;
}
.card {
  .card-title {
    padding: 1.5rem 0;
    margin: 0 1.5rem;
    border-bottom: 1px solid #d4d9de;
    span {
      margin-left: 0.3rem;
    }
  }
}
</style>