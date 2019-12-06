<template>
  <div class="book-div">
    <div class="book-head">
      <van-nav-bar
        right-text="按钮"
        :border="false"
        left-arrow
        z-index="0"
        style="background-color:transparent;"
      >
        <van-icon name="search" slot="right" />
      </van-nav-bar>
      <van-image
        src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3397751%2F3397751_b118a005fae5435d943bf169f6d213c4.jpg%2F"
        :show-loading="true"
        radius=0.16rem
        class="book-img"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
      <div class="book-info">
        <p class="book-title">你在哪里</p>
        <p class="book-author">
          <span style="color:#FECC41">赵迪</span> | 瑶池文化
        </p>
        <p class="book-word">
          <span style="color:#FECC41">5千书币/千字</span> | 300万字
        </p>
        <p class="short-intro">开通VIP免广告阅读本书 ></p>
      </div>
    </div>
    <div class="book-score">
      <div>
        <span style="float:left;">
          <p class="p-score p-score-title">4.6</p>
          <van-rate
            v-model="startNumber"
            allow-half
            void-icon="star"
            void-color="#ccc"
            size="0.7rem"
          />
        </span>
        <p class="p-explain">小编评分</p>
      </div>
      <div>
        <p class="p-score">39.7%</p>
        <p class="p-explain">读者留存</p>
      </div>
      <div>
        <p class="p-score">1369</p>
        <p class="p-explain">今日人气</p>
      </div>
      <div>
        <p class="p-score">9814</p>
        <p class="p-explain">累计人气</p>
      </div>
    </div>
    <van-divider />
    <div class="book-intro">
      <p class="book-intro-title">简介</p>
      <p class="book-intro-label-p">
        <span class="book-intro-label">玄幻</span>
        <span class="book-intro-label">武侠</span>
      </p>
      <p class="book-intro-intro">司空见惯分班考试九点半包科技部的健康快速大开始的努力莱克斯顿女女........</p>
    </div>
    <div class="book-dir">
      <p class="book-dir-title">目录</p>
      <p class="book-dir-intro">已完结 共1225章 ></p>
    </div>
    <div class="hot-comment">
      <p class="hot-comment-title">热门书评</p>
      <p class="hot-comment-write">写书评</p>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <van-button type="default">+最更新</van-button>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-button type="danger">免费阅读</van-button>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-button type="default">下载</van-button>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import utlis from "@/utils/utlis";
import {
  NavBar,
  Icon,
  Image,
  Divider,
  Rate,
  Loading,
  Tabbar,
  Button,
  TabbarItem
} from "vant";
export default {
  name: "BookInfo",
  data() {
    return {
      start: 4.6
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Divider.name]: Divider,
    [Icon.name]: Icon,
    [Image.name]: Image,
    [Rate.name]: Rate,
    [Loading.name]: Loading,
    [Tabbar.name]: Tabbar,
    [Button.name]: Button,
    [TabbarItem.name]: TabbarItem
  },
  computed: {
    startNumber() {
      return Math.floor(this.start / 2) + 0.5;
    }
  },
  methods: {}
};
</script>

<style scoped>
.van-icon-arrow-left {
  color: #D9DBDA;
}
.van-tabbar-item__text,.van-button,.van-button--danger,.van-button--normal{
  width: 100%;
  height: 100%;
}
.book-score .van-rate {
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
/* 小说基本信息 */
/* .book-head::before {
  background: url("../assets/imgs/bg_book_info_s.png")no-repeat left right;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100vw;
  height: 25vh;
} */
.book-head {
  background: url("../assets/imgs/bg_book_info_a.png")no-repeat;
  background-size: 100% 116%;
  height: 26vh;
}
.van-image {
  margin-left: 1rem;
  margin-top: 0.2rem;
  width: 4rem;
  float: left;
  height: 5.8rem;
}
.book-info {
  box-sizing: border-box;
  height: 5rem;
  padding-left: 6rem;
  padding-top: 0.5rem;
  padding-bottom: 0.3rem;
}
.book-info p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.7rem;
  line-height: 1.3rem;
  color: #868E98;
}
.book-info .book-title {
  font-size: 0.8rem;
  color: #fff;
}
.book-info .short-intro {
  color: #FECC41;
}

/* 评分 */
.book-score {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.book-score p {
  padding: 0px;
  margin: 0px;
  color: #838288;
}
.book-score div {
  margin-top: 1rem;
}
.book-score .p-score {
  font-size: 0.8rem;
}
.book-score .p-score-title {
  font-size: 1rem;
  width: 1.6rem;
  color: #78777d;
  float: left;
}
.book-score .p-explain {
  font-size: 0.6rem;
}
.book-div {
  height: 100vh;
}
.book-intro .book-intro-title {
  color: #2c2c2c;
  margin-left: 1rem;
  margin-bottom: 0.4rem;
}
.book-intro .book-intro-intro {
  color: #89878c;
  margin-left: 1rem;
  margin-top: 0;
  font-size: 0.7rem;
}
.book-intro .book-intro-label {
  border-radius: 0.6rem;
  background-color: #f0eff4;
  color: #b6b5bb;
  padding: 0.1rem 0.3rem;
  font-size: 0.5rem;
  margin-right: 0.4rem;
}
.book-intro .book-intro-label-p {
  margin-left: 1rem;
  margin-top: 0rem;
  margin-bottom: 0.6rem;
}
.book-dir {
  width: 100%;
  border-bottom: #f4f4f4 solid 0.4rem;
  border-top: #f4f4f4 solid 0.01rem;
  padding-top: 0.3rem;
}
.book-dir-title {
  color: #2c2c2c;
  margin-left: 1rem;
  margin-top: 0;
  text-align: center;
  display: inline-block;
}
.book-dir-intro {
  color: #9f9fa7;
  font-size: 0.6rem;
  display: inline-block;
  margin-left: 10rem;
}
.hot-comment {
  width: 100%;
  /* border-bottom: #f4f4f4 solid 0.4rem; */
  /* border-top: #f4f4f4 solid 0.01rem; */
}
.hot-comment-title {
  color: #2c2c2c;
  margin-left: 1rem;
  margin-top: 0;
  text-align: center;
  display: inline-block;
}
.hot-comment-write {
  color: #df2f2f;
  font-size: 0.6rem;
  display: inline-block;
  margin-left: 11rem;
}
</style>