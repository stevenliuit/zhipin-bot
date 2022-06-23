<!--
 * @Date: 2022-06-22 23:38:55
 * @LastEditors: lks
 * @LastEditTime: 2022-06-23 22:27:44
 * @Description: 动态折线图标
-->
<script lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, nextTick } from 'vue'
export default {
    data(){
        return {

        }
    },
    setup(){
        const chartCanvas = ref(null)
        onMounted(()=>{
            var myChart = echarts.init(chartCanvas.value,null,{renderer:'svg'});
            var option;

            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            for (var i = 0; i < 100; i++) {
              xAxisData.push('A' + i);
              data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
              data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }
            option = {
              title: {
                text: ''
              },
            //   legend: {
            //     data: ['bar', 'bar2']
            //   },
              textStyle:{
                fontSize: 8,
              },
              tooltip: {},
              xAxis: {
                data: xAxisData,
                splitLine: {
                  show: false
                },
                axisLabel: {
                    fontSize: 9,
                    interval: 10
                }
              },
              yAxis: {
                axisLabel: {
                    fontSize: 9,
                }
              },
              grid: {
                left: '5%',   //距离左边的距离
                right: '5%', //距离右边的距离
                bottom: '12%',//距离下边的距离
                top: '12%' //距离上边的距离
              },
              series: [
                {
                  name: 'bar',
                  type: 'bar',
                  data: data1,
                  emphasis: {
                    focus: 'series'
                  },
                  animationDelay: function (idx) {
                    return idx * 10;
                  }
                },
                {
                  name: 'bar2',
                  type: 'bar',
                  data: data2,
                  emphasis: {
                    focus: 'series'
                  },
                  animationDelay: function (idx) {
                    return idx * 10 + 100;
                  }
                }
              ],
              animationEasing: 'elasticOut',
              animationDelayUpdate: function (idx) {
                return idx * 5;
              }
            };

            option && myChart.setOption(option);
        })
        return {
            chartCanvas
        }
    }
}
</script>

<template>
    <div class="chart-container">
        <div class="chart-canvas" ref="chartCanvas"></div>
    </div>
</template>

<style lang="scss">
.chart-container{
        height: 100%;
    .chart-canvas{
        height: 100%;
        width: 100%;
    }
}
</style>