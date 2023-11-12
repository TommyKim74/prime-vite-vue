<template>
  <div class="w-screen h-screen overflow-hidden">
    <div>
      <TopMenu :id="3"></TopMenu>
    </div>
    <div class="flex h-full">
      <div class="flex-none" style="width: 270px">
        <PredictionMenu></PredictionMenu>
      </div>
      <div class="flex h-full w-full p-2">
        <div class="p-1 w-full surface-section">
          <!--페이지 타이틀-->
          <ul
            class="surface-card p-2 m-0 list-none flex overflow-x-auto select-none"
          >
            <li class="pr-3">
              <a
                v-ripple
                class="cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
                :class="{
                  'bg-primary hover:bg-primary': active4 === 0,
                  'text-700': active4 !== 0,
                }"
                @click="active4 = 0"
              >
                <!-- <i class="pi pi-home mr-2"></i> -->
                <span class="font-medium text-xl text-900">이상예측 결과</span>
              </a>
            </li>
          </ul>

          <!--페이지 타이틀-->
          <!--필터-->
          <div
            class="flex justify-content-between align-items-center surface-border border-round shadow-1 mt-2 px-5 mx-5 mt-2"
          >
            <div class="flex justify-content-start surface-card gap-3">
              <div class="m-2 py-3">
                <label for="f-fab">공장</label>
                <Dropdown
                  v-model="selectSearchDate1"
                  inputId="f-fab"
                  :options="bizCode"
                  optionLabel="name"
                  placeholder="전체"
                  class="w-full md:w-10rem ml-3"
                />
              </div>
              <div class="m-2 py-3">
                <label for="f-process">공정</label>
                <Dropdown
                  v-model="selectSearchDate1"
                  inputId="f-process"
                  :options="process"
                  optionLabel="name"
                  placeholder="전체"
                  class="w-full md:w-10rem ml-3"
                />
              </div>
              <div class="m-2 py-3">
                <label for="f-equip">설비유형</label>
                <Dropdown
                  v-model="selectSearchDate1"
                  inputId="f-equip"
                  :options="equipment"
                  optionLabel="name"
                  placeholder="전체"
                  class="w-full md:w-10rem ml-3"
                />
              </div>
              <div class="m-2 py-3">
                <label for="f-equip">설비</label>
                <InputText type="text" v-model="value" value="" class="ml-3" />
              </div>
              <div class="m-2 py-3">
                <label for="f-cal1">기간</label>
                <Calendar
                  v-model="selectSearchDate2"
                  dateFormat="yy/mm/dd"
                  class="w-full md:w-7rem ml-3"
                  inputId="f-cal1"
                />
                <span class="mx-2">~</span>
                <Calendar
                  v-model="selectSearchDate3"
                  dateFormat="yy/mm/dd"
                  class="w-full md:w-7rem"
                />
              </div>
              <div class="flex align-items-center justify-content-center gap-1">
                <Button
                  label="1개월"
                  size="small"
                  severity="secondary"
                  outlined
                  class="w-5rem"
                  @click="calMonth(1)"
                />
                <Button
                  label="6개월"
                  size="small"
                  severity="secondary"
                  outlined
                  class="w-5rem"
                  @click="calMonth(7)"
                />
                <Button
                  label="1년"
                  size="small"
                  severity="secondary"
                  outlined
                  class="w-5rem"
                  @click="calMonth(13)"
                />
              </div>
            </div>
            <!--버튼-->
            <div flex justify-content-start surface-card gap-3>
              <!-- <Button label="즐겨찾기" size="small" severity="help" class="w-6rem mr-2" /> -->
              <div flex justify-content-start surface-card gap-3>
                <!-- <Button label="즐겨찾기" size="small" severity="help" class="w-6rem mr-2" /> -->
                <Button
                  label="조회"
                  size="small"
                  class="w-6rem"
                  @click="search"
                />
              </div>
            </div>
          </div>
          <!--필터-->

          <div
            class="flex justify-content-between align-items-center mt-2 mx-5 mt-5"
          >
            <Fieldset legend="예측 진단" class="w-full shadow-1">
              <!--Predictive Analysis-->
              <div class="mt-2 px-3 pt-2" style="min-height: 15rem">
                <div class="flex align-content-center px-3 mb-4">
                  <div class="text-900 text-2xl block font-medium">
                    Predictive Analysis
                  </div>
                </div>
                <DataTable
                  :value="predictiveAnalysis"
                  scrollable
                  scrollHeight="300px"
                  tableStyle="min-width: 50rem"
                >
                  <template #empty>
                    <div
                      class="flex justify-content-center align-content-center align-items-center text-lg font-medium"
                    >
                      No data was found.
                    </div>
                  </template>
                  <Column
                    header="예측 발생 일자"
                    headerStyle="text-align:center;width:250px"
                    bodyStyle="text-align:center;"
                  >
                    <template #body>
                      <div
                        class="flex justify-content-center align-content-center align-items-center"
                      >
                        <span class="cursor-pointer font-bold"
                          >{{ days[38] }} 12:11:45</span
                        >
                      </div>
                    </template>
                  </Column>
                  <Column
                    field="pType"
                    header="예측 유형"
                    headerStyle="text-align:center;width:150px"
                    bodyStyle="text-align:center;"
                  ></Column>
                  <Column
                    field="grade"
                    header="긴급도"
                    headerStyle="text-align:center;width:150px"
                    bodyStyle="text-align:center;"
                  ></Column>
                  <Column
                    header="확률"
                    headerStyle="text-align:center;width:100px"
                    bodyStyle="text-align:center;"
                  >
                    <template #body="{ data }">
                      <div
                        class="flex justify-content-center align-content-center align-items-center"
                      >
                        {{ data.pRate }}%
                      </div>
                    </template>
                  </Column>
                  <Column
                    field="pModel"
                    header="예측 모델ID"
                    headerStyle="text-align:center;width:150px"
                    bodyStyle="text-align:center;"
                  ></Column>
                  <Column
                    field="pFeature"
                    header="예측 인자"
                    headerStyle="text-align:center"
                  ></Column>
                </DataTable>
                <div
                  v-if="predictiveAnalysis"
                  class="flex justify-content-end align-content-center px-3 mt-4"
                >
                  <Button
                    label="Drop"
                    severity="danger"
                    size="small"
                    class="w-6rem mr-2"
                  />
                  <Button
                    label="Accept"
                    severity="success"
                    size="small"
                    class="w-6rem mr-2"
                  />
                  <Button
                    label="데이터 조회"
                    severity="secondary"
                    size="small"
                    class="w-8rem"
                  />
                </div>
              </div>
              <!--Predictive Analysis-->

              <!--Factor Analysis-->
              <div class="mt-2 px-3 pt-2" style="min-height: 15rem">
                <div class="flex align-content-center px-3 mb-4">
                  <div class="text-900 text-2xl block font-medium">
                    Factor Analysis
                  </div>
                </div>
                <PredictionEchart
                  :chart1="chart1"
                  :chart2="chart2"
                  :chart3="chart3"
                  :days="days"
                  :eventDay="eventDay"
                ></PredictionEchart>
              </div>
              <!--Factor Analysis-->
            </Fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMenu from '@/layouts/TopMenu.vue';
