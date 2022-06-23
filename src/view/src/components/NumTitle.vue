<!--
 * @Date: 2022-06-14 23:21:31
 * @LastEditors: lks
 * @LastEditTime: 2022-06-23 22:27:31
 * @Description: 数字标题组件
--> 
<script lang="ts">
export default {
    props: {
        num: Number,
    },
    methods: {
    },
    watch:{
    },
    setup(){
        
    }
}
</script>

<template>
    <div class="num-container">
        <div class="num-string">
            {{num}}
        </div>
        <div class="text-container">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/myvar.scss';
.num-container{
    margin: 0 28px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .num-string{
        font-size: 50px;
        font-weight: 500;
        color: $numTitleColor;
    }
    .text-container{
        color: $mainFontColor;
    }
}
</style>