<template>
  <div class="surface-card select-none p-3 h-full">
    <div class="p-3 flex align-items-center text-900">
      <i class="pi pi-book mr-2"></i>
      <span class="font-bold">설비운전성능</span>
    </div>
    <ul class="list-none pl-3 m-0">
      <li class="flex overflow-hidden">
        <div
          class="surface-200 flex flex-column align-items-center justify-content-center z-1"
          style="width: 2px"
        >
          <div
            v-if="activeTab1 == 0"
            class="bg-primary border-2 border-circle border-primary"
            style="width: 0.75rem; height: 0.75rem"
          ></div>
        </div>
        <a
          v-ripple
          class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 p-ripple"
          :class="{ 'text-primary': activeTab1 === 0 }"
          @click="activeTab1 = 0"
        >
          <span class="font-medium">설비 신뢰성 지표</span>
        </a>
      </li>
      <li class="flex overflow-hidden">
        <div
          class="surface-200 flex flex-column align-items-center justify-content-center z-1"
          style="width: 2px"
        >
          <div
            v-if="activeTab1 == 1"
            class="bg-primary border-2 border-circle border-primary"
            style="width: 0.75rem; height: 0.75rem"
          ></div>
        </div>
        <a
          v-ripple
          class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 p-ripple"
          :class="{ 'text-primary': activeTab1 === 1 }"
          @click="activeTab1 = 1"
        >
          <span class="font-medium">운전효율지표</span>
        </a>
      </li>
      <!-- <li class="flex overflow-hidden">
        <div
          class="surface-200 flex flex-column align-items-center justify-content-center z-1"
          style="width: 2px"
        >
          <div
            v-if="activeTab1 == 2"
            class="bg-primary border-2 border-circle border-primary"
            style="width: 0.75rem; height: 0.75rem"
          ></div>
        </div>
        <a
          v-ripple
          class="flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 p-ripple"
          :class="{ 'text-primary': activeTab1 === 2 }"
          @click="activeTab1 = 2"
        >
          <span class="font-medium">Reports</span>
        </a>
      </li>
      <li class="flex flex-wrap overflow-hidden">
        <div
          class="surface-200 flex flex-column align-items-center justify-content-center z-1"
          style="width: 2px"
        >
          <div
            v-if="activeTab1 == 3"
            class="bg-primary border-2 border-circle border-primary"
            style="width: 0.75rem; height: 0.75rem"
          ></div>
        </div>
        <a
          v-ripple
          class="flex align-items-center justify-content-between flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 p-ripple"
          :class="{ 'text-primary': activeTab1 === 3 }"
          @click="activeTab1 = 3"
          v-styleclass="{
            selector: '@next',
            enterClass: 'hidden',
            enterActiveClass: 'slidedown',
            leaveToClass: 'hidden',
            leaveActiveClass: 'slideup',
          }"
        >
          <span class="font-medium">Domains</span>
          <span class="pi pi-angle-down text-600"></span>
        </a>
        <ul class="w-full m-0 p-0 overflow-hidden">
          <li class="flex align-items-stretch">
            <div
              class="surface-200 flex flex-column align-items-center justify-content-center z-1"
              style="width: 2px"
            >
              <div
                v-if="activeTab1 == 4"
                class="bg-primary border-2 border-circle border-primary"
                style="width: 0.75rem; height: 0.75rem"
              ></div>
            </div>
            <a
              v-ripple
              class="flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 p-ripple"
              :class="{ 'text-primary': activeTab1 === 4 }"
              @click="activeTab1 = 4"
            >
              <span class="font-medium">DNS Settings</span>
            </a>
          </li>
          <li class="flex align-items-stretch">
            <div
              class="surface-200 flex flex-column align-items-center justify-content-center z-1"
              style="width: 2px"
            >
              <div
                v-if="activeTab1 == 5"
                class="bg-primary border-2 border-circle border-primary"
                style="width: 0.75rem; height: 0.75rem"
              ></div>
            </div>
            <a
              v-ripple
              class="flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 p-ripple"
              :class="{ 'text-primary': activeTab1 === 5 }"
              @click="activeTab1 = 5"
            >
              <span class="font-medium">Renewal</span>
            </a>
          </li>
        </ul>
      </li> -->
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeTab1 = ref(1);
</script>

<style lang="scss" scoped></style>
