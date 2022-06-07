<template>
  <div>
      <el-progress type="circle" :percentage="num" status="success" />
      <el-button @click="sendIpc" type="primary">发送ipc命令</el-button>
  </div>
</template>


<script setup lang="ts">
import { ref , onMounted } from 'vue'

const num = ref(10);

const sendIpc = async ()=>{
    num.value = await electronAPI.test(Number(num.value)+1);
}

onMounted(()=>{
    setInterval(()=>{
        num.value+=10;
        if(num.value>=100){
            num.value = 0;
        }
    },2300)
})

</script>

