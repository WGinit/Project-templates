const util = {}

// 获取昨天的日期
util.getYesterDay  = () => {
  var day = new Date();
  day.setTime(day.getTime() - 24 * 60 * 60 * 1000);
  return day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
}
// 获取当前日期
util.getNowDate = () => {
  let day = new Date();
  day.setTime(day.getTime());

  return day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
}
// 时间戳转日期格式
util.transformTime = (timestamp = '', isSpecial = false) => {
  function addZero(m) {
    return m < 10 ? '0' + m : m;
  }
  if (timestamp) {
    var time = new Date(timestamp * 1000);
    var y = time.getFullYear();
    var M = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    let data = ''
    if (isSpecial) {
      data = `${addZero(M)}.${addZero(d)}`
    } else {
      data = y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
    }
    return data
  } else {
    return '';
  }
}




export default util