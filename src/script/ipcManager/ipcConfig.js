const Chat = require('../boss/Chat')
const chat = new Chat();
const data = [{
    name: 'openPuppeteer',
    event: (event, params) => {
        console.log('执行了openPuppeteer方法', params)
        chat.start();
        return params
    }
}, ]

module.exports = data