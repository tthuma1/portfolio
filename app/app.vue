<template>
  <div :class="[isDark ? 'dark' : '']" class="font-display">
    <div class="text-gray-900 bg-gray-200 dark:bg-neutral-800 dark:text-gray-50">
      <TheHeader @toggleDark="toggleTheme" />
      <SectionLanding></SectionLanding>

      <main class="relative flex justify-center px-5 bg-pattern md:px-24 lg:-mt-28 xl:-mt-44 xl:px-32">
        <section class="max-w-md min-w-0 md:max-w-full md:flex md:justify-evenly md:space-x-16 xl:space-x-24">
          <!-- Desktop layout of main content -->
          <div v-if="innerWidth >= 768" class="flex-1">
            <CardAbout class="relative z-30"></CardAbout>
            <CardAchievements  class="lg:mt-72"></CardAchievements >
            <CardProjects></CardProjects>
          </div>
          <div v-if="innerWidth >= 768" class="flex-1">
            <CardSkills class="lg:mt-40 xl:mt-56"></CardSkills>
            <CardHobbies class="lg:mt-72"></CardHobbies>
          </div>

          <!-- Mobile layout of main content -->
          <div v-else>
            <CardAbout></CardAbout>
            <CardSkills></CardSkills>
            <CardAchievements ></CardAchievements >
            <CardProjects></CardProjects>
            <CardHobbies></CardHobbies>
          </div>
        </section>
      </main>

      <SectionContact></SectionContact>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isDark = ref(false)
const innerWidth = ref(1000) // initialize to 1000px to prevent layout shift on desktop load

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.theme = isDark.value ? 'dark' : 'light' // store preference for reload
}

function resizeWindow() {
  innerWidth.value = window.innerWidth
}

onMounted(() => {
  innerWidth.value = window.innerWidth

  if (localStorage.theme === 'dark') isDark.value = true
  window.addEventListener('resize', resizeWindow)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeWindow)
})
</script>

<style>
/*** Inter font faces from https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap ***/
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwoT9mI1F55MKw.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwQT9mI1F54.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvsYwYZ8UA3J58.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcviYwYZ8UA3.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>