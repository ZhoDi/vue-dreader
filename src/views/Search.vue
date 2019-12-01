<template>
  <div>
    <!-- 搜索框 -->
    <div>
      <van-search
        placeholder="输入书名或作者名"
        v-model="searchWord"
        maxlength="20"
        shape="round"
        @search="fuzzySearch"
        @input="associationSearch"
      />
      <!-- 联想输入 (用户输入后显示,回车后消失)-->
      <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        @load="associationSearch"
        v-if="associationList.length"
      >
        <van-cell
          v-for="(item,index) in associationList"
          :key="index"
          :title="item"
          @click="fuzzySearch"
        />
      </van-list>
    </div>
    <!-- 搜索热词和辅助搜索 (用户输入后隐藏) -->
    <div class="searchKeyWord" v-if="!searchWord">
      <!-- 搜索热词 -->
      <ul class="search-word" v-if="searchHotWords">
        <li
          class="search-hot-word"
          v-for="(searchKeyWord, index) in searchHotWords"
          :key="index"
          @click="fuzzySearch"
        >{{searchKeyWord.word}}</li>
      </ul>
      <!-- 搜索历史 -->
      <div class="search-history">
        <div class="search-history-header">
          <span>搜索历史</span>
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="shanchu"
            @click="clearSearchHistory"
          />
        </div>
        <ul class="search-history-info">
          <li
            class="search-history-list"
            v-for="(item,index) in searchHistory"
            :key="index"
            @click="fuzzySearch"
          >{{item}}</li>
        </ul>
      </div>
    </div>

    <!--显示搜索结果 -->
    <ul class="search-result" v-if="searchResult.length">
      <BookList v-for="book in searchResult" :book="book" :key="book._id"></BookList>
    </ul>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/Tabbar";
import BookList from "../components/booklist/BookList";
import { Search, Icon, List, Cell } from "vant";
import utlis from "../utils/utlis";

export default {
  name: "Search",
  data() {
    return {
      searchWord: "",
      searchHotWords: null,
      associationList: [],
      searchResult: [],
      searchHistory: []
    };
  },
  components: {
    tabbar,
    BookList,
    [Icon.name]: Icon,
    [Search.name]: Search,
    [List.name]: List,
    [Cell.name]: Cell
  },
  mounted (){
    window.addEventListener('scroll', this.handleScroll)
  },
  /**
   * 初始化
   */
  created() {
    //搜索历史
    this.searchHistory = utlis.localstorage.getLocalStroage("searchHistory")
      ? utlis.localstorage.getLocalStroage("searchHistory")
      : [];
    //获取热词
    this.$api.search
      .getKeyWords()
      .then(response => {
        this.searchHotWords = response.data.searchHotWords;
        //显示16个热词
        this.searchHotWords.length = 16;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    //监听搜索词变化
    searchWord: function() {
      //搜索词为空-刷新当前搜索历史(避免频繁赋值)
      if (!this.searchWord) {
        //清空搜索联想
        this.associationList = [];
        //清空搜索结果
        this.searchResult = [];
        this.searchHistory = utlis.localstorage.getLocalStroage(
          "searchHistory"
        )
          ? utlis.localstorage.getLocalStroage("searchHistory")
          : [];
      }
    }
  },
  methods: {
    handleScroll(){
      this.associationList = [];
    },
    /**
     * 搜索联想
     */
    associationSearch() {
      this.$api.search
        .associationSearch(this.searchWord)
        .then(response => {
          this.associationList = response.data.keywords;
          //加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.associationList.length >= 0) {
            this.finished = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    /**
     * 模糊搜索
     */
    fuzzySearch(event) {
      //本次搜索词
      this.searchWord = event.target ? event.target.innerText : this.searchWord;
      
      // 获取搜索历史
      let searchHistory = utlis.localstorage.getLocalStroage(
        "searchHistory"
      )
        ? utlis.localstorage.getLocalStroage("searchHistory")
        : [];

      //新搜索历史
      let newHistorys = Array.from(
        new Set([this.searchWord, ...searchHistory])
      );

      //只留8条历史
      if (newHistorys.length > 8) {
        newHistorys = newHistorys.slice(0, 7);
      }
      
      //保存搜索历史
      utlis.localstorage.setLocalStroage("searchHistory", newHistorys);
      // this.$store.commit(SET_BACK_POSITION, '搜索');
      //开始搜索
      this.$api.search
        .fuzzySearch(this.searchWord)
        .then(response => {
          this.searchResult = response.data.books;
          this.associationList = [];
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 清空搜索历史
     */
    clearSearchHistory() {
      utlis.localstorage.setLocalStroage("searchHistory", []);
      this.searchHistory = [];
    }
  }
};
</script>

<style scoped>
.van-search {
  box-shadow: 0 1px 0 #eee;
}
.van-list {
  position: fixed;
  z-index: 1;
  width: 90vw;
  margin: auto;
  left: 0;
  right: 0;
  box-shadow: 0px 0.6rem 1.2rem -0.8rem #000;
}
.search-word {
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.4rem;
  border-bottom: 1px solid #eee;
}

.search-hot-word {
  font-size: 0.6rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid #eee;
  border-radius: 0.6rem;
  margin-left: 0.5rem;

  margin-bottom: 0.5rem;
}

.search-hot-word:active {
  background: #eee;
}

.search-history-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 0.7rem;
  color: #5f5f5f;
}
.search-history-info {
  display: flex;
  flex-direction: column;
}

.search-history-list {
  padding: 0.2rem 0 0.2rem 0;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  font-size: 0.7rem;
  color: #a79393;
  /* border-bottom: #eee solid 1px; */
}
.search-result {
  margin-bottom: 3rem;
  width: 100vw;
  background: #f2f2f2;
}
</style>