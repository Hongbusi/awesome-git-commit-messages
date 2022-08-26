<template>
  <div class="sticky top-12 my-8 text-center text-gray bg-white dark:bg-[#121212] title">
    <h3 class="text-3xl font-600 title">
      Chore
    </h3>
  </div>

  <ListItem content="docs: fix typo" description="错字修改" />
</template>

<style scoped>
.title {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 1rem;
}

.title::before,
.title::after {
  @apply content-empty self-center border-t border-gray-200 dark:border-gray-800;
}
</style>
