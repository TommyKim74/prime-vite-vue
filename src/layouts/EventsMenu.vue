<template>
  <div class="surface-card select-none p-3 h-full">
    <div class="p-3 flex align-items-center text-900">
      <i class="pi pi-book mr-2"></i>
      <span class="font-bold">이상발생실적</span>
    </div>
    <ul class="list-none pl-3 m-0">
      <li class="flex overflow-hidden" @click="goPage('event')">
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
          <span class="font-medium">Alert/Event</span>
        </a>
      </li>
      <li class="flex overflow-hidden" @click="goPage('history')">
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
          <span class="font-medium">설비고장</span>
        </a>
      </li>
      <li class="flex overflow-hidden">
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
          <span class="font-medium">분석결과</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const activeTab1 = ref(0);

const router = useRouter();
const goPage = (path) => {
    router.push(path);
 }  
</script>

<style lang="scss" scoped></style>
