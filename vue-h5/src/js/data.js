import util from './util';

const echartsData = {}
const EMPTY_DATA = {
  columns: [],
  rows: [],
  hasData: false
}

echartsData.qy_user = (data) => {
      return data ? {
      columns: ['已激活', '未激活'],
      rows: [{
          '已激活': `已激活`,
          '未激活': data.activate
        }, {
          '已激活': `未激活`,
          '未激活': data.inactive
        }
      ],
      hasData: true
    }: EMPTY_DATA
  }
echartsData.shopper = (data) => {
      return data ? {
      columns: ['已激活', '未激活'],
      rows: [{
        '已激活': `已激活`,
        '未激活': data.activate
      }, {
        '已激活': `未激活`,
        '未激活': data.inactive
      }],
      hasData: true
    }: EMPTY_DATA
  }
 echartsData.login_user = (data) => {
      let _data = []
      if (data) {
        _data = data.map(item => {
          return {
            '日期': util.transformTime(item.time, true),
            '活跃人数': item.user_num
          }
        })
      }
    return data ? {
      columns: ['日期', '活跃人数'],
      rows: _data,
      hasData: true
    }: EMPTY_DATA
  }
  echartsData.new_user = (data) => {

      let _data = []
      if (data) {
        _data = data.map(item => {
          return {
            '日期': util.transformTime(item.time, true),
            '新增顾客数': item.user_num
          }
        })
      }
      return data ?{
      columns: ['日期', '新增顾客数'],
      rows: _data,
      hasData: true
    }: EMPTY_DATA
  }
 echartsData.account_user = (data, newUserData = []) => {
   let _data = []
   let startData = data[data.length - 1].user_num
   let allNum = startData
   function addNum(num) {
     allNum += num
     return allNum
   }
   _data = newUserData.map(item => {
    return {
       '日期': util.transformTime(item.time, true),
       '总用户': addNum(item.user_num)
     }
   })
   return data ? {
      columns: ['日期', '总用户'],
      rows: _data,
      hasData: true
  }: EMPTY_DATA
}

export default echartsData