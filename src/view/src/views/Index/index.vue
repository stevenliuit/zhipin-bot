<template>
    <div>
        这是测试界面
    </div>
    <button @click="openPuppeteer">打开puppeteer</button>
</template>

<script>
import { ref } from "vue";
export default {
    components: {
    },
    data(){
        return {
        }
    },
    methods: {
    },
    setup(){
        const openPuppeteer = ()=>{
            electronAPI.openPuppeteer();
        }
        return {
            openPuppeteer
        }
    }
}
</script>

<style>

</style>