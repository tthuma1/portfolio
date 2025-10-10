<template>
  <ContentCard>
    <template v-slot:heading>
      <a name="achievements" class="pt-32"></a>Achievements</template
    >
    <div>
      <p>
        I have participated in various competitions, mostly in math and science.
        I am often very successful at them but I'm most proud of the following
        three:
      </p>

      <ul class="ml-6 list-disc">
        <li class="mb-2 leading-6">
          <a
            href="https://www.dmfa.si/Tekmovanja/MaSSB/ArhivDosezkov.aspx?leto=2021"
            target="_blank"
            rel="noopener noreferrer"
            class="link-green"
          >
            1<sup>st</sup> place on Mathematical competition for technical
            secondary schools DMFA (2021)
          </a>
        </li>
        <li class="mb-2 leading-6">
          <a
            href="https://rtk.ijs.si/2021/rezultati.html"
            target="_blank"
            rel="noopener noreferrer"
            class="link-green"
          >
            3<sup>rd</sup> place on Competition of computer science ACM (2021)
          </a>
        </li>
        <li class="mb-2 leading-6">
          <a
            href="https://www.dmfa.si/Tekmovanja/MaSSB/ArhivDosezkov.aspx?leto=2022"
            target="_blank"
            rel="noopener noreferrer"
            class="link-green"
          >
            1<sup>st</sup> place on Mathematical competition for technical
            secondary schools DMFA (2022)
          </a>
        </li>
      </ul>
      <div class="flex justify-center mt-4">
        <NuxtImg
          src="/trophy.svg"
          alt="Trophy icon"
          width="144"
          height="144"
          class="w-36"
          loading="lazy"
        />
      </div>
      <h3 class="mb-2 mt-2 text-lg font-semibold text-center">EuroSkills 2025</h3>
      <p>
        I competed and won at SloSkills 2024 in the ICT
        category. In September 2025 I competed at
        <a
          href="https://euroskills2025.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
        >
          EuroSkills Herning 2025</a> in the same category where I won a Medallion for Excellence and took 5<sup>th</sup> place.
      </p>
    </div>
  </ContentCard>
</template>
