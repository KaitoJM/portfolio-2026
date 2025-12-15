<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Nuxt Starter Template";
const description =
  "A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.";

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
        <p class="text-sm text-muted">johnmarkmancol@gmail.com</p>
      </template>

      <template #right>
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
