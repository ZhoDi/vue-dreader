import axios from '../request/http'

const rank = {
  /**
   * 获取所有的排行榜类型
   * @returns {null}
   */
  getRankType() {
    return axios.get('/ranking/gender')
  },

  /**
   * 根据id获取排行榜
   * @returns {String} id为周榜id，月榜id，总榜id
   */
  getRankList(id) {
    return axios.get('/ranking/' + id)
  }
}

export default rank;