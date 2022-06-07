/*
 * @Author: BlueStar
 * @Date: 2022-06-06 15:12:00
 * @LastEditTime: 2022-06-07 15:21:26
 * @Description: 获取数据的方法
 */
const axios = require("axios");

class GetData {

    constructor(){
    }
    
    //登陆方法
    login = ()=>{
        
    }
    
    //获取数据的方法
    async getData(){
        console.log('正在抽取数据中')
    }

    start = ()=>{
        console.log('启动了抽取任务');
    }

}

module.exports  = GetData