<template>
  <div class="surface-card shadow-1 select-none h-full">
    <ul class="list-none p-2 m-0">
      <li>
        <div
          v-ripple
          class="p-3 flex align-items-center justify-content-between text-500 cursor-pointer p-ripple"
          v-styleclass="{
            selector: '@next',
            enterClass: 'hidden',
            enterActiveClass: 'slidedown',
            leaveToClass: 'hidden',
            leaveActiveClass: 'slideup',
          }"
        >
          <span class="font-medium">HOME</span>
          <i class="pi pi-chevron-down"></i>
        </div>
        <ul class="list-none p-0 m-0 overflow-hidden">
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-home mr-2 text-700"></i>
              <span class="font-medium text-700">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-bookmark mr-2 text-700"></i>
              <span class="font-medium text-700">Bookmarks</span>
              <span
                class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle"
                style="min-width: 1.5rem; height: 1.5rem"
                >3</span
              >
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-users mr-2 text-700"></i>
              <span class="font-medium text-700">Team</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-comments mr-2 text-700"></i>
              <span class="font-medium text-700">Messages</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-calendar mr-2 text-700"></i>
              <span class="font-medium text-700">Calendar</span>
              <span
                class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle"
                style="min-width: 1.5rem; height: 1.5rem"
                >2</span
              >
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="list-none p-2 m-0 border-top-1 surface-border">
      <li>
        <div
          v-ripple
          class="p-3 flex align-items-center justify-content-between text-500 cursor-pointer p-ripple"
          v-styleclass="{
            selector: '@next',
            enterClass: 'hidden',
            enterActiveClass: 'slidedown',
            leaveToClass: 'hidden',
            leaveActiveClass: 'slideup',
          }"
        >
          <span class="font-medium">ORGANIZATION</span>
          <i class="pi pi-chevron-down"></i>
        </div>
        <ul class="list-none p-0 m-0 overflow-hidden">
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-home mr-2 text-700"></i>
              <span class="font-medium text-700">Overview</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
              v-styleclass="{
                selector: '@next',
                enterClass: 'hidden',
                enterActiveClass: 'slidedown',
                leaveToClass: 'hidden',
                leaveActiveClass: 'slideup',
              }"
            >
              <i class="pi pi-chart-bar mr-2 text-700"></i>
              <span class="font-medium text-700">Reports</span>
              <i class="pi pi-chevron-down ml-auto text-500"></i>
            </a>
            <ul
              class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
            >
              <li>
                <a
                  v-ripple
                  class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
                  v-styleclass="{
                    selector: '@next',
                    enterClass: 'hidden',
                    enterActiveClass: 'slidedown',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'slideup',
                  }"
                >
                  <i class="pi pi-chart-line mr-2 text-700"></i>
                  <span class="font-medium text-700">Revenue</span>
                  <i class="pi pi-chevron-down ml-auto text-500"></i>
                </a>
                <ul
                  class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
                >
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
                    >
                      <i class="pi pi-table mr-2 text-700"></i>
                      <span class="font-medium">View</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
                    >
                      <i class="pi pi-search mr-2 text-700"></i>
                      <span class="font-medium text-700">Search</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  v-ripple
                  class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
                >
                  <i class="pi pi-chart-line mr-2 text-700"></i>
                  <span class="font-medium text-700">Expenses</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-bookmark mr-2 text-700"></i>
              <span class="font-medium text-700">Security</span>
              <span
                class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle"
                style="min-width: 1.5rem; height: 1.5rem"
                >3</span
              >
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-users mr-2 text-700"></i>
              <span class="font-medium text-700">Domains</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
