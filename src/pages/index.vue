<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <div class="mx-auto my-12 text-center">
    <h1 class="mb-5 text-5xl font-700 leading-tight">
      A collection of git commit message examples to make your project's commit history more readable.
    </h1>

    <HeroButton repo="git-commit-message-example" />
  </div>

  <List :list="config.commitList" />
</template>
