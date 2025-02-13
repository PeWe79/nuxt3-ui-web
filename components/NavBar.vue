<template>
  <header class="bg-background/75 sticky top-0 z-50 -mb-px border-b border-gray-200 backdrop-blur dark:border-gray-800">
    <div class="mx-auto flex h-[--header-height] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
      <div class="flex min-w-0 items-center gap-1.5 lg:flex-1">
        <NuxtLink to="/" class="flex items-center font-medium text-zinc-900 dark:text-zinc-50">
          <img src="/nuxt-logo.svg" alt="logo" class="h-10 w-10" />
          <span class="ml-3 text-xl">Nuxt Web</span>
        </NuxtLink>

        <!-- Desktop nav -->
        <nav
          class="hidden flex-wrap items-center justify-center text-base md:ml-4 md:mr-auto md:flex md:border-l md:border-gray-400 md:py-1 md:pl-4">
          <NuxtLink to="/" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">Home</NuxtLink>
          <NuxtLink to="/about" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">About</NuxtLink>
          <NuxtLink to="/services" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">Services</NuxtLink>
          <NuxtLink to="/contact" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">Contact</NuxtLink>
          <NuxtLink to="/blog" class="mr-5 hover:text-zinc-800 hover:dark:text-zinc-50">Blog</NuxtLink>
        </nav>
        <div class="hidden flex-wrap md:flex">
          <ColorMode />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped></style>
