<template>
  <div>这模板</div>
  <div @click="ccc($event)" v-if="show"  v-for="item in 3" :[name]="name">这模板2</div>
  <div v-else :[name]="name">这模板else</div>
    <h1 v-if="name=='lks'">Vue is awesome!</h1>
    <h1 v-else-if="name=='one'">hsy</h1>
    <h1 v-else>Oh no 😢</h1>
    <input type="checkbox" value="Jack"  v-model="checks"/>
    
    <input type="checkbox" value="Jack2"  v-model="checks"/>
    
    <input type="checkbox" value="Jack3"  v-model="checks"/>

    <label for="checkbox">{{ checks }}</label>
</template>

<script>
export default {
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