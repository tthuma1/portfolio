<template>
  <div>
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
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const { toggleTheme } = useTheme()
const innerWidth = ref(1000) // initialize to 1000px to prevent layout shift on desktop load

function resizeWindow() {
  innerWidth.value = window.innerWidth
}

onMounted(() => {
  innerWidth.value = window.innerWidth

  window.addEventListener('resize', resizeWindow)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeWindow)
})
</script>
