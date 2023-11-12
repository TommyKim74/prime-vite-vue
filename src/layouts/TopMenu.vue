<template>
  <!-- <div
    class="bg-gray-900 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800"
    style="min-height: 84px"
  >
    <div class="flex">
      <div
        class="flex-initial flex align-items-center justify-content-center font-bold m-2 px-5 py-3 text-white text-2xl"
      >
        설비 통합 모니터링
      </div>
      <div class="flex">
        <div class="justify-content-between flex-wrap">
          <div
            class="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round"
          >
            Prime and PrimeFlex
          </div>
          <div
            class="flex-initial flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div
    class="bg-gray-900 py-2 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800"
    style="min-height: 70px"
  >
    <div class="flex-1initial mr-8">
      <p class="font-bold text-white text-2xl w-max mr-5">설비 통합 모니터링</p>
    </div>
    <div
      class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800"
    >
      <ul
        class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row"
      >
        <li class="mr-4 font-bold" @click="goPage('status')">
          <a
            v-ripple
            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <i
              class="pi pi-desktop mr-2"
              :class="{ 'text-yellow-300': props.id === 0 }"
            ></i>
            <span
              class="font-bold"
              :class="{ 'text-yellow-300': props.id === 0 }"
              >설비운전상태</span
            >
          </a>
        </li>
        <li class="mr-4" @click="goPage('performance')">
          <a
            v-ripple
            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <i
              class="pi pi-th-large mr-2"
              :class="{ 'text-yellow-300': props.id === 1 }"
            ></i>
            <span
              class="font-bold"
              :class="{ 'text-yellow-300': props.id === 1 }"
              >설비운전성능</span
            >
          </a>
        </li>
        <li class="mr-4" @click="goPage('event')">
          <a
            v-ripple
            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <i
              class="pi pi-chart-bar mr-2"
              :class="{ 'text-yellow-300': props.id === 2 }"
            ></i>
            <span
              class="font-bold"
              :class="{ 'text-yellow-300': props.id === 2 }"
              >이상발생실적</span
            >
          </a>
        </li>
        <li class="mr-4" @click="goPage('prediction')">
          <a
            v-ripple
            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <i
              class="pi pi-chart-line mr-2"
              :class="{ 'text-yellow-300': props.id === 3 }"
            ></i>
            <span
              class="font-bold"
              :class="{ 'text-yellow-300': props.id === 3 }"
              >이상예측실적</span
            >
          </a>
        </li>
        <li class="mr-4">
          <a
            v-ripple
            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <i class="pi pi-database mr-2"></i>
            <span class="font-bold">이상조치실적</span>
          </a>
        </li>
      </ul>
      <ul
        class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row"
      >
        <li class="flex-order-2 lg:flex-order-0">
          <div class="flex px-6 p-3 lg:px-3 lg:py-2">
            <span class="p-input-icon-left w-full">
              <i class="pi pi-search text-gray-400"></i>
              <InputText
                type="text"
                placeholder="Search"
                class="bg-gray-800 text-gray-400 border-gray-800 w-full"
              />
            </span>
          </div>
        </li>
        <li class="border-top-1 border-gray-800 lg:border-top-none">
          <a
            v-ripple
            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <img
              src="images/blocks/avatars/circle/avatar-f-1.png"
              class="mr-3 lg:mr-0"
              style="width: 28px; height: 28px"
            />
            <div class="block lg:hidden">
              <div class="text-white font-medium">Josephine Lillard</div>
              <span class="text-gray-400 font-medium text-sm"
                >Marketing Specialist</span
              >
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  id: 0,
});

const router = useRouter();
const goPage = path => {
  router.push(path);
};
</script>

<style lang="scss" scoped></style>