import PredictionMenu from '@/layouts/PredictionMenu.vue';
import { ref, onMounted, getCurrentInstance } from 'vue';
import { PredictionService } from '@/service/PredictionService';
import PredictionEchart from '@/views/chart/PredictionEchart.vue';
import { chartDataStore } from '@/stores/Chart';

// import { chartDataStore } from '@/stores/Chart';

const predictiveAnalysis = ref();
const selectSearchDate2 = ref('2023-10-01');
const selectSearchDate3 = ref('2023-11-30');

const chart1 = ref();
const chart2 = ref();
const chart3 = ref();
const days = ref();
const eventDay = ref();

const { proxy } = getCurrentInstance();
const chartStore = chartDataStore();

eventDay.value = proxy.$cmm.randomNumber(800, 900);
console.log(eventDay.value);
days.value = chartStore.chartDayList.slice(eventDay.value, eventDay.value + 60);

[chart1.value, chart2.value, chart3.value] = chartStore.getFactorAnalysis(
  'CF',
  '코팅기',
);

if (chart1.value) {
  chart1.value.score = proxy.$cmm.randomNumber(70, 100);
  chart1.value.weight = proxy.$cmm.randomNumber(50, 100);
}

if (chart2.value) {
  chart2.value.score = proxy.$cmm.randomNumber(30, 70);
  chart2.value.weight = proxy.$cmm.randomNumber(10, 50);
}

if (chart3.value) {
  chart3.value.score = proxy.$cmm.randomNumber(30, 70);
  chart3.value.weight = proxy.$cmm.randomNumber(10, 50);
}

onMounted(() => {
  PredictionService.getPredictionMini().then(
    data => (predictiveAnalysis.value = data),
  );
});
</script>
<style>
.headerClass {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
}
.p-datatable .p-column-header-content {
  display: inline !important;
}
</style>
