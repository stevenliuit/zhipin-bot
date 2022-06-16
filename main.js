/*
 * @Author: ksy2019 gtx_2048@outlook.com
 * @Date: 2022-06-06 21:24:50
 * @LastEditors: ksy2019 gtx_2048@outlook.com
 * @LastEditTime: 2022-06-16 21:47:05
 * @FilePath: \electron_frame\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const IpcManager = require('./src/script/ipcManager/utils/Main')
const ipcManager = new IpcManager();

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 850,
        height: 520,
        webPreferences: {
            preload: path.join(__dirname, './src/script/preloadMain.js')
        }
    })
    Menu.setApplicationMenu(null)
        // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000/')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
        //init ipcManager
    ipcManager.init();

    app.on('activate', function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})


const AddHr = require('./src/script/boss/AddHr');
const addHr = new AddHr();


// //添加boss的hr
addHr.start();