<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <div class="mx-auto my-12 w-3/4 text-center">
    <h1 class="text-5xl font-700 leading-tight">
      Git commit message example.
    </h1>

    <button class="btn mt-5">
      Star me on GitHub ● 6248★
    </button>
  </div>

  <List :list="config.commitList" />
</template>
