<template>
  <div class="p-4" role="none">
    <div class="period-filter-panel__header mb-4 flex items-center">
      <img
        class="w-6 h-6 mr-4"
        src="/assets/icons/period-filter-calendar-icon.png"
        alt=""
      />
      <h4>Period</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-auto h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <div class="period-filter-panel__body flex">
      <div class="border-r pr-4 mr-4 flex flex-col" style="width: 150px">
        <div class="h-full mb-0">
          <ul class="period-filter-options">
            <li @click="applyYesterdayRange" class="text-sm border-b py-2 cursor-pointer">Yesterday</li>
            <li @click="applyLastWeekRange" class="text-sm border-b py-2 cursor-pointer">Last 7 Days</li>
            <li @click="applyLast30DaysRange" class="text-sm border-b py-2 cursor-pointer">Last 30 Days</li>
            <li @click="applyCurrentMonthRange" class="text-sm border-b py-2 cursor-pointer">This Month</li>
            <li @click="applyCustomRange" class="text-sm py-2 cursor-pointer">Custom</li>
          </ul>
        </div>
        <button
          @click="applyFilter"
          class="
            bg-green-500
            w-full
            text-white text-sm
            py-1
            text-center
            rounded-sm
          "
        >
          Apply
        </button>
      </div>
      <div>
        <DatePicker
          class="w-full"
          v-model="date"
          :masks="masks"
          :columns="2"
            :available-dates="availableDates"
          :attributes="attributes"
          is-range
        />
      </div>
    </div>
  </div>
</template>
<script>
import { DatePicker } from 'v-calendar'
import { ref } from '@vue/reactivity'
export default {
    components: {
        DatePicker
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        const date = ref(null)

        function applyFilter() {
            console.log(date)
            emit('update:modelValue', date.value)
        }

        const today = new Date();

        let sixMonthsAgo = new Date()
        sixMonthsAgo.setMonth(today.getMonth() - 6)

        let yesterday = new Date()
        yesterday.setDate(today.getDate() - 1)

        let lastWeek = new Date()
        lastWeek.setDate(today.getDate() - 7)

        let last30Days = new Date()
        last30Days.setDate(today.getDate() - 30)

        let thisMonthFirstDate = new Date(today.getFullYear(), today.getMonth(), 1)

        function applyYesterdayRange() {
            date.value = {
                start: yesterday,
                end: yesterday
            }
        }

        function applyLastWeekRange() {
            date.value = {
                start: lastWeek,
                end: yesterday
            }
        }

        function applyLast30DaysRange() {
            date.value = {
                start: last30Days,
                end: yesterday
            }
        }

        function applyCurrentMonthRange() {
            date.value = {
                start: thisMonthFirstDate,
                end: yesterday
            }
        }

        function applyCustomRange() {
            date.value = {
                start: null,
                end: null
            }
        }

        return {
            date,
            masks: {
                weekdays: "WW"
            },
            attributes: [
                {
                    key: 'today',
                    highlight: {
                    color: 'gray',
                    fillMode: 'solid',
                    contentClass: 'italic',
                    },
                    dates: new Date(),
                },
            ],
            applyFilter,
            availableDates: { start: sixMonthsAgo, end: yesterday },
            // 
            applyYesterdayRange,
            applyLastWeekRange,
            applyLast30DaysRange,
            applyCurrentMonthRange,
            applyCustomRange
        }
    },
}
</script>
<style lang="scss" scoped>
.vc-container {
  border: none !important;
}
</style>