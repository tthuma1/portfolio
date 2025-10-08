<template>
  <ContentCard>
    <template v-slot:heading>
      <a name="projects" class="pt-32"></a>Projects</template
    >
    <div>
      <h3 class="mb-2 text-lg font-semibold text-center">CanSat 2021</h3>
      <p>
        I worked on building a
        <a
          href="https://www.esa.int/Education/CanSat"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
        >
          CanSat</a
        >
        in a team of 4 members for Cansat 2021. Our achievements can be found
        <a
          href="https://vegasat.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
          >on our blog</a
        >. Our goal was to build a probe the size of a soda can which performs
        different measurements.
      </p>
      <div
        class="flex flex-col items-center my-6 text-gray-600 dark:text-gray-400"
      >
        <NuxtImg
          src="/vegasat.png"
          alt="VegaSat logo"
          width="160"
          height="160"
          class="w-40"
          loading="lazy"
        />
        VegaSat logo
      </div>

      <h3 class="my-2 text-lg font-semibold text-center">WaveChat</h3>
      <p>
        <a
          href="https://github.com/tthuma1/wavechat"
          target="_blank"
          rel="noopener"
          class="link-green"
        >
          WaveChat</a
        >
        is an instant communication web app which I have created for my
        <a
          href="https://en.wikipedia.org/wiki/Matura"
          target="_blank"
          rel="noopener"
          class="link-green"
          >matura</a
        >
        project. You can read
        <a
          href="/wavechat_porocilo.pdf"
          target="_blank"
          rel="noopener"
          class="link-green"
        >a paper (in Slovene)</a>
        that I wrote about it.
      </p>
      <div
        class="flex flex-col items-center my-5 text-gray-600 dark:text-gray-400"
      >
        <NuxtImg
          src="wavechat.png"
          alt="WaveChat logo"
          width="96"
          height="96"
          class="w-24"
          loading="lazy"
        />
        <span class="mt-1">WaveChat logo</span>
      </div>

      <h3 class="my-2 text-lg font-semibold text-center">My Github</h3>
      <p>
        To see more of the projects I have made, you can check out
        <a
          href="https://github.com/tthuma1"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
        >
          my Github account</a
        >.
      </p>
    </div>
  </ContentCard>
</template>
