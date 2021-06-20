<template>
  <div class="pb-20">
    <div class="">
      <div class="grid grid-cols-5 items-center">
        <div class="col-span-3">
          <h1 class="text-3xl text-gray-500">Dashboard</h1>
        </div>
        <div class="col-span-2 flex">
          <period-filter-picker class="ml-auto" v-model="periodFilter" />
        </div>
      </div>
      <div
        class="
          px-4
          py-2
          grid grid-cols-2
          bg-green-500
          text-white
          w-full
          my-5
          rounded-sm
        "
      >
        <div>
          <span>MARKET INSIGHTS</span>
        </div>
        <div class="ml-auto flex inline-block">
          <img
            class="w-5 h-5 mr-1"
            src="/assets/icons/info-bar-help-icon.png"
            alt=""
          />
          <a href="#" class="underline text-sm">Click here for Help</a>
        </div>
      </div>
      <div class="grid grid-cols-4 mb-5">
        <div class="bg-white border rounded-sm p-4">
          <div class="flex items-center mb-4">
            <h4 class="text-gray-400 text-sm">Sales Turnover</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 ml-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </div>
          <div class="flex items-center">
            <div>
              <h3 class="font-bold text-xl mb-1">Rp3,600,000</h3>
              <p class="flex items-center text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  /></svg
                ><span class="text-red-700">13.8%</span>&nbsp;
                <span class="text-gray-400">last period in products sold</span>
              </p>
            </div>
            <img
              src="/assets/icons/sales-turnover-cart-icon.svg"
              class="w-11 h-11 ml-auto mr-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 3rd Row -->

    <div class="grid grid-cols-8 gap-5">
      <div class="col-span-4">
        <card-average-purchase-value />
      </div>
      <div class="col-span-2">
        <div class="bg-white border rounded-sm p-4">
          <div class="flex items-center mb-2">
            <h4 class="text-gray-400">BEST SELLING SKU</h4>
            <div class="ml-auto flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-2">
            <div
              class="
                bg-yellow-200
                w-full
                h-32
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-32 w-24 rounded-md rounded-r-none border-t border-b object-cover"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-xl text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                w-full
                h-24
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-24 w-24 rounded-md rounded-r-none bg-auto p-1"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-md text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                w-full
                h-24
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-24 w-24 rounded-md rounded-r-none bg-auto p-1"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-md text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                w-full
                h-24
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-24 w-24 rounded-md rounded-r-none bg-auto p-1"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-md text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                w-full
                h-24
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-24 w-24 rounded-md rounded-r-none bg-auto p-1"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-md text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="bg-white border rounded-sm p-4">
          <div class="flex items-center mb-2">
            <h4 class="text-gray-400">TOP COMPETITOR SKU</h4>
            <div class="ml-auto flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-2">
            <div
              class="
                bg-yellow-200
                w-full
                h-32
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-32 w-24 rounded-md rounded-r-none border-t border-b object-cover"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-xl text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                w-full
                h-24
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-24 w-24 rounded-md rounded-r-none bg-auto p-1"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-md text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify">
                  <span>Rp34.000.00,00</span><br>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                w-full
                h-24
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-24 w-24 rounded-md rounded-r-none bg-auto p-1"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-md text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                w-full
                h-24
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-24 w-24 rounded-md rounded-r-none bg-auto p-1"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-md text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                w-full
                h-24
                rounded-md
                flex flex-col
                border
                sm:flex-row
                select-none
                items-center
              "
            >
              <img
                src="/assets/images/product-1.jpeg"
                class="h-24 w-24 rounded-md rounded-r-none bg-auto p-1"
              />
              <div class="flex sm:flex-1 flex-col gap-2 p-4">
                <h1 class="text-md text-gray-600">Product A</h1>
                <div class="text-gray-500 text-sm flex flex-wrap justify-between">
                  <span>Rp34.000.00,00</span>
                  <span>250 Items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import PeriodFilterPanel from "@/components/PeriodFilterPanel.vue";
import PeriodFilterPicker from "@/components/PeriodFilterPicker.vue";
import CardAveragePurchaseValue from "@/components/CardAveragePurchaseValue.vue";

export default defineComponent({
  components: {
    PeriodFilterPanel,
    PeriodFilterPicker,
    CardAveragePurchaseValue,
  },
  setup() {
    const periodFilter = ref(null);
    const show = ref(false);

    return {
      periodFilter,
      show,
    };
  },
});
</script>