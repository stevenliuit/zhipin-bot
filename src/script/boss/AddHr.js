/*
 * @Author: BlueStar
 * @Date: 2022-06-06 15:12:00
 * @LastEditTime: 2022-06-24 00:05:34
 * @Description: 获取数据的方法
 */
const axios = require("axios");

function sleep(time) {
    return new Promise(res => {
        console.log('睡眠', time / 1000, 's');
        setTimeout(res, time)
    })
}

function formD(obj) {
    const formData = new URLSearchParams();
    Object.keys(obj).forEach((key) => {
        if (obj[key] instanceof Array) {
            obj[key].forEach((item) => {
                formData.append(key, item);
            });
            return;
        }
        formData.append(key, obj[key]);
    });
    return formData;
}
class GetData {

    constructor() {}
    mpt = "33973041613977c71a30a675aae10654"
    wt2 = "DwmdzjOMGqZ8x8PTGyYgIezRZSxGaQZrkJ3pzkWPuovpDe1CXylEBg9x4LP7hXnlP_vf60eyZ0ZVm-retaBU3AQ~~"
    headers = {
            "content-type": "application/x-www-form-urlencoded",
            "mpt": this.mpt,
            "ua": "{\"model\":\"microsoft\",\"platform\":\"windows\"}",
            "ver": "4.0602",
            "wt2": this.wt2,
            "zpAppId": "10002",
            "scene": "1001"
        }
        //获取工作列表
    getJobList = async(pageIndex) => {
        console.log('当前获取的页码是', pageIndex)
        let res = await axios.get(`https://www.zhipin.com/wapi/zpgeek/miniapp/homepage/recjoblist.json?expectId=361671429&sortType=1&cityCode=101280100&districtCode=&businessCode=&subwayLineId=&subwayStationId=&page=${pageIndex}&pageSize=10&salary=&degree=&experience=&stage=&scale=&industry=&longitude=&latitude=&positionCode=&jobType=0&appId=10002`, {
            headers: this.headers
        })
        res = res.data
        if (res.code == 0) {
            try {
                console.log('获取到', res.zpData.jobList.length, '条招聘数据')
            } catch (e) {
                console.log('获取招聘列表失败', e)
            }
            for (let item of res.zpData.jobList) {
                await this.addFirend(item)
                await sleep((30 + Math.floor(Math.random() * 10)) * 1000)
            }
        }
    }

    //获取数据的方法
    addFirend = async(jbInfo) => {
        let data = formD({
            "appId": "10002",
            "entrance": "10",
            "jobId": jbInfo.encryptJobId,
            "lid": jbInfo.lid,
            "securityId": jbInfo.securityId,
        })
        let res = await axios.post('https://www.zhipin.com/wapi/zpgeek/miniapp/friend/add.json', data, {
            headers: this.headers
        })
        res = res.data
        if (res.code == 0) {
            console.log('添加好友成功')
        } else {
            console.log('添加好友失败')
        }
    }

    start = async() => {
        console.log('启动任务');
        for (let pageIndex = 1; pageIndex < 100; pageIndex++) {
            await this.getJobList(pageIndex);
            await sleep((20 + Math.floor(Math.random() * 10)) * 1000)
        }
    }

}

module.exports = GetData