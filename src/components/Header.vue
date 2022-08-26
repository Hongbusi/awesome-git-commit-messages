<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212]">
    <nav class="flex justify-between items-center container px-4 mx-auto h-12">
      <h2 class="text-xl font-600">
        Commit Example
      </h2>
      <div class="text-xl">
        <button class="icon-btn mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>

        <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/Hongbusi/commit-example" target="_blank" title="GitHub">
          <div i-carbon-logo-github />
        </a>
      </div>
    </nav>
  </header>
</template>
