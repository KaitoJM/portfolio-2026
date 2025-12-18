<script setup lang="ts">
import FeaturedProject from "~/components/FeaturedProject.vue";
import Projects from "~/components/Projects.vue";
import WorkExperienceVue from "~/components/WorkExperience.vue";
</script>

<template>
  <div>
    <UPageHero>
      <template #header>
        <img src="/avatar.png" alt="" class="mx-auto size-50 rounded-full" />
        <h1 class="font-bold text-3xl mt-4">Hi! I'm John</h1>
        <p class="text-xs text-neutral-500 mt-2">
          A dedicated software engineer specializing in web development since
          2015
        </p>
      </template>
      <template #body>
        <p class="text-sm text-neutral-500">
          I'm currently working on my official portfolio.<br />
          For now, Please have a look at this temporary site made entirely from
          Nuxt UI and Tailwind.
        </p>
      </template>
    </UPageHero>

    <UPageSection>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-1/4">
          <p class="uppercase text-xs font-bold mb-4">
            My Work Experience<br />
            Through the Years
          </p>
          <WorkExperienceVue />
        </div>
        <div class="flex-1">
          <p class="uppercase text-xs font-bold mb-4">Featured Project</p>
          <FeaturedProject />
          <p class="uppercase text-xs font-bold mb-4 mt-8">
            Projects Collaborated<br />
            Through the Years
          </p>
          <Projects />
        </div>
      </div>
    </UPageSection>
    <UPageSection>
      <template #header>
        <div class="flex flex-col items-center gap-4">
          <h3 class="text-cenrer font-bold text-xl">Skills & Capabilities</h3>
          <p class="md:w-200 text-center text-sm opacity-80">
            I focus on building reliable, scalable, and user-centered web
            applications using modern development practices. My experience spans
            front-end and back-end development, with an emphasis on performance,
            maintainability, and clean architecture. I enjoy turning complex
            requirements into intuitive digital experiences that are ready for
            real-world use.
          </p>
        </div>
      </template>
      <template #body>
        <div class="flex gap-4 flex-wrap justify-center mt-10">
          <img
            src="/skills/vue.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
          <img
            src="/skills/laravel.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
          <img
            src="/skills/nuxtjs.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
          <img
            src="/skills/react.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
          <img
            src="/skills/nextjs.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
          <img
            src="/skills/nestjs.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
          <img
            src="/skills/tailwind.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
          <img
            src="/skills/mysql.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
          <img
            src="/skills/aws.png"
            class="w-40 h-30 object-contain bg-white p-2 rounded-lg"
            alt="vue"
          />
        </div>
      </template>
    </UPageSection>
  </div>
</template>
