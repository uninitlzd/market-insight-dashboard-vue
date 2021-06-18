<script>
import { defineComponent } from 'vue'
import ButtonRepo from '@/components/ButtonRepo.vue'

export default defineComponent({
  components: { ButtonRepo },
})
</script>

<template>
<div>
  <div class="grid-cols-3">
    <div>
      <h1 class="text-3xl text-gray-500">Dashboard</h1>
    </div>
    <div class="col-span-2"></div>
  </div>
</div>
</template>