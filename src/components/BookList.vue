<template>
  <li @click="getBook()">
    <img :src="imgUrl" />
    <div class="book-info">
      <p class="book-title" v-html="keyWordRed(book.highlight.title,book.title)"></p>
      <p class="book-author">
        <span v-html="keyWordRed(book.highlight.author,book.author)"></span>
        • {{book.cat}} • {{wordCount}} 万字
      </p>
      <p class="short-intro">{{book.shortIntro}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {
    };
  },
  props: ["book"],
  computed: {
    imgUrl() {
      return process.env.VUE_APP_BASE_IMG + this.book.cover;
    },
    wordCount() {
      return (this.book.wordCount / 10000).toFixed(0);
    }
  },
  methods: {
    getBook() {
      this.$router.push({name:'book',params: { bookId: this.book._id }});
    },
    //关键字标红
    keyWordRed(key, str) {
      if (key === undefined) return str;
      key.forEach(p => {
        var reg = new RegExp(p, "g");
        str = str.replace(reg, "<font style='color:#E7434D;'>$&</font>");
      });
      return str;
    }
  }
};
</script>

<style scoped>
img {
  width: 3.6rem;
  height: 5rem;
  border-radius: 0.2rem 0.1rem 0.1rem 0.2rem;
  float: left;
  margin-right: 0.4rem;
  box-shadow: 0.2rem 0.4rem 1rem -0.6rem #000;
}

li {
  margin-left: 1rem;
  margin-right: 1rem;
  border-bottom: 1px solid #e6dbdb;
  padding-bottom: 0.2rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}

li:active,
li:focus {
  background: #f2f2f2;
}

.book-info {
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  padding-left: 4.2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.book-info p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.5rem;
  line-height: 1.3rem;
}

.book-info .book-title {
  font-size: 0.8rem;
}

.book-info .short-intro {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1rem;
  margin-bottom: 1rem;
}

.book-author {
  color: #85888b;
}
</style>
