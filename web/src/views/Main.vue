<template>
  <div>
    <div class="topbar text-white d-flex ai-center">
      <img src="../assets/img/logo.png" alt="" />
      <div class="flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="team fs-sm">团队成就更多</div>
      </div>
      <a href="" class="topbar-btn bgc-tabs fs-sm">立即下载</a>
    </div>
    <div class="nav bgc-tabs text-white d-flex jc-around">
      <div class="nav-item active">
        <router-link class="nav-link" tag="div" to="/">首页</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag="div" to="/">IP新游</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.topbar {
  background-color: #1a1a20;
  padding: 0.5rem 1.3rem;
  img {
    border-radius: 0.4rem;
    height: 30px;
    margin-right: 1rem;
  }
  .team {
    color: #666;
  }
  &-btn {
    border: none;
    border-radius: 0.2rem;
    padding: 0.4rem 0.5rem;
  }
}
.nav {
  padding: 1rem 0 0.6rem 0;
  &-item {
    padding-bottom: 0.1rem;
  }
  .active {
    padding-top: 0.1rem;
    border-bottom: 3px solid #fff;
  }
}
</style>