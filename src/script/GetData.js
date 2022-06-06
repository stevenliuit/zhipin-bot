/*
 * @Author: BlueStar
 * @Date: 2022-06-06 15:12:00
 * @LastEditTime: 2022-06-06 17:00:25
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
        console.log('正在获取数据中')
        let res = await axios.postMan(()=>{
            
        })
    }

    start = ()=>{
        console.log('抽取任务启动');
    }

}

module.exports  = GetData