<template>
  <content-card>
    <template v-slot:heading>
      <a name="achievements" class="pt-32"></a>Achievements</template
    >
    <div>
      <p>
        I have participated in various competitions, mostly from math and
        science. I am often very successful at them but I'm most proud of the
        following two:
      </p>

      <ul class="list-disc ml-6">
        <li class="leading-6 mb-2">
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
        <li class="leading-6">
          <a
            href="https://rtk.ijs.si/2021/rezultati.html"
            target="_blank"
            rel="noopener noreferrer"
            class="link-green"
          >
            3<sup>rd</sup> place on Competition of computer science ACM (2021)
          </a>
        </li>
      </ul>
      <div class="flex justify-center mt-4">
        <img
          data-src="/trophy.svg"
          alt="Trophy icon"
          width="144"
          height="144"
          class="w-36 lozad"
        />
      </div>
    </div>
  </content-card>
</template>
