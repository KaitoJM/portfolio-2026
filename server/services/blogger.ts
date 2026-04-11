export interface BloggerCard {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  published: string;
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

interface BloggerFeedResponse {
  feed?: {
    entry?: BloggerFeedEntry[];
  };
}

const fallbackImage =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80";

function normalizeBlogIds(rawBlogIds?: string) {
  return (rawBlogIds ?? "")
    .split(",")
    .map((blogId) => blogId.trim())
    .filter(Boolean);
}

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

  return match?.[1] ?? fallbackImage;
}

function mapFeedEntryToCard(entry: BloggerFeedEntry): BloggerCard {
  const alternateLink =
    entry.link?.find((link) => link.rel === "alternate")?.href ?? "#";
  const content = entry.content?.$t ?? "";

  return {
    id: entry.id?.$t ?? alternateLink,
    title: entry.title?.$t ?? "Untitled Post",
    description: getDescription(content),
    image: getThumbnail(content),
    url: alternateLink,
    published: entry.published?.$t ?? new Date(0).toISOString()
  };
}

async function fetchBlogPosts(blogId: string) {
  const response = await $fetch<BloggerFeedResponse>(
    `https://www.blogger.com/feeds/${blogId}/posts/default`,
    {
      query: {
        alt: "json",
        "max-results": 100
      }
    }
  );

  return (response.feed?.entry ?? []).map(mapFeedEntryToCard);
}

export async function fetchBlogsFromConfig(searchQuery = "") {
  const config = useRuntimeConfig();
  const blogIds = normalizeBlogIds(config.blogIds);

  if (!blogIds.length) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing blog IDs. Set BLOG_ID or BLOG_IDS in your environment."
    });
  }

  const blogEntries = await Promise.all(
    blogIds.map((blogId) => fetchBlogPosts(blogId))
  );

  const posts = blogEntries
    .flat()
    .sort(
      (left, right) =>
        new Date(right.published).getTime() - new Date(left.published).getTime()
    );

  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (!normalizedQuery) {
    return posts;
  }

  return posts.filter((post) =>
    `${post.title} ${post.description}`.toLowerCase().includes(normalizedQuery)
  );
}
