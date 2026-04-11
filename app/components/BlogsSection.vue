<script setup lang="ts">
const { data, status, error } = await useBlogs("blogs-section");

const posts = computed(() => (data.value ?? []).slice(0, 3));
</script>

<template>
  <UPageSection>
    <template #header>
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="text-center md:text-left">
          <h3 class="font-bold text-xl">Latest Blogs</h3>
          <p class="max-w-2xl text-sm opacity-80">
            Thoughts, tutorials, and build notes from recent work.
          </p>
        </div>

        <UButton to="/blogs" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-right">
          View all
        </UButton>
      </div>
    </template>

    <template #body>
      <div v-if="status === 'pending'" class="grid gap-6 md:grid-cols-3 mt-10">
        <USkeleton v-for="item in 3" :key="item" class="h-80 rounded-2xl" />
      </div>

      <UAlert
        v-else-if="error"
        class="mt-10"
        color="error"
        variant="subtle"
        title="Unable to load blog posts"
        :description="error.message"
      />

      <div v-else-if="posts.length" class="grid gap-6 md:grid-cols-3 mt-10">
        <a
          v-for="post in posts"
          :key="post.id"
          :href="post.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group overflow-hidden rounded-2xl border border-default bg-default shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div class="space-y-3 p-5">
            <p class="text-xs uppercase tracking-[0.24em] text-muted">
              {{ new Date(post.published).toLocaleDateString("en-US") }}
            </p>
            <h4 class="line-clamp-2 text-lg font-semibold">
              {{ post.title }}
            </h4>
            <p class="text-sm text-muted">
              {{ post.description }}
            </p>
          </div>
        </a>
      </div>

      <UAlert
        v-else
        class="mt-10"
        color="neutral"
        variant="subtle"
        title="No blog posts yet"
        description="Posts will appear here once Blogger returns published entries."
      />
    </template>
  </UPageSection>
</template>

<style scoped>
.blog-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
</style>
