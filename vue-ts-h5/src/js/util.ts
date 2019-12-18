export const storage = (action: string, key:string, data = '') => {
  if (!action || !key) return

  switch (action) {
    case 'set':
      localStorage.setItem(key, data)
      break;
    case 'get':
      return localStorage.getItem(key)
    case 'remove':
      localStorage.removeItem(key)
      break;
    default:
      break;
  }
}

export const getUrlParameters = (url:any) => {
  console.log(url.match(/([^?=&]+)(=([^&]*))/g))
  return url.match(/([^?=&]+)(=([^&]*))/g) ? url.match(/([^?=&]+)(=([^&]*))/g).reduce(
    (a: any, v: any) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
  ) : ''
}


/**
 * 引用腾讯vconsole调试
 * 如何使用:
 * vconsole(true) 打开调试
 * vconsole(false) 关闭调试
 * */
export const vconsole = (show = true) => {
  function removeScript(src: any) {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      let _script:HTMLScriptElement = scripts[i]
      if (_script && scripts[i].src && scripts[i].src.indexOf(src) != -1) {
        _script.parentNode && _script.parentNode.removeChild(scripts[i]);
      }
    }
  }
  if (show) {
    storage('set', 'OPEN_VCONSOLE', 'TRUE')
    let script:HTMLScriptElement = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//pub.idqqimg.com/qqun/qun/qqweb/m/qun/confession/js/vconsole.min.js'
    document.getElementsByTagName('head')[0].appendChild(script)
    script.onload = () => {
      var scr = document.createElement("script");
      scr.type = "text/javascript";
      let func = 'var vConsole = new VConsole();'
      scr.appendChild(document.createTextNode(func));
      document.body.appendChild(scr);
    }

  } else {
    removeScript('pub.idqqimg.com')
    storage('remove', 'OPEN_VCONSOLE')
  }
}

// 生成随机字符串
export const randomString = (len: number) => {
  len = len || 32;
  let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  let maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

export function throttle(fn: any, wait: number = 1500) {
  let prev: any = new Date();
  return function () {
    const args: any = arguments;
    const self = this
    const now: any = new Date();
    if (now - prev > wait) {
      fn.apply(self, args);
      prev = new Date();
    }
  }
}
