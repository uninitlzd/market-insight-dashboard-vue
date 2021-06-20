<template>
    <div class="relative inline-block text-left" v-click-outside="onClickOutside">
        <div>
          <button @click="panelVisibility = true" type="button" class="inline-flex w-full items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
            <img src="/assets/icons/period-filter-calendar-icon.png" width="22" height="22" alt="">
            <span class="mx-4">Period</span>
            <div class="mr-4">
              <span>{{ $filters.formatDate(periodFilter.start) }}</span>
              <span class="mx-2">-</span>
              <span>{{ $filters.formatDate(periodFilter.end) }}</span>
            </div>
            <!-- Heroicon name: solid/chevron-down -->
            <svg class="-mr-1 ml-2 h-5 w- ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!--
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->
        <div v-if="panelVisibility" style="width: 700px" class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <period-filter-panel v-model:panelVisibility="panelVisibility" v-model="periodFilter" @update:modelValue="$emit('update:modelValue', $event)" @closePanel="panelVisibility = false"/>
        </div>
      </div>
</template>

<script>
import PeriodFilterPanel from "@/components/PeriodFilterPanel.vue"
import { ref } from '@vue/reactivity'
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    components: {
        PeriodFilterPanel
    },
    setup(props, {emit}) {
        let today = new Date();

        let yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        let weekAgo = new Date();
        weekAgo.setDate(today.getDate() - 7);

        const panelVisibility = ref(false)
        
        const periodFilter = ref({
            start: weekAgo,
            end: yesterday
        })
        
        const tempPeriodFilter = ref({
            start: weekAgo,
            end: yesterday
        })

        function onClickOutside() {
            if (panelVisibility.value) {
                panelVisibility.value = false;
            }
        }

        return {
            panelVisibility,
            periodFilter,
            onClickOutside
        }
    }
}
</script>