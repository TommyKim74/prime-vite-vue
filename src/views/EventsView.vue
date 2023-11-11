<template>
  <div class="w-screen h-screen overflow-hidden">
    <div>
      <TopMenu></TopMenu>
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
            class="flex justify-content-between align-items-center surface-border border-round shadow-1 mt-2 px-5 mx-3"
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
          <div class="grid grid-nogutter">
            <div class="col-12 md:col-6 lg:col-3 p-3">
              <div
                class="bg-yellow-50 text-center p-4 border-round flex justify-content-between shadow-1"
              >
                <div class="flex flex-column justify-content-between p-3">
                  <div class="px-3">
                    <span class="text-yellow-700 text-4xl font-semibold mr-2"
                      >대기</span
                    >
                    <span
                      class="text-yellow-700 text-lg vertical-align-text-bottom"
                      >Standby</span
                    >
                  </div>
                  <div class="flex px-3 mt-1">
                    <Button label="W/O 조회" severity="secondary" />
                  </div>
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
                class="bg-purple-50 text-center p-4 border-round flex justify-content-between shadow-1"
              >
                <div class="flex flex-column justify-content-between p-3">
                  <div class="px-3">
                    <span class="text-purple-700 text-4xl font-semibold mr-2"
                      >분석</span
                    >
                    <span
                      class="text-purple-700 text-lg vertical-align-text-bottom"
                      >Analysis</span
                    >
                  </div>
                  <div class="flex px-3 mt-1">
                    <Button label="W/O 조회" severity="secondary" />
                  </div>
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
                class="bg-gray-50 text-center p-4 border-round flex justify-content-between shadow-1"
              >
                <div class="flex flex-column justify-content-between p-3">
                  <div class="px-3">
                    <span class="text-gray-700 text-4xl font-semibold mr-2"
                      >조치</span
                    >
                    <span
                      class="text-gray-700 text-lg vertical-align-text-bottom"
                      >Action</span
                    >
                  </div>
                  <div class="flex px-3 mt-1">
                    <Button label="W/O 조회" severity="secondary" />
                  </div>
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
                class="bg-teal-50 text-center p-4 border-round flex justify-content-between shadow-1"
              >
                <div class="flex flex-column justify-content-between p-3">
                  <div class="px-3">
                    <span class="text-teal-700 text-4xl font-semibold mr-2"
                      >완료</span
                    >
                    <span
                      class="text-teal-700 text-lg vertical-align-text-bottom"
                      >Complete</span
                    >
                  </div>
                  <div class="flex px-3 mt-1">
                    <Button label="W/O 조회" severity="secondary" />
                  </div>
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
          <div class="surface py-2 mx-3">
            <DataTable :value="products" tableStyle="min-width: 50rem">
              <Column field="code" header="Code"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Quantity"></Column>
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
import { ProductService } from '@/service/ProductService';

const selectSearchDate2 = ref('2023-11-01');
const selectSearchDate3 = ref('2023-11-30');

onMounted(() => {
  ProductService.getProductsSmall().then(data => (products.value = data));
});

const products = ref();
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
