<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#ef4444" />
    <div>
      <!-- ./header -->
      <NavBar />

      <main class="min-h-[calc(100vh-var(--header-height))]">
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
