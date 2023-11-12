<template>
  <div class="w-screen h-screen overflow-hidden">
    <div>
      <TopMenu :id="2"></TopMenu>
    </div>
    <div class="flex h-full">
      <div class="flex-none" style="width: 270px">
        <EventsMenu></EventsMenu>
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
                <span class="font-medium text-xl text-900"
                  >Alert / Event 발생현황</span
                >
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
                <label for="f-fab">생산팀</label>
                <Dropdown
                  v-model="selectSearchDate1"
                  inputId="f-fab"
                  :options="bizCode"
                  optionLabel="name"
                  placeholder="정유1팀"
                  class="w-full md:w-10rem ml-3"
                />
              </div>
              <div class="m-2 py-3">
                <label for="f-process">시스템</label>
                <Dropdown
                  v-model="selectSearchDate1"
                  inputId="f-process"
                  :options="process"
                  optionLabel="name"
                  placeholder="CRV"
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
              <Button
                label="조회"
                size="small"
                class="w-6rem"
                @click="search"
              />
            </div>
          </div>
          <!--필터-->

          <!--상태카드-->
          <div class="grid grid-nogutter mt-3 px-3">
            <div class="col-12 md:col-6 lg:col-3 p-3">
              <div
                class="bg-yellow-50 text-center px-5 py-4 border-round flex justify-content-between shadow-1"
              >
                <div class="flex flex-column justify-content-center p-3">
                  <div class="px-3">
                    <span class="text-yellow-700 text-6xl font-semibold mr-2"
                      >대기</span
                    >
                    <span
                      class="text-yellow-700 text-lg vertical-align-text-bottom"
                      >Standby</span
                    >
                  </div>
                  <!-- <div class="flex px-3 mt-1">
                    <Button label="W/O 조회" severity="secondary" />
                  </div> -->
                </div>
                <div
                  class="text-900 text-7xl font-bold felx justify-content-center align-content-center align-items-center text-yellow-600 py-4"
                  style="min-width: 110px"
                >
                  1
                </div>
              </div>
            </div>

            <div class="col-12 md:col-6 lg:col-3 p-3">
              <div
                class="bg-purple-50 text-center px-5 py-4 border-round flex justify-content-between shadow-1"
              >
                <div class="flex flex-column justify-content-center p-3">
                  <div class="px-3">
                    <span class="text-purple-700 text-6xl font-semibold mr-2"
                      >분석</span
                    >
                    <span
                      class="text-purple-700 text-lg vertical-align-text-bottom"
                      >Analysis</span
                    >
                  </div>
                  <!-- <div class="flex px-3 mt-1">
                    <Button label="W/O 조회" severity="secondary" />
                  </div> -->
                </div>
                <div
                  class="text-900 text-7xl font-bold felx justify-content-center align-content-center align-items-center text-purple-600 py-4"
                  style="min-width: 110px"
                >
                  4
                </div>
              </div>
            </div>

            <div class="col-12 md:col-6 lg:col-3 p-3">
              <div
                class="bg-gray-50 text-center px-5 py-4 border-round flex justify-content-between shadow-1"
              >
                <div class="flex flex-column justify-content-center p-3">
                  <div class="px-3">
                    <span class="text-gray-700 text-6xl font-semibold mr-2"
                      >조치</span
                    >
                    <span
                      class="text-gray-700 text-lg vertical-align-text-bottom"
                      >Action</span
                    >
                  </div>
                  <!-- <div class="flex px-3 mt-1">
                    <Button label="W/O 조회" severity="secondary" />
                  </div> -->
                </div>
                <div
                  class="text-900 text-7xl font-bold felx justify-content-center align-content-center align-items-center text-gray-600 py-4"
                  style="min-width: 110px"
                >
                  3
                </div>
              </div>
            </div>

            <div class="col-12 md:col-6 lg:col-3 p-3">
              <div
                class="bg-teal-50 text-center px-5 py-4 border-round flex justify-content-between shadow-1"
              >
                <div class="flex flex-column justify-content-center p-3">
                  <div class="px-3">
                    <span class="text-teal-700 text-6xl font-semibold mr-2"
                      >완료</span
                    >
                    <span
                      class="text-teal-700 text-lg vertical-align-text-bottom"
                      >Complete</span
                    >
                  </div>
                  <!-- <div class="flex px-3 mt-1">
                    <Button label="W/O 조회" severity="secondary" />
                  </div> -->
                </div>
                <div
                  class="text-900 text-7xl font-bold felx justify-content-center align-content-center align-items-center text-teal-600 py-4"
                  style="min-width: 110px"
                >
                  120
                </div>
              </div>
            </div>
          </div>
          <!--상태카드-->

          <!--테이블-->
          <div class="surface py-3 mx-5">
            <DataTable
              :value="events"
              paginator
              :rows="5"
              :rowsPerPageOptions="[5, 10, 20, 50]"
              stripedRows
              paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
            >
              <Column
                field="team"
                header="생산팀"
                headerStyle="text-align:center;width=100px"
              ></Column>
              <Column
                field="system"
                header="시스템"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
              <Column
                field="alertStatus"
                header="Alarm 상태"
                headerStyle="text-align:center"
              >
                <template #body="{ data }">
                  <div
                    v-if="data.alertStatus == '완료'"
                    class="flex justify-content-center align-content-center flex-wrap card-container"
                  >
                    <Tag
                      severity="success"
                      value="완료"
                      class="bg-teal-40 border-teal-400 text-white w-5"
                    ></Tag>
                  </div>
                  <div
                    v-else-if="data.alertStatus == '대기'"
                    class="flex justify-content-center align-content-center flex-wrap card-container"
                  >
                    <Tag
                      severity="warning"
                      value="대기"
                      class="bg-yellow-400 border-yellow-400 text-white w-5"
                    ></Tag>
                  </div>
                  <div
                    v-else-if="data.alertStatus == '분석'"
                    class="flex justify-content-center align-content-center flex-wrap card-container"
                  >
                    <Tag
                      severity="danger"
                      value="분석"
                      class="bg-purple-400 border-purple-400 text-white w-5"
                    ></Tag>
                  </div>
                  <div
                    v-else
                    class="flex justify-content-center align-content-center flex-wrap card-container"
                  >
                    <Tag
                      value="조치"
                      class="bg-gray-400 border-gray-400 text-white w-5"
                    ></Tag>
                  </div>
                </template>
              </Column>
              <Column
                field="occDt"
                header="발생일자"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
              <Column
                field="equipId"
                header="설비번호"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
              <Column
                field="equipStatus"
                header="설비상태"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
              <Column
                field="alertType"
                header="Alarm 유형"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
              <Column
                field="importance"
                header="중요도"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              >
                <template #body="{ data }">
                  <div
                    class="flex justify-content-center align-content-center align-items-center px-5"
                  >
                    <Tag
                      v-if="data.importance == 'High'"
                      severity="danger"
                      value="High"
                      :style="{ width: '50px' }"
                    ></Tag>
                    <Tag
                      v-else-if="data.importance == 'Mid'"
                      severity="warning"
                      value="Middle"
                      :style="{ width: '50px' }"
                    >
                    </Tag>
                    <Tag
                      v-else
                      severity="info"
                      value="Low"
                      :style="{ width: '50px' }"
                    ></Tag>
                  </div>
                </template>
              </Column>
              <Column
                field="report"
                header="조치 Report"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
            </DataTable>
          </div>
          <!--테이블-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMenu from '@/layouts/TopMenu.vue';
import EventsMenu from '@/layouts/EventsMenu.vue';
import { ref, onMounted } from 'vue';
import { EventService } from '@/service/EventService';

const events = ref();
const selectSearchDate2 = ref('2023-10-01');
const selectSearchDate3 = ref('2023-11-30');

onMounted(() => {
  EventService.getEventSmall().then(data => (events.value = data));
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
