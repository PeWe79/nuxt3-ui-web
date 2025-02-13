<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#ef4444" />
    <div class="flex min-h-screen flex-col overflow-hidden">
      <!-- ./header -->
      <NavBar />

      <main class="my-20 grow">
        <NuxtPage />
      </main>

      <Footer />
    </div>
  </NuxtLayout>
</template>
<style lang="css">
body {
  @apply bg-slate-100 font-sans text-gray-700 antialiased dark:bg-sxvx-dark-bg dark:text-gray-200;
}
</style>
