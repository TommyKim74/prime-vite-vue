<template>
  <div class="card" style="background-color: white">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
]);

const option = ref();

onMounted(async () => {
  option.value = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      show: false,
    },
    grid: {
      top: 10,
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: [''],
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          formatter: 'Idle',
        },
        emphasis: {
          focus: 'series',
        },
        data: [150],
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          formatter: 'Running',
        },
        emphasis: {
          focus: 'series',
        },
        data: [600],
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          formatter: 'Stop',
        },
        emphasis: {
          focus: 'series',
        },
        data: [250],
      },
    ],
  };
});
</script>

<style scoped>
.chart {
  height: 110px;
}
</style>
