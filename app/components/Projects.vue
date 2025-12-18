<template>
  <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <UPageCard
      title="Capfrance Vacances"
      description="Built the project from the ground up using Laravel and Vue.js, serving as a full-stack developer throughout its development."
      orientation="vertical"
      spotlight
      spotlight-color="primary"
    >
      <img src="/capfrance.png" alt="Capfrance" class="rounded-lg w-full" />
      <div class="flex flex-wrap gap-1 h-fit">
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
      <img src="/nipt.png" alt="NIPT" class="rounded-lg w-full" />
      <div class="flex flex-wrap gap-1 h-fit">
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
      <img src="/allworld.png" alt="Tailwind CSS" class="rounded-lg w-full" />
      <div class="flex flex-wrap gap-1 h-fit">
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
      <img src="/xode.png" alt="Tailwind CSS" class="rounded-lg w-full" />
      <div class="flex flex-wrap gap-1 h-fit">
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
      <img src="/multipay-x.png" alt="Tailwind CSS" class="rounded-lg w-full" />
      <div class="flex flex-wrap gap-1 h-fit">
        <UBadge label="NestJS" variant="outline" />
      </div>
    </UPageCard>
  </div>
</template>
