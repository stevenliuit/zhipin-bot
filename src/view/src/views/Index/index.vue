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
        if(num.value==100){
            num.value = 0;
        }
        num.value+=10;
    },300)
})

</script>

