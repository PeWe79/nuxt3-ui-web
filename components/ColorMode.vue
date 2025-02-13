<template>
  <div class="relative ml-1 sm:ml-4">
    <button
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      title="Dark/Light mode"
      color="neutral"
      variant="ghost"
      class="flex rounded-xl bg-slate-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800 dark:bg-slate-300"
      @click="isDark = !isDark">
      <Icon
        v-if="$colorMode.value === 'light'"
        name="heroicons:sun"
        class="size-6 text-slate-800 dark:text-slate-800"
        aria-hidden="true" />
      <Icon
        v-else="$colorMode.value === 'dark'"
        name="heroicons:moon"
        class="size-6 text-slate-800 dark:text-slate-800"
        aria-hidden="true" />
    </button>
  </div>
</template>
<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>
