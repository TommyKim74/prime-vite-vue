<template>
  <div class="w-screen h-screen overflow-hidden">
    <div>
      <TopMenu></TopMenu>
    </div>
    <div class="flex h-full">
      <div class="flex-none" style="width: 270px">
        <LeftMenu></LeftMenu>
      </div>
      <div class="flex h-full w-full p-2">
        <div class="text-center p-3 bg-primary font-bold w-full bg-white">
          <!--상단 타이틀-->
          <div class="card px-0 py-1 md:px-2">
            <div class="flex flex-column card-container gap-3 py-3 px-4">
              ㅁㄴㅇㅁㅇㅁ
            </div>
          </div>
          <!--상단 타이틀-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMenu from '@/layouts/TopMenu.vue';
import LeftMenu from '@/layouts/LeftMenu.vue';
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
