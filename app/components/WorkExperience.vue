<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

const items = ref<TimelineItem[]>([
  {
    date: "July 2015",
    title: "Rootplus",
    description:
      "Junior Web Developer - Started my journey in this industry with ancient tech stacks (jQuery, CodeIgniter, CSS3)",
    icon: "i-lucide-rocket",
  },
  {
    date: "August 2019",
    title: "Qonvex Technology",
    description:
      "Team Leader, Mid Level Developer - Lead the developement Capfrance (capfrance-vacances.com), a booking website for a leading French holiday network, using Laravel and Vue.js.",
    icon: "i-lucide-code",
  },
  {
    date: "February 2021",
    title: "Human Incubator Inc.",
    description:
      "Mid Level Software Engineer - Lead development for NIPT (hiro-clinic.or.jp) API, an online reservation system for prenatal test in Japan, built with Laravel, Vue.js, and Nuxt.js.",
    icon: "i-lucide-code",
  },
  {
    date: "July 2023",
    title: "Freelance",
    description:
      "Freelance Developer - Developed and maintained an eCommerce platform using PrestaShop.",
    icon: "i-lucide-code",
  },
  {
    date: "May 2023",
    title: "Blockspace Corporation",
    description:
      "Software Engineer - Collaborated on Xode project. A cutting-edge decentralized web technology that enables fast, secure, and scalable cloud hosting",
    icon: "i-lucide-code",
  },
  {
    date: "July 2024",
    title: "Rak Son OPC",
    description:
      "Team Leader Software Engineer - Develop MultipayX API made from NestJS framework and mongoDB.",
    icon: "i-lucide-code",
  },
]);
</script>

<template>
  <UTimeline size="xs" :default-value="6" :items="items" class="w-full" />
</template>
