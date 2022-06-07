/*
 * @Author: BlueStar
 * @Date: 2022-06-06 17:49:49
 * @LastEditTime: 2022-06-07 10:17:51
 * @Description: 预加载脚本初始化ipc管道
 */
const { contextBridge, ipcRenderer } = require('electron')
const ipcConfig = require('../ipcConfig')

module.exports = class PreloadIpcManager {
    constructor() {

    }

    init = () => {
        let ipcRender =  {}
        for(let item of ipcConfig){
            ipcRender[item.name]  = (params) => ipcRenderer.invoke(item.name, params)
        }
        contextBridge.exposeInMainWorld('electronAPI' , ipcRender)
    }
}