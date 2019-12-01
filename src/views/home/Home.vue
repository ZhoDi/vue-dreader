<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/Tabbar";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    tabbar
  },
  methods: {}
};
</script>

<style>
</style>