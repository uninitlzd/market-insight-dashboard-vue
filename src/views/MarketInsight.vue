<template>
<div>
  <div class="grid grid-cols-5 items-center">
    <div class="col-span-3">
      <h1 class="text-3xl text-gray-500">Dashboard</h1>
    </div>
    <div class="col-span-2 flex">
      <period-filter-picker class="ml-auto" v-model="periodFilter"/>
    </div>
  </div>
   <div class="px-4 py-2 grid grid-cols-2 bg-green-500 text-white w-full my-5">
      <div>
        <span>MARKET INSIGHTS</span>
      </div>
      <div class="ml-auto flex inline-block">
        <img class="w-5 h-5 mr-1" src="/assets/icons/info-bar-help-icon.png" alt="">
        <a href="#" class="underline text-sm">Click here for Help</a>
      </div>
    </div>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'

import PeriodFilterPanel from '@/components/PeriodFilterPanel.vue'
import PeriodFilterPicker from '@/components/PeriodFilterPicker.vue'

export default defineComponent({
  components: { 
    PeriodFilterPanel,
    PeriodFilterPicker 
  },
  setup() {
    const periodFilter = ref(null)

    return {
      periodFilter
    }
  }
})
</script>