<template>
  <div class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded">
    <!-- Fetch and display the Markdown document from current path -->
    <ContentDoc 
        class="prose prose-gray dark:prose-invert max-w-none"
        document="article"
    >
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('blogs', params.slug).fetch()

      return { article }
    }
  }
</script>

<!-- <template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template> -->