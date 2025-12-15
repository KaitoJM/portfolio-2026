<script setup lang="ts">
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
        <p class="text-sm">
          I'm currently working on my official portfolio.<br />
          For now, Please have a look at this temporary porfolio made entirely
          from Nuxt UI and Tailwind.
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
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <UPageCard
              title="Capfrance Vacances"
              description="booking website for a leading holiday network"
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/capfrance.png" alt="Capfrance" class="w-full" />
              <div class="flex gap-1 h-6">
                <UBadge label="Vue2" variant="outline" />
                <UBadge label="Laravel 9" variant="outline" />
              </div>
            </UPageCard>
            <UPageCard
              title="NIPT Applications and API"
              description="The primary use of this project for woman to book a reservation for their prenatal test in the Hiro Clinics based on Japan. Status and Lab results are then recorded and displayed on their pages."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/nipt.png" alt="Capfrance" class="w-full" />
              <div class="flex gap-1 h-6">
                <UBadge label="Vue2" variant="outline" />
                <UBadge label="NuxtJS" variant="outline" />
                <UBadge label="Laravel 10" variant="outline" />
              </div>
            </UPageCard>
            <UPageCard
              title="Allworld Communications"
              description="An ecommerce application built for a retailer of cellphone and laptop."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/allworld.png" alt="Tailwind CSS" class="w-full" />
              <div class="flex gap-1 h-6">
                <UBadge label="Prestashop" variant="outline" />
                <UBadge label="Smarty" variant="outline" />
              </div>
            </UPageCard>
            <UPageCard
              title="Xode"
              description="An L1 blockchain platform with its own on-chain governance that aims to bring game development and businesses to Web3 and Polkadot."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/xode.png" alt="Tailwind CSS" class="w-full" />
              <div class="flex gap-1 h-6">
                <UBadge label="ReactJS" variant="outline" />
              </div>
            </UPageCard>
            <UPageCard
              title="Multipay X"
              description="A crypto payment and exchange solution built for Filipino MSMEs and traders—making it easy and secure to accept Bitcoin, Ethereum, Solana, Polkadot, and more."
              orientation="vertical"
              spotlight
              spotlight-color="primary"
            >
              <img src="/multipay-x.png" alt="Tailwind CSS" class="w-full" />
              <div class="flex gap-1 h-6">
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
        <div class="flex gap-4 flex-wrap justify-center">
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
