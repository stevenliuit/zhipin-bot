/*
 * @Author: BlueStar
 * @Date: 2022-06-06 17:49:49
 * @LastEditTime: 2022-06-06 18:06:30
 * @Description: 预加载脚本初始化ipc管道
 */
const { contextBridge, ipcRenderer } = require('electron')
const ipcConfig = require('../ipcConfig')

module.exports = class PreloadIpcManager{
    constructor(){

    }

    init = ()=>{
        for(let item of ipcConfig){
            contextBridge.exposeInMainWorld('electronAPI', {
                [item.name] : (params) => ipcRenderer.send( item.name , params)
            })
        }
    }
}
