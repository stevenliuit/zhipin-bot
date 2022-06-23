const Chat = require('../boss/Chat')
const chat = new Chat();
const data = [{
    name: 'test',
    event: (event, params) => {
        console.log('ipc]', params)
        return params
    }
}, {
    name: 'getLoginQrcodeImage',
    event: async(event, params) => {
        console.log('ipc]获取了登录二维码(微信)', params)
        let res = await chat.getLoginQrcodeImage();
        return res
    }
}, {
    name: 'puppeteerInit',
    event: async(event, params) => {
        console.log('[ipc]puppeteer框架初始话', params)
        let res = await chat.init();
        return res
    }
}, ]

module.exports = data