<template>
  <div>
      <el-progress type="circle" :percentage="num" status="success" />
  </div>
</template>


<script setup lang="ts">
import { ref , onMounted } from 'vue'

const num = ref(10);

onMounted(()=>{
    setInterval(()=>{
        console.log(num)
        num.value+=10;
    },1000)
})

</script>

