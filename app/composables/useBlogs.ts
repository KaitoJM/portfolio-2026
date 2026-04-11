import { computed, toValue, type MaybeRefOrGetter } from "vue";

export interface BlogCard {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  published: string;
}

export function useBlogs(
  key = "blogs",
  search: MaybeRefOrGetter<string> = ""
) {
  const query = computed(() => toValue(search).trim());

  return useAsyncData<BlogCard[]>(
    key,
    async () => {
      const response = await $fetch<{ posts: BlogCard[] }>("/api/blogs", {
        query: {
          q: query.value || undefined
        }
      });

      return response.posts;
    },
    {
      default: () => [],
      watch: [query]
    },
  );
}
