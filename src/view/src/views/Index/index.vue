<template>
    <div>
        这是父组件{{name}}
    </div>
    <TestChild v-model:myname="name"></TestChild>
</template>

<script>
import { ref } from "vue";
import TestChild from '../../components/TestChild.vue'
export default {
    components: {
        TestChild
    },
    data(){
        return {
            name: 'lks',
            show: true,
            checks: [],
        }
    },
    methods: {
        ccc(a,b){
            console.log(a,b)
        }
    },
}
</script>

<style>

</style>