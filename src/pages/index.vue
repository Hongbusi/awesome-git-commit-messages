<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <div class="my-10 text-center">
    <h1 class="text-4xl">
      {{ config.title }}
    </h1>
  </div>

  <List :list="config.commitList" />
</template>
