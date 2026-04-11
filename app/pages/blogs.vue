<script setup lang="ts">
const search = ref("");
const { data: posts, status, error } = await useBlogs("blogs-page", search);
</script>

<template>
  <UPage>
    <div class="blogs-hero overflow-hidden">
      <UPageHero
        class="relative z-10"
        title="All Blogs"
        description="A full archive of tutorials, notes, and practical lessons from real projects."
      />
    </div>

    <UPageSection>
      <div class="mb-8 flex justify-center">
        <UInput
          v-model="search"
          icon="i-lucide-search"
          size="xl"
          variant="outline"
          color="neutral"
          placeholder="Search blogs by title or description"
          class="w-full max-w-2xl"
        />
      </div>

      <div
        v-if="status === 'pending'"
        class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <USkeleton v-for="item in 6" :key="item" class="h-88 rounded-2xl" />
      </div>

      <UAlert
        v-else-if="error"
        color="error"
        variant="subtle"
        title="Unable to load blog posts"
        :description="error.message"
      />

      <div v-else-if="posts?.length" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <a
          v-for="post in posts"
          :key="post.id"
          :href="post.url"
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
            <h2 class="line-clamp-2 text-lg font-semibold">
              {{ post.title }}
            </h2>
            <p class="blog-description text-sm text-muted">
              {{ post.description }}
            </p>
          </div>
        </a>
      </div>

      <UAlert
        v-else
        color="neutral"
        variant="subtle"
        :title="search.trim() ? 'No matching blog posts' : 'No blog posts yet'"
        :description="
          search.trim()
            ? 'Try a different keyword or clear the search input.'
            : 'Posts will appear here once Blogger returns published entries.'
        "
      />
    </UPageSection>
  </UPage>
</template>

<style scoped>
.blogs-hero {
  position: relative;
  background-image:
    linear-gradient(135deg, rgb(10 10 10 / 78%), rgb(10 10 10 / 52%)),
    url("/blogs-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.blogs-hero :deep(h1),
.blogs-hero :deep(p) {
  color: white;
}

.blog-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
</style>
