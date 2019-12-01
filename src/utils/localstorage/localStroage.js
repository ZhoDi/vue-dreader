import _ from 'lodash'

const localStroage = window.localStorage

export default {

  /**
     * 获取localstroage的值
     * @param {String} name
     */
  getLocalStroage(name) {
    if(!name) return;
    return _.isEmpty(JSON.parse(localStroage.getItem(name))) ? null : JSON.parse(localStroage.getItem(name))
  },

  /**
     * 设置localstroage的值
     * @param {String} name 
     * @param {Object} obj
     */
  setLocalStroage(name, obj) {
    if(!name) return;
    if(typeof obj !== 'string'){
      obj = JSON.stringify(obj);
    }
    localStroage.setItem(name, obj);
  },
  /**
   * 删除localstroage的值
   * @param {string} name
   */
  removeLocalStroage(name) {
    if (!name) return;
    return localStroage.removeItem(name);
  }

}