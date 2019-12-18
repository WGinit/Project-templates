

const localHost:string = "http://192.168.1.135:8080";

module.exports = {
  base: '/api/mini-program/',
  host: process.env.NODE_ENV === 'production' ? window.location.origin || '' : localHost
}