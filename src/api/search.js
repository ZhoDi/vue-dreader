import axios from '../request/http'

const search = {
  /**
   * 获取搜索热词
   * @returns {null}
   */
  getKeyWords() {
    return axios.get('/book/search-hotwords')
  },

  /**
     * 联想搜索
     * @param {String} searchWord 搜索内容
     * http://api05iye5.zhuishushenqi.com/book/auto-complete?query=%E6%96%97%E7%BD%97
     */
  associationSearch(searchWord) {
    return axios.get('/book/auto-complete?query=' + searchWord)
  },
  /**
   * 模糊搜索
   *  @param {String} searchWord 搜索内容
   */
  fuzzySearch(searchWord) {
    return axios.get('/book/fuzzy-search?query=' + searchWord)
  }
}

export default search;