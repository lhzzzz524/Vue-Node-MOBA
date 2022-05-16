<template>
  <div class="home">
    <Swiper></Swiper>
    <Map></Map>
  </div>
</template>

<script>
import Swiper from "../components/Home/Swiper.vue";
import Map from "../components/Home/Map.vue";
export default {
  name: "Home",
  components: {
    Swiper,
    Map,
  },
  data() {
    return {};
  },
};
</script>
