<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Visit Shop",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    to: "http://shop.juanmarcus.com",
    target: "_blank",
  },
  {
    label: "Visit Backoffice",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    to: "http://shopadmin.juanmarcus.com",
    target: "_blank",
  },
]);

const items = ["/shop.juanmarcus.com.png", "/shopadmin.juanmarcus.com.png"];
</script>

<template>
  <UPageCTA
    title="Ecommerce Web Application"
    description="A personal project build with Laravel 12 and Nuxt 4. This project is still in development."
    orientation="horizontal"
    :links="links"
    variant="soft"
  >
    <UCarousel
      v-slot="{ item }"
      dots
      :items="items"
      class="w-full max-w-xs mx-auto"
    >
      <img :src="item" width="320" height="364" class="rounded-lg" />
    </UCarousel>
  </UPageCTA>
</template>
