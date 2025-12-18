<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/juanlogo.png" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "John Mark Mancol";
const description =
  "A dedicated software engineer specializing in web development since 2015";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <UUser
          name="John Mark Mancol"
          description="Full Stack Web Developer"
          :avatar="{
            src: '/avatar.png',
            icon: 'i-lucide-image',
          }"
        />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/KaitoJM"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-lucide-code" />

    <UFooter>
      <template #left>
        <img
          src="/juanlogo.png"
          alt=""
          class="size-16 dark:invert dark:brightness-200 opacity-10"
        />
      </template>

      <template #right>
        <p class="text-sm text-muted mr-4">johnmarkmancol@gmail.com</p>
        <UButton
          to="https://pin.it/6pki3iUiZ"
          target="_blank"
          icon="i-simple-icons-pinterest"
          aria-label="Pinterest"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://www.linkedin.com/in/john-mark-mancol-441b30b3/"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://github.com/KaitoJM"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
