<template>
  <content-card>
    <template v-slot:heading>
      <a name="projects" class="pt-32"></a>Projects</template
    >
    <div>
      <h3 class="text-lg font-semibold text-center mb-2">CanSat 2021</h3>
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
        class="my-6 flex flex-col items-center text-gray-600 dark:text-gray-400"
      >
        <img
          data-src="/vegasat.png"
          alt="VegaSat logo"
          width="160"
          height="160"
          class="w-40 lozad"
        />
        VegaSat logo
      </div>

      <h3 class="text-lg font-semibold text-center my-2">CryptoByte</h3>
      <p>
        <a
          href="https://crypto-byte.com/"
          target="_blank"
          rel="noopener"
          class="link-green"
        >
          CryptoByte</a
        >
        is a project where you can buy and sell ERC-721 compliant collectible
        tokens. It also contains ERC-20 tokens (CBTN) which you can receive by
        purchasing collectible tokens.
      </p>
      <div
        class="my-5 flex flex-col items-center text-gray-600 dark:text-gray-400"
      >
        <img
          data-src="/crypto-byte.svg"
          alt="CryptoByte logo"
          width="96"
          height="96"
          class="w-24 lozad"
        />
        <span class="mt-1">CryptoByte logo</span>
      </div>

      <h3 class="text-lg font-semibold text-center my-2">My Github</h3>
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
  </content-card>
</template>
