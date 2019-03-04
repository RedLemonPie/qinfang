'use strict'
const PRO_HOST = 'https://scixlab.cn:8083/api/v1'
const DEV_HOST = 'http://localhost:3000/api/v1'
const API_HOST = DEV_HOST
module.exports = {
  PAGE_WORK: '/pages/work-detail/work-detail',

  get(url, data) {
    return new Promise((resolve, reject) => {
      console.log(wx.getStorageSync('token'))
      wx.request({
        url: API_HOST + url,
        method: 'GET',
        header: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + wx.getStorageSync('token')
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  post (url, data, token) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: API_HOST + url,
        data: data,
        method: 'POST',
        header: {
          'Cache-Control': 'no-cache',
          // 'Content-Type': 'application/x-www-form-urlencode;charset=UTF-8;',
          'Authorization': 'Bearer ' + wx.getStorageSync('token')
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  json2Form(json) {
    var str = []
    for (var p in json) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
    }
    return str.join('&')
  }

};
