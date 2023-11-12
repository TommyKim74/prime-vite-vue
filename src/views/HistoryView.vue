<template>
  <div class="w-screen h-screen overflow-hidden">
    <div>
      <TopMenu></TopMenu>
    </div>
    <div class="flex h-full">
      <div class="flex-none" style="width: 270px">
        <HistoryMenu></HistoryMenu>
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
                <span class="font-medium text-xl text-900">이상조치 결과</span>
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
              <Button
                label="조회"
                size="small"
                class="w-6rem"
                @click="search"
              />
            </div>
          </div>
          <!--필터-->

          <!--테이블-->
          <div class="surface py-3 mx-5 mt-3">
            <DataTable
              :value="history"
              paginator
              :rows="10"
              :rowsPerPageOptions="[5, 10, 20, 50]"
              stripedRows
              paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
            >
              <Column
                field="occDt"
                header="일자"
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
                field="issueId"
                header="고장번호"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              >
              </Column>
              <Column
                field="workOder"
                header="W/O"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
              <Column
                field="costCenter"
                header="코스트센터"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
              <Column
                field="workPlace"
                header="작업장"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              ></Column>
              <Column
                header="Link"
                headerStyle="text-align:center"
                bodyStyle="text-align:center"
              >
                <template #body>
                  <div
                    class="flex justify-content-center align-content-center align-items-center"
                  >
                    <span class="cursor-pointer text-blue-500"
                      >설비 상세 Link</span
                    >
                  </div>
                </template>
              </Column>
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
import HistoryMenu from '@/layouts/HistoryMenu.vue';
import { ref, onMounted } from 'vue';
import { HistoryService } from '@/service/HistoryService';

const history = ref();
const selectSearchDate2 = ref('2023-10-01');
const selectSearchDate3 = ref('2023-11-30');

onMounted(() => {
  HistoryService.getHistorySmall().then(data => (history.value = data));
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
