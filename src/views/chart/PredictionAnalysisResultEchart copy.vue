<template>
  <div class="card" style="background-color: white">
    <div class="card-container flex flex-column">
      <div
        class="grid border-top-1 border-bottom-1 surface-border border-round surface-card"
        style="height: 55px"
      >
        <div
          class="col-fixed flex justify-content-center align-items-center bg-gray-50 text-lg font-medium p-3"
          style="width: 200px"
        >
          Contributor
        </div>
        <div
          class="col-fixed flex justify-content-center align-items-center bg-gray-50 text-lg font-medium p-3"
          style="width: 100px"
        >
          Score
        </div>
        <div
          class="col-fixed flex justify-content-center align-items-center bg-gray-50 text-lg font-medium p-3"
          style="width: 100px"
        >
          Weight
        </div>
        <div
          class="col flex justify-content-center align-items-center bg-gray-50 text-lg font-medium p-3"
        >
          Parameter Status / Event
        </div>
      </div>
      <div
        v-if="chart1"
        class="grid border-top-1 border-bottom-1 surface-border border-round surface-card"
      >
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 200px"
        >
          {{ chart1.paramNm }}
        </div>
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 100px"
        >
          <span
            class="border-circle flex align-items-center justify-content-center bg-green-300"
            style="width: 30px; height: 30px"
            >{{ chart1.score }}</span
          >
        </div>
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 100px"
        >
          {{ chart1.weight }}%
        </div>
        <div class="col flex justify-content-center p-3">
          <!-- <v-chart class="chart" :option="option1" /> -->
        </div>
      </div>
      <div
        v-if="chart2"
        class="grid border-top-1 border-bottom-1 surface-border border-round surface-card"
      >
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 200px"
        >
          {{ chart2.paramNm }}
        </div>
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 100px"
        >
          <span
            class="border-circle flex align-items-center justify-content-center bg-yellow-300"
            style="width: 30px; height: 30px"
            >{{ chart2.score }}</span
          >
        </div>
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 100px"
        >
          {{ chart2.weight }}%
        </div>
        <div class="col flex justify-content-center p-3">
          <!-- <v-chart class="chart" :option="option2" /> -->
        </div>
      </div>
      <div
        v-if="chart3"
        class="grid border-top-1 border-bottom-1 surface-border border-round surface-card"
      >
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 200px"
        >
          {{ chart3.paramNm }}
        </div>
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 100px"
        >
          <span
            class="border-circle flex align-items-center justify-content-center bg-yellow-300"
            style="width: 30px; height: 30px"
            >{{ chart3.score }}</span
          >
        </div>
        <div
          class="col-fixed flex justify-content-center align-content-center align-items-center text-lg font-medium"
          style="width: 100px"
        >
          {{ chart3.weight }}%
        </div>
        <div class="col flex justify-content-center p-3">
          <!-- <v-chart class="chart" :option="option3" /> -->
        </div>
      </div>
      <div
        v-if="!chart1 && !chart2 && !chart3"
        class="flex justify-content-center align-content-center align-items-center border-bottom-1 surface-border border-round surface-card text-lg font-medium h-12rem"
      >
        No data was found.
      </div>
      <div class="px-3">
        <p class="text-sm font-medium">
          *Score: 해당 Loss 예측 기여도 *Weight: Feature importance
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  MarkAreaComponent,
  MarkPointComponent,
  MarkLineComponent,
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { watchEffect } from 'vue';

use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  MarkAreaComponent,
  MarkPointComponent,
  MarkLineComponent,
]);

const props = defineProps({
  chart1: Object,
  chart2: Object,
  chart3: Object,
  days: Object,
  eventDay: Number,
});

const option1 = ref();
const option2 = ref();
const option3 = ref();


watchEffect(() => {
  // if (props.chart1) {
  //   option1.value = getChartOption(
  //     props.chart1.paramNm,
  //     props.days,
  //     props.chart1.paramVal.slice(props.eventDay, props.eventDay + 40),
  //     {},
  //     false,
  //     true,
  //   );
  // }

  // if (props.chart2) {
  //   option2.value = getChartOption(
  //     props.chart2.paramNm,
  //     props.days,
  //     props.chart2.paramVal.slice(props.eventDay, props.eventDay + 40),
  //     { color: '#91CC75' },
  //   );
  // }

  // if (props.chart3) {
  //   option3.value = getChartOption(
  //     props.chart3.paramNm,
  //     props.days,
  //     props.chart3.paramVal.slice(props.eventDay, props.eventDay + 40),
  //     { color: '#FAC858' },
  //     true,
  //     false,
  //   );
  // }
});

const getChartOption = (
  seriesName,
  xAxisData,
  yAxisData,
  lineStyleData,
  isLabelPrint = false,
  isPointPrint = false,
) => {
  let labelValue1 = '';
  let labelValue2 = '';
  let labelPoint = [];

  if (isLabelPrint) {
    labelValue1 = props.days[38];
    labelValue2 = props.days[53];
  }

  if (isPointPrint) {
    labelPoint = [
      {
        name: 'point',
        value: 'Estimated Failure',
        xAxis: props.days[53],
        yAxis: 'max',
      },
    ];
  }

  return {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      top: 23,
      right: '30',
      left: '40',
      width: 'auto',
      height: 80,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxisData,
      show: false,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
      },
    },
    series: [
      {
        name: seriesName,
        type: 'line',
        data: yAxisData,
        symbol: 'none',
        lineStyle: lineStyleData,
        markPoint: {
          symbol: 'rect',
          symbolSize: [130, 30],
          padding: [1, 1, 1, 1],
          data: labelPoint,
        },
        markLine: {
          lineStyle: {
            type: 'dashed',
            color: 'red',
          },
          data: [
            [
              {
                xAxis: props.days[38],
                yAxis: 'min',
                symbol: 'none',
                silent: true,
              },
              {
                xAxis: props.days[38],
                yAxis: 'max',
                label: {
                  normal: {
                    show: true,
                    position: 'start',
                    formatter: labelValue1,
                    color: 'black',
                    distance: 10,
                  },
                },
                lineStyle: {
                  width: '3',
                  color: 'black',
                },
                symbol: 'none',
                silent: true,
                formatter: 'max',
              },
            ],
            [
              {
                xAxis: props.days[53],
                yAxis: 'min',
                symbol: 'none',
                silent: true,
              },
              {
                xAxis: props.days[53],
                yAxis: 'max',
                label: {
                  normal: {
                    show: true,
                    position: 'start',
                    formatter: labelValue2,
                    color: 'red',
                    distance: 10,
                  },
                },
                lineStyle: {
                  width: '3',
                  color: 'red',
                },
                symbol: 'none',
                silent: true,
                formatter: 'max',
              },
            ],
          ],
        },
      },
    ],
  };
};

onMounted(async () => {});
</script>

<style scoped>
.chart {
  height: 130px;
}
</style>
