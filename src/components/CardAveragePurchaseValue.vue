<template>
  <div class="bg-white border rounded-sm p-4">
    <div class="flex items-center mb-2">
      <h4 class="text-gray-400">AVERAGE PURCHASE VALUE</h4>
      <div class="ml-auto flex items-center">
        <button
          type="button"
          class="
            mr-2
            items-center
            inline-flex
            justify-center
            w-full
            rounded-md
            border border-gray-300
            shadow-sm
            px-2
            py-1
            bg-white
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-100
            focus:ring-indigo-500
          "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <span class="text-xs">Last 6 months</span>
          <!-- Heroicon name: solid/chevron-down -->
          <svg
            class="-mr-1 ml-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
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
    <div class="">
      <apexchart
        type="line"
        height="auto"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import Apexchart from "vue3-apexcharts";

export default {
  components: {
    Apexchart,
  },
  setup() {
    return {
      series: [
        {
          data: [25_000, 23_000, 19_000, 22_000, 23_000, 25_000],
          name: "Nett",
          type: "column",
        },
        {
          data: [3_000, 2_000, 2_000, 3_000, 3_000, 5_000],
          name: "Gross",
          type: "column",
        },
        {
          data: [25_000, 23_000, 19_000, 22_000, 23_000, 30_000],
          name: "APV",
          type: "line",
        },
      ],
      chartOptions: {
        colors: ["#37B04C", "#289E45", "#FFE854"],
        chart: {
          height: 400,
          redrawOnParentResize: true,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
          type: "line",
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
            size: 5,
        },
        noData: {
          align: "center",
          text: "No data available at the moment",
          verticalAlign: "middle",
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        stroke: {
          width: [0, 0, 4],
        },
        title: {
          text: "Completion Count and Percentage",
        },
        xaxis: {
          categories: [
              '01 June 2021', '02 June 2021', '03 June 2021', '04 June 2021', '05 June 2021', '06 June 2021', '07 June 2021'
          ],
          type: "category",
        },
        yaxis: [
          {
            title: {
              text: "Counts",
            },
            max: 30_000,
          },
        ],
      },
    };
  },
};
</script>