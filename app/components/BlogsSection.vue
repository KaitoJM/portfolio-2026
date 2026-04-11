<script setup lang="ts">
interface BlogPost {
  id: string;
  title: string;
  content: string;
  url: string;
  published: string;
}

interface BlogCard {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  published: string;
}

interface BloggerFeedResponse {
  feed?: {
    entry?: BloggerFeedEntry[];
  };
}

const fallbackImage =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80";

const config = useRuntimeConfig();

function stripHtml(html: string) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function getDescription(content: string) {
  const plainText = stripHtml(content);

  return plainText.length > 140
    ? `${plainText.slice(0, 137).trimEnd()}...`
    : plainText;
}

function getThumbnail(content: string) {
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);

  return match?.[1] ?? null;
}

function normalizeBlogIds(rawBlogIds: string) {
  return rawBlogIds
    .split(",")
    .map((blogId) => blogId.trim())
    .filter(Boolean);
}

interface BloggerFeedEntry {
  id?: {
    $t?: string;
  };
  title?: {
    $t?: string;
  };
  content?: {
    $t?: string;
  };
  published?: {
    $t?: string;
  };
  link?: Array<{
    rel?: string;
    href?: string;
  }>;
}

function mapFeedEntryToPost(entry: BloggerFeedEntry): BlogPost {
  const alternateLink =
    entry.link?.find((link) => link.rel === "alternate")?.href ?? "#";

  return {
    id: entry.id?.$t ?? alternateLink,
    title: entry.title?.$t ?? "Untitled Post",
    content: entry.content?.$t ?? "",
    url: alternateLink,
    published: entry.published?.$t ?? new Date(0).toISOString(),
  };
}

async function fetchBlogPosts(blogId: string) {
  const response = await $fetch<BloggerFeedResponse>(
    `https://www.blogger.com/feeds/${blogId}/posts/default`,
    {
      query: {
        alt: "json",
        "max-results": 10,
      },
    },
  );

  return (response.feed?.entry ?? []).map(mapFeedEntryToPost);
}

const { data, status, error } = await useAsyncData(
  "blogs-section",
  async () => {
    const blogIds = normalizeBlogIds(config.public.blogIds);

    if (!blogIds.length) {
      throw new Error("Missing blog IDs.");
    }

    const blogEntries = await Promise.all(
      blogIds.map((blogId) => fetchBlogPosts(blogId)),
    );

    return blogEntries.flat();
  },
);

const posts = computed<BlogCard[]>(() => {
  const allPosts =
    data.value?.map((post) => ({
      id: post.id,
      title: post.title,
      description: getDescription(post.content),
      image: getThumbnail(post.content) ?? fallbackImage,
      url: post.url,
      published: post.published,
    })) ?? [];

  return allPosts
    .sort(
      (left, right) =>
        new Date(right.published).getTime() -
        new Date(left.published).getTime(),
    )
    .slice(0, 3);
});
</script>

<template>
  <UPageSection>
    <template #header>
      <div class="flex flex-col items-center gap-4 text-center">
        <h3 class="font-bold text-xl">Latest Blogs</h3>
        <p class="max-w-2xl text-sm opacity-80">
          Thoughts, tutorials, and build notes from recent work.
        </p>
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
            <p class="line-clamp-3 text-sm text-muted">
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
