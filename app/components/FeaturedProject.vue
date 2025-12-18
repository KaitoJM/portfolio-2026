<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Check it out",
    color: "primary",
    trailingIcon: "i-lucide-arrow-right",
    to: "http://shop.juanmarcus.com",
    target: "_blank",
  },
]);
</script>

<template>
  <UPageCTA
    title="Ecommerce Admin Application"
    description="A personal project build with Laravel 12 and Nuxt 4. This project is still in development."
    orientation="horizontal"
    :links="links"
  >
    <img
      src="../../ecommerce.png"
      width="320"
      height="364"
      alt="Illustration"
      class="w-full rounded-lg"
    />
  </UPageCTA>
</template>
