import { fetchBlogsFromConfig } from "../services/blogger";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const search = typeof query.q === "string" ? query.q : "";
  const posts = await fetchBlogsFromConfig(search);

  return {
    posts
  };
});
