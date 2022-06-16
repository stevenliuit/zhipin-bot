const puppeteer = require('puppeteer')

function sleep(time) {
    return new Promise(res => {
        console.log('睡眠', time / 1000, 's');
        setTimeout(res, time)
    })
}

module.exports = class Chat {
    constructor() {

    }
    headless = false;
    browser = null;
    page = null;
    hello = `✨你好呀，很高兴认识你，2年开发经验，有多个大型SaaS软件开发经验，擅长移动端混合开发和后台开发，会一点点python和java;
    `
    botMessage = `🤖本消息由我开发的Boss机器人回复，该项目github地址： https://github.com/ksy2019/zhipin-bot ；技术栈Vue3 + Electron + Puppeteer
    `

    createBrowser = async() => {
            if (!this.browser) {
                this.browser = await puppeteer.launch({
                    headless: this.headless,
                    ignoreHTTPSErrors: true,
                    defaultViewport: null,
                    timeout: 0,
                    pipe: true,
                    args: [
                        '--no-first-run',
                        '--disable-machine-cert-request',
                        '--disable-client-side-phishing-detection',
                        '--enable-strict-mixed-content-checking',
                        '-–disable-setuid-sandbox',
                    ],
                    ignoreDefaultArgs: ['--enable-automation']
                });
                await this.createPage();
            } else {
                await browser.close()
                this.browser = null;
                await createBrowser()
            }
        }
        //创建页面
    createPage = async() => {
        this.page = await this.browser.newPage();
        await this.page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined,
            });
        });
        console.log("初始化完成");
        await this.page.goto('https://www.zhipin.com/')
        await sleep(5 * 1000);
        await this.page.goto('https://login.zhipin.com/?ka=header-login')
        await sleep(20 * 1000);
        this.startChat()
        return
    }

    getUserList = async() => {
        let userlist = await this.page.evaluate(() => {
            let userList = document.querySelectorAll('.user-list li')
            let list = []
            for (let user of userList) {
                try {
                    let userName = user.querySelector('.name').textContent.trim()
                    if (userName !== '') {
                        list.push(userName)
                    }
                } catch (e) {
                    console.warn('获取用户名称失败')
                }
            }
            return list
        })
        return userlist
    }

    chatWithHR = async() => {
            let userList = await this.getUserList()
            for (let item of userList) {
                //检查好友列表是否变长了
                let checkUserList = await this.getUserList()
                if (userList.length !== checkUserList.length) {
                    setTimeout(async() => await this.chatWithHR(), 50)
                    return
                }
                let index = await this.page.evaluate(indexName => {
                    let userList = document.querySelectorAll('.user-list li')
                    for (let index = 0; index < userList.length; index++) {
                        try {
                            let userName = userList[index].querySelector('.name').textContent.trim()
                            if (userName === indexName) {
                                return index
                            }
                        } catch (e) {
                            console.warn('获取用户名称失败')
                        }
                    }
                    return -1
                }, item)
                if (index == -1) continue;
                await this.page.click(`.user-list li:nth-child(${index+1})`)
                await sleep(3 * 1000);
                //判断是否和HR聊过天
                let hasMessage = await this.page.evaluate(() => {
                        return document.querySelector('.im-list').textContent.indexOf('很高兴认识你') === -1 && document.querySelectorAll('.im-list .item-myself').length <= 1
                    })
                    //发送个人简介信息
                try {
                    if (hasMessage) {
                        await this.page.type('.chat-input', this.hello)
                        await sleep((3 + Math.floor(Math.random() * 10)) * 1000);
                        await this.page.type('.chat-input', this.botMessage)
                        await sleep((20 + Math.floor(Math.random() * 10)) * 1000);
                    } else {
                        console.log('当前HR发过消息')
                        await sleep(1 * 1000);
                    }
                } catch (e) {
                    console.log('发送消息发生错误', e)
                }
            }
        }
        //和hr聊天
    startChat = async() => {
        await this.page.goto('https://www.zhipin.com/web/geek/chat')
        await sleep(6000)
        try {
            await this.page.click('.btn-sure')
        } catch (e) {}
        await this.chatWithHR()
    }

    start = async() => {
        await this.createBrowser();
    }
}