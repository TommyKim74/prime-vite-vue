<template>
  <div class="w-screen h-screen overflow-hidden">
    <div>
      <TopMenu></TopMenu>
    </div>
    <div class="flex h-full">
      <div class="flex-none" style="width: 270px">
        <PerformanceMenu></PerformanceMenu>
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
                  >설비 종합효율(OEE)</span
                >
              </a>
            </li>
          </ul>

          <!--페이지 타이틀-->

          <!--필터-->

          <div
            class="flex justify-content-between align-items-center surface-border border-round shadow-1 mt-2 px-5 mx-5"
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
                <label for="f-process">생산팀</label>
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
                <label for="f-equip">공정</label>
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
          <!--효울-->
          <div class="mt-5 mx-7">
            <div class="grid mb-2">
              <div class="col-12 md:col-3 p-4">
                <div class="shadow-2 surface-card border-round p-4 h-full">
                  <div
                    class="flex justify-content-between align-items-cneter mb-5"
                  >
                    <div class="flex flex-column row-gap-1">
                      <span class="text-4xl text-900 font-bold"
                        >Compressor</span
                      >
                      <span
                        class="text-lg text-500 font-bold vertical-align-bottom"
                        >가동설비 : 174대</span
                      >
                    </div>
                    <div
                      class="flex justify-content-between align-content-center align-items-center px-2"
                    >
                      <Button
                        icon="pi pi-table"
                        severity="secondary"
                        aria-label="Search"
                        class="mr-2"
                        v-tooltip.bottom="'효율상태'"
                      />
                      <Button
                        icon="pi pi-cog"
                        severity="secondary"
                        aria-label="User"
                        v-tooltip.bottom="'설비상태'"
                      />
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900"
                            >종합효율(OEE)</span
                          >
                        </span>
                        <span class="text-cyan-500 font-medium">97%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-blue-400 h-full"
                          :style="{
                            width: `97%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">시간 가동율</span>
                        </span>
                        <span class="text-indigo-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-pink-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">성능 가동율</span>
                        </span>
                        <span class="text-orange-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-green-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">양품 발생율</span>
                        </span>
                        <span class="text-orange-400 font-medium">93%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-yellow-400 h-full"
                          :style="{
                            width: `93%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 md:col-3 p-4">
                <div class="shadow-2 surface-card border-round p-4 h-full">
                  <div
                    class="flex justify-content-between align-items-cneter mb-5"
                  >
                    <div class="flex flex-column row-gap-1">
                      <span class="text-4xl text-900 font-bold"
                        >Air Cooler</span
                      >
                      <span
                        class="text-lg text-500 font-bold vertical-align-bottom"
                        >가동설비 : 1,293대</span
                      >
                    </div>
                    <div
                      class="flex justify-content-between align-content-center align-items-center px-2"
                    >
                      <Button
                        icon="pi pi-table"
                        severity="secondary"
                        aria-label="Search"
                        class="mr-2"
                        v-tooltip.bottom="'효율상태'"
                      />
                      <Button
                        icon="pi pi-cog"
                        severity="secondary"
                        aria-label="User"
                        v-tooltip.bottom="'설비상태'"
                      />
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900"
                            >종합효율(OEE)</span
                          >
                        </span>
                        <span class="text-cyan-500 font-medium">93%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-blue-400 h-full"
                          :style="{
                            width: `93%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">시간 가동율</span>
                        </span>
                        <span class="text-indigo-500 font-medium">91%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-pink-400 h-full"
                          :style="{
                            width: `91%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">성능 가동율</span>
                        </span>
                        <span class="text-orange-500 font-medium">94%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-green-400 h-full"
                          :style="{
                            width: `94%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">양품 발생율</span>
                        </span>
                        <span class="text-orange-400 font-medium">93%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-yellow-400 h-full"
                          :style="{
                            width: `93%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 md:col-3 p-4">
                <div class="shadow-2 surface-card border-round p-4 h-full">
                  <div
                    class="flex justify-content-between align-items-cneter mb-5"
                  >
                    <div class="flex flex-column row-gap-1">
                      <span class="text-4xl text-900 font-bold">Mixer</span>
                      <span
                        class="text-lg text-500 font-bold vertical-align-bottom"
                        >가동설비 : 488대</span
                      >
                    </div>
                    <div
                      class="flex justify-content-between align-content-center align-items-center px-2"
                    >
                      <Button
                        icon="pi pi-table"
                        severity="secondary"
                        aria-label="Search"
                        class="mr-2"
                        v-tooltip.bottom="'효율상태'"
                      />
                      <Button
                        icon="pi pi-cog"
                        severity="secondary"
                        aria-label="User"
                        v-tooltip.bottom="'설비상태'"
                      />
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900"
                            >종합효율(OEE)</span
                          >
                        </span>
                        <span class="text-cyan-500 font-medium">97%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-blue-400 h-full"
                          :style="{
                            width: `97%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">시간 가동율</span>
                        </span>
                        <span class="text-indigo-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-pink-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">성능 가동율</span>
                        </span>
                        <span class="text-orange-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-green-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">양품 발생율</span>
                        </span>
                        <span class="text-orange-400 font-medium">93%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-yellow-400 h-full"
                          :style="{
                            width: `93%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 md:col-3 p-4">
                <div class="shadow-2 surface-card border-round p-4 h-full">
                  <div
                    class="flex justify-content-between align-items-cneter mb-5"
                  >
                    <div class="flex flex-column row-gap-1">
                      <span class="text-4xl text-900 font-bold">Extruder</span>
                      <span
                        class="text-lg text-500 font-bold vertical-align-bottom"
                        >가동설비 : 9대</span
                      >
                    </div>
                    <div
                      class="flex justify-content-between align-content-center align-items-center px-2"
                    >
                      <Button
                        icon="pi pi-table"
                        severity="secondary"
                        aria-label="Search"
                        class="mr-2"
                        v-tooltip.bottom="'효율상태'"
                      />
                      <Button
                        icon="pi pi-cog"
                        severity="secondary"
                        aria-label="User"
                        v-tooltip.bottom="'설비상태'"
                      />
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900"
                            >종합효율(OEE)</span
                          >
                        </span>
                        <span class="text-cyan-500 font-medium">98%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-blue-400 h-full"
                          :style="{
                            width: `98%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">시간 가동율</span>
                        </span>
                        <span class="text-indigo-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-pink-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">성능 가동율</span>
                        </span>
                        <span class="text-orange-500 font-medium">98%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-green-400 h-full"
                          :style="{
                            width: `98%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">양품 발생율</span>
                        </span>
                        <span class="text-orange-400 font-medium">99%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-yellow-400 h-full"
                          :style="{
                            width: `99%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="grid">
              <div class="col-12 md:col-3 p-4">
                <div class="shadow-2 surface-card border-round p-4 h-full">
                  <div
                    class="flex justify-content-between align-items-cneter mb-5"
                  >
                    <div class="flex flex-column row-gap-1">
                      <span class="text-4xl text-900 font-bold">Pump</span>
                      <span
                        class="text-lg text-500 font-bold vertical-align-bottom"
                        >가동설비 : 5,958대</span
                      >
                    </div>
                    <div
                      class="flex justify-content-between align-content-center align-items-center px-2"
                    >
                      <Button
                        icon="pi pi-table"
                        severity="secondary"
                        aria-label="Search"
                        class="mr-2"
                        v-tooltip.bottom="'효율상태'"
                      />
                      <Button
                        icon="pi pi-cog"
                        severity="secondary"
                        aria-label="User"
                        v-tooltip.bottom="'설비상태'"
                      />
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900"
                            >종합효율(OEE)</span
                          >
                        </span>
                        <span class="text-cyan-500 font-medium">98%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-blue-400 h-full"
                          :style="{
                            width: `98%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">시간 가동율</span>
                        </span>
                        <span class="text-indigo-500 font-medium">96%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-pink-400 h-full"
                          :style="{
                            width: `96%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">성능 가동율</span>
                        </span>
                        <span class="text-orange-500 font-medium">98%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-green-400 h-full"
                          :style="{
                            width: `98%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">양품 발생율</span>
                        </span>
                        <span class="text-orange-400 font-medium">98%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-yellow-400 h-full"
                          :style="{
                            width: `98%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 md:col-3 p-4">
                <div class="shadow-2 surface-card border-round p-4 h-full">
                  <div
                    class="flex justify-content-between align-items-cneter mb-5"
                  >
                    <div class="flex flex-column row-gap-1">
                      <span class="text-4xl text-900 font-bold">Turbine</span>
                      <span
                        class="text-lg text-500 font-bold vertical-align-bottom"
                        >가동설비 : 240대</span
                      >
                    </div>
                    <div
                      class="flex justify-content-between align-content-center align-items-center px-2"
                    >
                      <Button
                        icon="pi pi-table"
                        severity="secondary"
                        aria-label="Search"
                        class="mr-2"
                        v-tooltip.bottom="'효율상태'"
                      />
                      <Button
                        icon="pi pi-cog"
                        severity="secondary"
                        aria-label="User"
                        v-tooltip.bottom="'설비상태'"
                      />
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900"
                            >종합효율(OEE)</span
                          >
                        </span>
                        <span class="text-cyan-500 font-medium">97%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-blue-400 h-full"
                          :style="{
                            width: `97%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">시간 가동율</span>
                        </span>
                        <span class="text-indigo-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-pink-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">성능 가동율</span>
                        </span>
                        <span class="text-orange-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-green-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">양품 발생율</span>
                        </span>
                        <span class="text-orange-400 font-medium">93%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-yellow-400 h-full"
                          :style="{
                            width: `93%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 md:col-3 p-4">
                <div class="shadow-2 surface-card border-round p-4 h-full">
                  <div
                    class="flex justify-content-between align-items-cneter mb-5"
                  >
                    <div class="flex flex-column row-gap-1">
                      <span class="text-4xl text-900 font-bold">열교환기</span>
                      <span
                        class="text-lg text-500 font-bold vertical-align-bottom"
                        >가동설비 : 2,550대</span
                      >
                    </div>
                    <div
                      class="flex justify-content-between align-content-center align-items-center px-2"
                    >
                      <Button
                        icon="pi pi-table"
                        severity="secondary"
                        aria-label="Search"
                        class="mr-2"
                        v-tooltip.bottom="'효율상태'"
                      />
                      <Button
                        icon="pi pi-cog"
                        severity="secondary"
                        aria-label="User"
                        v-tooltip.bottom="'설비상태'"
                      />
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900"
                            >종합효율(OEE)</span
                          >
                        </span>
                        <span class="text-cyan-500 font-medium">99%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-blue-400 h-full"
                          :style="{
                            width: `99%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">시간 가동율</span>
                        </span>
                        <span class="text-indigo-500 font-medium">97%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-pink-400 h-full"
                          :style="{
                            width: `97%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">성능 가동율</span>
                        </span>
                        <span class="text-orange-500 font-medium">98%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-green-400 h-full"
                          :style="{
                            width: `98%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">양품 가동율</span>
                        </span>
                        <span class="text-orange-400 font-medium">97%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-yellow-400 h-full"
                          :style="{
                            width: `97%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 md:col-3 p-4">
                <div class="shadow-2 surface-card border-round p-4 h-full">
                  <div
                    class="flex justify-content-between align-items-cneter mb-5"
                  >
                    <div class="flex flex-column row-gap-1">
                      <span class="text-4xl text-900 font-bold">Blower</span>
                      <span
                        class="text-lg text-500 font-bold vertical-align-bottom"
                        >가동설비 : 677대</span
                      >
                    </div>
                    <div
                      class="flex justify-content-between align-content-center align-items-center px-2"
                    >
                      <Button
                        icon="pi pi-table"
                        severity="secondary"
                        aria-label="Search"
                        class="mr-2"
                        v-tooltip.bottom="'효율상태'"
                      />
                      <Button
                        icon="pi pi-cog"
                        severity="secondary"
                        aria-label="User"
                        v-tooltip.bottom="'설비상태'"
                      />
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900"
                            >종합효율(OEE)</span
                          >
                        </span>
                        <span class="text-cyan-500 font-medium">97%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-blue-400 h-full"
                          :style="{
                            width: `97%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">시간 가동율</span>
                        </span>
                        <span class="text-indigo-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-pink-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">성능 가동율</span>
                        </span>
                        <span class="text-orange-500 font-medium">95%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-green-400 h-full"
                          :style="{
                            width: `95%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div
                        class="flex justify-content-between align-items-center px-1"
                      >
                        <span
                          class="text-900 inline-flex justify-content-between align-items-center"
                        >
                          <span class="font-medium text-900">양품 발생율</span>
                        </span>
                        <span class="text-orange-400 font-medium">93%</span>
                      </div>
                      <div
                        class="surface-300 w-full mt-2"
                        style="height: 7px; border-radius: 4px"
                      >
                        <div
                          class="bg-yellow-400 h-full"
                          :style="{
                            width: `93%`,
                            'border-radius': '4px',
                          }"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--효울-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMenu from '@/layouts/TopMenu.vue';
import PerformanceMenu from '@/layouts/PerformanceMenu.vue';

import { ref } from 'vue';

const selectSearchDate1 = ref('');
const selectSearchDate2 = ref('2023-11-01');
const selectSearchDate3 = ref('2023-11-30');
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
