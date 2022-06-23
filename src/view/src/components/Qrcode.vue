<!--
 * @Date: 2022-06-23 22:22:26
 * @LastEditors: lks
 * @LastEditTime: 2022-06-24 00:30:31
 * @Description: 登录二维码展示组件
-->
<script setup lang="ts">
import { ref,onMounted } from 'vue'

const loginQrcodeSrc = ref('')
// import QrcodeVue from 'qrcode.vue'
onMounted( async ()=> {
    let initRes = await electronAPI.puppeteerInit();
    if(initRes.result == 1){
        let loginImageRes = await electronAPI.getLoginQrcodeImage();
        console.log(loginImageRes)
        if(loginImageRes){
            loginQrcodeSrc.value = loginImageRes.data
        }
    }
})
</script>
<template>
    <div class="qrcode-container">
        <img class="myqrcode" :src="loginQrcodeSrc" alt="微信扫描二维码登录Boss直聘😘">
        <!-- <qrcode-vue value="url"  class="myqrcode" size="600" /> -->
        <div class="placeholer-text">微信扫描二维码登录Boss直聘😘</div>
    </div>
</template>

<style lang="scss">
@import '@/assets/myvar.scss';
.qrcode-container{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .myqrcode{
        margin-top: 6px;
        width: 78% !important;
        height: auto !important;
    }
    .placeholer-text{
        margin-top: 12px;
        color: $mainFontColor;
        font-weight: 500;
    }
}
</style>