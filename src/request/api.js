/** 
 * api接口的统一出口
 */

// 排名模块接口
import rank from '../api/rank';
// 检索模块接口
import search from '../api/search'

// 导出接口
export default {
  rank,
  search
}