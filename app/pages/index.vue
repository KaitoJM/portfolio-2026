<script setup lang="ts">
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
          <p class="uppercase text-xs font-bold mb-4">
            Projects Collaborated<br />
            Through the Years
          </p>
          <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <UPageCard
              title="Capfrance Vacances"
              description="Built the project from the ground up using Laravel and Vue.js, serving as a full-stack developer throughout its development."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/capfrance.png" alt="Capfrance" class="w-full" />
              <div class="flex flex-wrap gap-1 min-h-6">
                <UBadge label="Vue2" variant="outline" />
                <UBadge label="Laravel 9" variant="outline" />
              </div>
            </UPageCard>
            <UPageCard
              title="NIPT Applications and API"
              description="Contributed to a multi-portal project by setting up the My Page application with Nuxt.js and developing a Laravel API migrated from CodeIgniter."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/nipt.png" alt="NIPT" class="w-full" />
              <div class="flex flex-wrap gap-1 min-h-6">
                <UBadge label="Vue2" variant="outline" />
                <UBadge label="NuxtJS" variant="outline" />
                <UBadge label="Laravel 10" variant="outline" />
              </div>
            </UPageCard>
            <UPageCard
              title="Allworld Communications"
              description="This project was built entirely on PrestaShop, leveraging its built-in e-commerce features. My responsibilities included developing the custom theme and implementing the front-end components."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/allworld.png" alt="Tailwind CSS" class="w-full" />
              <div class="flex flex-wrap gap-1 min-h-6">
                <UBadge label="Prestashop" variant="outline" />
                <UBadge label="Smarty" variant="outline" />
              </div>
            </UPageCard>
            <UPageCard
              title="Xode"
              description="This project was developed collaboratively by a team of developers. The main website is built using WordPress, while my contribution focused on the Blockscanner page, which was developed with Next.js and integrates Polkadot APIs to retrieve and display blockchain data."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/xode.png" alt="Tailwind CSS" class="w-full" />
              <div class="flex flex-wrap gap-1 min-h-6">
                <UBadge label="ReactJS" variant="outline" />
              </div>
            </UPageCard>
            <UPageCard
              title="Multipay X API"
              description="Developed the project’s APIs using NestJS, consisting of three distinct APIs, each with its own specific responsibilities, working collaboratively to deliver the overall system functionality."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/multipay-x.png" alt="Tailwind CSS" class="w-full" />
              <div class="flex flex-wrap gap-1 min-h-6">
                <UBadge label="NestJS" variant="outline" />
              </div>
            </UPageCard>
          </div>
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
