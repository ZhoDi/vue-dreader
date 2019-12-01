<template>
  <div>
    <van-tabbar v-model="selected" active-color="#1989fa" inactive-color="#7d7e80" >
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :name="item.title" :to="(item.name)">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? item.active:item.normal"
        ></van-icon>
        <span>{{item.title}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from "vant";

export default {
  name: "tabbar",
  data() {
    return {
      selected: "书架",
      tabbars: [
        {
          //name路由名字,进行跳转
          name: "bookrack",
          title: "书架",
          normal: "shujia-weixuanzhong",
          active: "shujiaxuanzhong"
        },
        {
          name: "category",
          title: "分类",
          normal: "fenlei-weixuanzhong",
          active: "fenlei1"
        },
        {
          name: "rank",
          title: "排名",
          normal: "saomapaihangweixuanzhong",
          active: "saomapaihangxuanzhong"
        },
        {
          name: "search",
          title: "搜索",
          normal: "sousuo",
          active: "sousuo"
        }
      ]
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
  },
  methods: {},
  created() {
    if (this.$route.name === "bookrack") {
      this.selected = "书架";
    } else if (this.$route.name === "category") {
      this.selected = "分类";
    } else if (this.$route.name === "rank") {
      this.selected = "排名";
    } else if (this.$route.name === "search") {
      this.selected = "搜索";
    }
  }
};
</script>

<style scoped>
.iconfont {
  font-size: 1rem;
}
.van-tabbar {
  width: 100vw;
  color: #fff;
  box-shadow: 0 -1px 0 #eee;
}
</style>
