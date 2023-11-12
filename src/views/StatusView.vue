<template>
  <div class="w-screen h-screen overflow-hidden">
    <div>
      <TopMenu :id="0"></TopMenu>
    </div>
    <div class="flex h-full">
      <div class="flex-none" style="width: 270px">
        <StatusMenu></StatusMenu>
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
                <span class="font-medium text-xl text-900">설비상태</span>
              </a>
            </li>
          </ul>

          <!--페이지 타이틀-->

          <!--필터-->
          <div
            class="flex flex-column card-container surface-border border-round shadow-1 px-5 py-4 row-gap-3 my-3 mx-5"
          >
            <div class="flex justify-content-between align-items-center px-4">
              <div class="flex justify-content-start surface-card column-gap-4">
                <div class="">
                  <label for="f-fab" style="display: inline-block; width: 40px"
                    >공장</label
                  >

                  <Dropdown
                    v-model="selectedFactory"
                    :options="select1"
                    optionLabel="name"
                    placeholder="2공장"
                    class="w-full md:w-10rem ml-3"
                  />
                </div>
                <div class="mx-3">
                  <label for="f-fab" style="display: inline-block; width: 40px"
                    >공정</label
                  >

                  <Dropdown
                    v-model="selectedFactory"
                    :options="select2"
                    optionLabel="name"
                    placeholder="No.1 CDU"
                    class="w-full md:w-10rem ml-3"
                  />
                </div>
                <div class="mx-3">
                  <label for="f-fab" style="display: inline-block; width: 60px"
                    >설비유형</label
                  >

                  <Dropdown
                    v-model="selectedFactory"
                    :options="select3"
                    optionLabel="name"
                    placeholder="Compressor"
                    class="w-full md:w-10rem ml-3"
                  />
                </div>
                <div class="mx-3">
                  <label for="f-fab" style="display: inline-block; width: 60px"
                    >설비</label
                  >
                  <InputText type="text" v-model="value" value="87-K-201" />
                </div>
              </div>
              <div flex justify-content-start surface-card gap-3>
                <!-- <Button label="즐겨찾기" size="small" severity="help" class="w-6rem mr-2" /> -->
                <Button label="조회" size="small" class="w-6rem" />
              </div>
            </div>
          </div>
          <!--필터-->

          <!--기본정보-->
          <div class="card mx-5 my-5">
            <div class="flex flex-column card-container">
              <Fieldset
                legend="Equipment Basic Information"
                class="w-full shadow-1 mb-2"
              >
                <div
                  class="flex justify-content-between align-content-center mt-3 px-5 column-gap-3"
                >
                  <div
                    class="flex-initial w-full md:w-25rem flex justify-content-center align-content-center p-5 mr-5"
                  >
                    <!-- <Image src="images/1.png" alt="Image" width="250" /> -->

                    <img
                      src="/images/1.png"
                      class="w-full"
                      alt="Canon FPA-3030iWa"
                    />
                  </div>
                  <div class="flex-auto w-full md:w-25rem">
                    <div
                      class="bg-cyan-50 border-round flex flex-column h-full p-6"
                    >
                      <div class="text-cyan-900 text-3xl font-medium">
                        기본 정보
                      </div>
                      <Divider></Divider>
                      <ul class="pt-0 px-5 mt-0">
                        <li class="line-height-4 border-bottom-1 border-100">
                          유형 : RECYCLE GAS COMPRESSOR
                        </li>
                        <li class="line-height-4">번호 : 87-K-201</li>
                        <li class="line-height-4">
                          위치 : No.4 DHDS (34.85, 127.69)
                        </li>
                        <li class="line-height-4">담당 : 홍길동 엔지니어</li>
                        <li class="line-height-4">제작회사 : ELLIOTT EBARA</li>
                        <li class="line-height-4">
                          구매일자/설치일자 : 2008 / 2008.11.17
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex-auto w-full md:w-25rem">
                    <div
                      class="bg-yellow-50 border-round flex flex-column h-full p-6"
                    >
                      <div class="text-yellow-900 text-3xl font-medium">
                        생산 제품
                      </div>
                      <Divider></Divider>
                      <ul class="pt-0 px-5 mt-0">
                        <li class="line-height-4">Desulfuized</li>
                        <li class="line-height-4">
                          Naphtha, Kerosene, Diesel, VGO, AR, VR
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Fieldset>
            </div>
          </div>
          <!--기본정보-->
          <!--차트-->
          <Fieldset legend="Equipment Status" class="shadow-1 p-3 mx-5">
            <div>
              <StatusEchart></StatusEchart>
            </div>
          </Fieldset>
          <!--차트-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMenu from '@/layouts/TopMenu.vue';
import StatusMenu from '@/layouts/StatusMenu.vue';
import StatusEchart from '@/views/chart/StatusEchart.vue';

import { ref } from 'vue';

const selectedFactory = ref('');
const select1 = ref([
  { name: '1공장', code: 'FA1' },
  { name: '2공장', code: 'FA2' },
]);

const select2 = ref([
  { name: 'Onsite General', code: '01' },
  { name: 'No.1 CDU', code: '02' },
  { name: 'LSR/LPG MEROX', code: '03' },
  { name: 'Hydrobon', code: '04' },
  { name: 'No.1 SRU', code: '05' },
  { name: 'No.1 Kero Merox', code: '06' },
  { name: 'Asphalt Unit', code: '07' },
  { name: 'Asphalt Unit', code: '07' },
  { name: 'No.2 SRU', code: '08' },
  { name: 'Utility', code: '09' },
]);

const select3 = ref([
  { name: 'Heat Exchanger', code: '01' },
  { name: 'Pump', code: '02' },
  { name: 'Compressor', code: '03' },
  { name: 'Turbine', code: '04' },
  { name: 'Blower and Fan', code: '05' },
  { name: 'Mixer and Agitator', code: '06' },
  { name: 'Other Rotating Equipment', code: '07' },
  { name: '', code: '' },
]);
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
