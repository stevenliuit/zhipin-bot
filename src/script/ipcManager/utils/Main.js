/*
 * @Author: BlueStar
 * @Date: 2022-06-06 16:53:47
 * @LastEditTime: 2022-06-06 18:06:46
 * @Description: 初始化ipc管道
 */
const { ipcMain } = require('electron')
const ipcConfig = require('../ipcConfig')

class IpcManager {


    constructor() {}


    //初始化
    init = () => {
        console.log("ipcManager初始化中")
        for (let item of ipcConfig) {
            ipcMain.handle(item.name, (event, params) => {
                return item.event(event, params)
            })
        }
    }
}

module.exports = IpcManager