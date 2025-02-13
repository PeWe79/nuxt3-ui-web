<template>
  <header style="z-index: 31" class="text-zinc-700 dark:text-zinc-200">
    <div
      :class="{ scrolled }"
      class="header container-fluid fixed inset-x-0 top-0 mx-auto flex justify-between border-b bg-white px-3 py-5 text-zinc-800 shadow-md dark:border-gray-900 dark:bg-sxvx-dark dark:text-zinc-200 dark:shadow-md sm:px-5 lg:mx-0 lg:px-20">
      <NuxtLink to="/" class="flex items-center font-medium text-zinc-900 dark:text-zinc-50">
        <img src="/nuxt-logo.svg" alt="logo" class="h-10 w-10" />
        <span class="ml-3 text-xl">Nuxt Web</span>
      </NuxtLink>

      <!-- Mobile nav -->
      <div class="flex md:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Icon name="heroicons:bars-3" class="size-7" />
        </button>
      </div>
      <ClientOnly>
        <Dialog as="div" class="md:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
          <div class="fixed inset-0 z-10"></div>
          <DialogPanel
            style="z-index: 31"
            class="fixed inset-y-0 right-0 z-10 w-64 max-w-sm overflow-y-auto bg-zinc-50 p-6 text-zinc-600 drop-shadow-2xl dark:bg-zinc-800 dark:text-zinc-200 sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-end">
              <h1 class="text-xl">Menu&nbsp;</h1>
              <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <Icon name="heroicons:x-mark" class="size-7" />
              </button>
            </div>
            <hr />

            <div id="content" class="grow-1 overflow-y-auto">
              <div class="flex justify-end space-x-3 py-6">
                <ColorMode />
              </div>
              <hr />
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-zinc-500/10">
                  <div class="space-y-2 py-6">
                    <NuxtLink
                      to="/"
                      class="block rounded-lg py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">
                      Home
                    </NuxtLink>
                    <NuxtLink
                      to="/about"
                      class="block rounded-lg py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">
                      About
                    </NuxtLink>
                    <NuxtLink
                      to="/services"
                      class="block rounded-lg py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">
                      Services
                    </NuxtLink>
                    <NuxtLink
                      to="/contact"
                      class="block rounded-lg py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">
                      Contact
                    </NuxtLink>
                    <NuxtLink
                      to="/blog"
                      class="block rounded-lg py-2 text-base font-semibold leading-7 hover:text-zinc-800 hover:dark:text-zinc-50">
                      Blog
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <hr />
              <span class="my-4 flex justify-center">
                <a class="text-gray-500">
                  <Icon name="bxl:discord" class="size-6 text-zinc-500" aria-hidden="true" />
                </a>
                <a class="ml-3 text-gray-500">
                  <Icon name="bxl:telegram" class="size-6 text-zinc-500" aria-hidden="true" />
                </a>
                <a class="ml-3 text-gray-500">
                  <Icon name="bxl:vk" class="size-6 text-zinc-500" aria-hidden="true" />
                </a>
                <a class="ml-3 text-gray-500">
                  <Icon name="bxl:apple" class="size-6 text-zinc-500" aria-hidden="true" />
                </a>
              </span>
            </div>
          </DialogPanel>
        </Dialog>
      </ClientOnly>

      <!-- Desktop nav -->
      <nav
        class="hidden flex-wrap items-center justify-center text-base md:ml-4 md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4 lg:flex">
        <NuxtLink to="/" class="group mr-5 transition-all duration-300 ease-in-out">
          <span
            class="bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
            Home
          </span>
        </NuxtLink>
        <NuxtLink to="/about" class="group mr-5 transition-all duration-300 ease-in-out">
          <span
            class="bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
            About
          </span>
        </NuxtLink>
        <NuxtLink to="/services" class="group mr-5 transition-all duration-300 ease-in-out">
          <span
            class="bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
            Services
          </span>
        </NuxtLink>
        <NuxtLink to="/contact" class="group mr-5 transition-all duration-300 ease-in-out">
          <span
            class="bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
            Contact
          </span>
        </NuxtLink>
        <NuxtLink to="/blog" class="group mr-5 transition-all duration-300 ease-in-out">
          <span
            class="bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
            Blog
          </span>
        </NuxtLink>
      </nav>
      <div class="hidden flex-wrap md:flex">
        <ColorMode />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => console.log('Unsubscribed scroll'))
})

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 0
  })
})
</script>
<style scoped>
.header {
  transition: all 0.5s;
  opacity: 1;
}

.header img {
  transition: all 0.5s;
}

.header.hide {
  transform: translateY(-100%);
}

.header.logo_resize img {
  transform: scale(0.8);
}

.header.is-scroll {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  opacity: 0.96;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
