<template>
  <nav class="side-nav border-r bg-white h-full mx-auto text-center">
    <ul>
      <li>
        <a href="" class="hover:bg-gray-300 flex text-gray-400 hover:text-gray-600 transition-colors">
          <MenuAlt2Icon class="h-7 w-7 mx-auto my-auto"/>
        </a>
      </li>
      <li>
        <a href="" class="hover:bg-gray-300 flex">
          <img src="/assets/icons/sidebar-dashboard-icon.svg" class="mx-auto my-auto rounded-sm p-1 bg-white w-6 h-6" alt="">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { MenuAlt2Icon } from "@heroicons/vue/outline"
export default {
  components: {
    MenuAlt2Icon
  },
  setup() {

  },
}
</script>

<style lang="scss" scoped>
.side-nav {
  width: 72px;

  ul li a {
    height: 48px;
    text-align: center;
  }
}
</style>
