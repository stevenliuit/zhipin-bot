<template>
    <div>这是子组件{{myname}}</div>
    <input v-model="myname" type="text">
</template>

<script>
export default {
    props: {
        myname: String
    },
    watch:{
        myname(){
            console.log('myname发生变化')
            this.$emit('update:myname',this.myname)
        }
    }
}
</script>

<style lang="ts">

</style>