/*
 * @Author: BlueStar
 * @Date: 2022-06-06 16:53:47
 * @LastEditTime: 2022-06-06 18:06:46
 * @Description: 初始化ipc管道
 */
const { ipcMain } = require('electron')
const ipcConfig = require('../ipcConfig')

class IpcManager{
    
    
    constructor(){
    }

    handlerFunc = (event, params)=>{
        console.log('接收到ipc管道通讯' , event , params)
    }

    //初始化
    init = ()=>{
        console.log("ipcManager初始化中")
        for(let item of ipcConfig){
            ipcMain.on(item.name , this.handlerFunc)
        }
    }
}

module.exports = IpcManager