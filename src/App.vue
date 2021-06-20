<template>
  <div class="h-screen">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <dashboard-top-nav/>

    <main>
      <div class="flex overflow-hidden">
        <dashboard-side-nav/>
        <div class="bg-gray-50 w-full p-6">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DashboardTopNav from "@/components/DashboardTopNav.vue"
import DashboardSideNav from '@/components/DashboardSideNav.vue'

export default {
  components: {
    DashboardTopNav,
    DashboardSideNav
  },
  setup() {
    
  },
}
</script>
