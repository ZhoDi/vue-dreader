import axios from '../request/http'

const search = {
  /**
   * 获取搜索热词
   * @returns {null}
   */
  getKeyWords() {
    return axios.get('/book/hot-word?packageName=com.ushaqi.zhuishushenqi')
  },

  /**
     * 联想搜索
     * @param {String} searchWord 搜索内容
     * http://b01.zhuishushenqi.com/books/auto-suggest?query=%E6%96%97&packageName=com.ushaqi.zhuishushenqi
     */
  autoComplete(searchWord) {
    return axios.get('/books/auto-suggest?query=' + searchWord+'&packageName=com.ushaqi.zhuishushenqi')
  },
  /**
   * 模糊搜索
   *  @param {String} searchWord 搜索内容
   * http://b01.zhuishushenqi.com/books/fuzzy-search?model.sort=0&model.query=%E6%96%97&model.start=0&model.limit=50&model.packageName=com.ushaqi.zhuishushenqi&model.contentType2=1
   */
  fuzzySearch(searchWord,start,limit) {
    return axios.get('/books/fuzzy-search?model.sort=0&model.query=' + searchWord+'&model.start='+start+'0&model.limit='+limit+'&model.packageName=com.ushaqi.zhuishushenqi&model.contentType2=1')
  }
}

export default search;