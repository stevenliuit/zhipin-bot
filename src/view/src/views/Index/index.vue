<!--
 * @Date: 2022-06-12 21:42:57
 * @LastEditors: lks
 * @LastEditTime: 2022-06-23 23:41:05
-->
<script setup lang="ts">
import { ref } from "vue";
import NumTitle from '@/components/NumTitle.vue'
import LineChart from '@/components/LineChart.vue'
import Qrcode from '@/components/Qrcode.vue'
const refsh = () =>{
    location.reload()
}
const qbhhNum = ref(388)
const jrgtNum = ref(32)
const jrtjlNum = ref(15)
const openPuppeteer = ()=>{
    electronAPI.openPuppeteer();
}
</script>

<template>
    <div class="body-container">
        <div class="top-container">
            <div class="top-left">
                <num-title :num="qbhhNum">全部回话</num-title>
                <num-title :num="jrgtNum">今日沟通</num-title>
                <num-title :num="jrtjlNum">今日投简历</num-title>
            </div>
            <div class="top-right">
                <button @click="refsh">刷新</button>
            </div>
        </div>
        <div class="bom-container">
            <div class="bom-left">
                <LineChart></LineChart>
            </div>
            <div class="bom-right">
                <Qrcode></Qrcode>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import './index.scss'
</style>