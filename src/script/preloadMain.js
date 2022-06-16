/*
 * @Author: BlueStar
 * @Date: 2022-06-01 15:57:53
 * @LastEditTime: 2022-06-06 17:58:56
 * @Description: 预加载脚本（主脚本）,可以访问dom和node
 */
const PreloadIpcManager = require('./ipcManager/utils/PreloadIpcManager')
const preloadIpcManager = new PreloadIpcManager();

window.addEventListener('DOMContentLoaded', () => {

    preloadIpcManager.init();
    console.log('预加载脚本载入成功');


})