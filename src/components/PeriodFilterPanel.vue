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
        @click="$emit('update:panelVisibility', false)"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-auto h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-600"
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
            <li @click="focusToToday" class="text-sm border-b py-2">
              <span class="cursor-pointer hover:text-green-500">Today</span>
            </li>
            <li
              @click="applyYesterdayRange"
              class="text-sm border-b py-2"
              :class="{ 'text-green-500 font-bold': selectedRange == 1 }"
            >
              <span class="cursor-pointer hover:text-green-500">Yesterday</span>
            </li>
            <li
              @click="applyLastWeekRange"
              class="text-sm border-b py-2 hover:text-green-500"
              :class="{ 'text-green-500 font-bold': selectedRange == 2 }"
            >
              <span class="cursor-pointer hover:text-green-500"
                >Last 7 Days</span
              >
            </li>
            <li
              @click="applyLast30DaysRange"
              class="text-sm border-b py-2"
              :class="{ 'text-green-500 font-bold': selectedRange == 3 }"
            >
              <span class="cursor-pointer hover:text-green-500"
                >Last 30 Days</span
              >
            </li>
            <li
              @click="applyCurrentMonthRange"
              class="text-sm border-b py-2"
              :class="{ 'text-green-500 font-bold': selectedRange == 4 }"
            >
              <span class="cursor-pointer hover:text-green-500"
                >This Month</span
              >
            </li>
            <li
              @click="applyCustomRange"
              class="text-sm py-2"
              :class="{ 'text-green-500 font-bold': selectedRange == -1 }"
            >
              <span class="cursor-pointer hover:text-green-500">Custom</span>
            </li>
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
          ref="datePicker"
          class="w-full"
          v-model="dateRange"
          :masks="masks"
          :columns="2"
          :available-dates="availableDates"
          :attributes="attributes"
          is-range
          color="green"
        />
      </div>
    </div>
    <TransitionRoot as="template" :show="dialogWarningIsOpen">
      <Dialog
        as="div"
        static
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="dialogWarningIsOpen = false"
        :dialogWarningIsOpen="dialogWarningIsOpen"
      >
        <div
          class="
            flex
            items-end
            justify-center
            min-h-screen
            pt-4
            px-4
            pb-20
            text-center
            sm:block
            sm:p-0
          "
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="
                inline-block
                align-bottom
                bg-white
                rounded-lg
                text-left
                overflow-hidden
                shadow-xl
                transform
                transition-all
                sm:my-8
                sm:align-middle
                sm:max-w-lg
                sm:w-full
              "
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="
                      mx-auto
                      flex-shrink-0 flex
                      items-center
                      justify-center
                      h-12
                      w-12
                      rounded-full
                      bg-yellow-100
                      sm:mx-0
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <ExclamationIcon
                      class="h-6 w-6 text-yellow-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Range Limit Reached
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Maximum time range is 6 months
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="button"
                  class="
                    w-full
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    shadow-sm
                    px-4
                    py-2
                    bg-yellow-600
                    text-base
                    font-medium
                    text-white
                    hover:bg-yellow-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500
                    sm:ml-3
                    sm:w-auto
                    sm:text-sm
                  "
                  @click="dialogWarningIsOpen = false"
                >
                  OK
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script>
import { DatePicker } from "v-calendar";
import { ref } from "@vue/reactivity";
import { nextTick, onMounted, watch } from "@vue/runtime-core";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationIcon } from "@heroicons/vue/outline";

export default {
  components: {
    DatePicker,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
  },
  emits: ["update:panelVisibility", "update:modelValue"],
  props: ["panelVisibility", "modelValue"],
  setup(props, { emit }) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const _SIX_MONTHS_IN_DAYS = 182;
    const dialogWarningIsOpen = ref(false);

    const dateRange = ref(props.modelValue);
    const yesterdayDateDiff = ref(0);
    const datePicker = ref(null);

    onMounted(() => {
      onDateRangeChanged();
    });

    const today = new Date();
    const selectedRange = ref(-1);

    let sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    let lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    let last30Days = new Date();
    last30Days.setDate(today.getDate() - 30);

    let thisMonthFirstDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const thisMonthFirstDateDiff = calcDateDiff(yesterday, thisMonthFirstDate);

    function applyYesterdayRange() {
      selectedRange.value = 1;
      dateRange.value = {
        start: yesterday,
        end: yesterday,
      };
    }

    function applyLastWeekRange() {
      selectedRange.value = 2;
      dateRange.value = {
        start: lastWeek,
        end: yesterday,
      };
    }

    function applyLast30DaysRange() {
      selectedRange.value = 3;
      dateRange.value = {
        start: last30Days,
        end: yesterday,
      };
    }

    function applyCurrentMonthRange() {
      selectedRange.value = 4;
      dateRange.value = {
        start: thisMonthFirstDate,
        end: yesterday,
      };
    }

    function applyCustomRange() {
      dateRange.value = {
        start: null,
        end: null,
      };
    }

    function applyFilter() {
      emit("update:modelValue", dateRange.value);
      emit("update:panelVisibility", false);
    }

    function calcDateDiff(end, start) {
      if (end != null && start != null) {
        const utc1 = toUTCDate(start);
        const utc2 = toUTCDate(end);

        return Math.floor((utc2 - utc1) / _MS_PER_DAY) + 1;
      } else {
        return 0;
      }
    }

    function toUTCDate(date) {
      if (date == null) {
        return undefined;
      }
      return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function onDateRangeChanged() {
      yesterdayDateDiff.value = calcDateDiff(yesterday, dateRange.value.start);

      if (toUTCDate(dateRange.value.end) == toUTCDate(yesterday)) {
        switch (yesterdayDateDiff.value) {
          case 1:
            selectedRange.value = 1;
            break;
          case 7:
            selectedRange.value = 2;
            break;
          case 30:
            selectedRange.value = 3;
            break;
          case thisMonthFirstDateDiff:
            selectedRange.value = 4;
            break;
          default:
            selectedRange.value = -1;
            break;
        }
      } else {
        selectedRange.value = -1;
      }
    }

    function focusToToday() {
      datePicker.value.move(new Date());
    }

    watch(
      () => dateRange.value,
      (curr, prev) => {
        onDateRangeChanged();
        let daysDiff = calcDateDiff(curr.end, curr.start);

        // Date Range cannot greather than 6 Months, reset filter, show warning and set datepicker focus to today
        if (daysDiff > _SIX_MONTHS_IN_DAYS) {
          nextTick(() => {
            dateRange.value = prev;
            dialogWarningIsOpen.value = true;
            focusToToday();
          });
        }
      }
    );

    return {
      datePicker,
      dateRange,
      masks: {
        weekdays: "WW",
      },
      attributes: [
        {
          key: "today",
          highlight: {
            color: "gray",
            fillMode: "solid",
            contentClass: "italic",
          },
          dates: new Date(),
        },
      ],
      availableDates: { start: null, end: yesterday },
      selectedRange,
      applyYesterdayRange,
      applyLastWeekRange,
      applyLast30DaysRange,
      applyCurrentMonthRange,
      applyCustomRange,
      applyFilter,
      focusToToday,
      dialogWarningIsOpen,
    };
  },
};
</script>
<style lang="scss" scoped>
.vc-container {
  border: none !important;
}
</style>
