<script setup lang="ts">
import BlogsSection from "~/components/BlogsSection.vue";
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
      </template>
      <template #body>
        <p class="text-lg text-neutral-600 mb-8">
          I’m a full stack web developer who’s been building applications since
          2015.
        </p>
        <p class="text-sm text-neutral-400 max-w-250 mx-auto">
          Working across both frontend and backend technologies. Over the years,
          I’ve had the opportunity to work on a wide range of projects—from
          eCommerce platforms and internal business tools to APIs and scalable
          web systems.
          <br />
          <br />
          This site is where I document what I learn along the way. Instead of
          just showcasing finished projects, I share the actual process behind
          them—the decisions, the challenges, and the solutions that worked (and
          sometimes didn’t). Most of the content here is based on real-world
          experience, whether it’s working with Nuxt, Laravel, integrating APIs,
          or exploring new tools and technologies.
          <br />
          <br />
          You’ll find a mix of tutorials, technical deep dives, and practical
          insights that are meant to be useful for other developers, especially
          those building modern web applications. I also use this space to
          explore ideas beyond the default limitations of tools—figuring out how
          to extend, optimize, and make them work better in real scenarios.
          <br />
          <br />
          If you’re into web development, building side projects, or just
          curious about how things work under the hood, this blog is for you.
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

    <BlogsSection />

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
