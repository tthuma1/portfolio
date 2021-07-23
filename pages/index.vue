<template>
  <div :class="[isDark ? 'dark' : '']">
    <div
      class="text-gray-900 bg-gray-200 dark:bg-truegray-800 dark:text-gray-50"
    >
      <the-header @toggleDark="toggleTheme" />
      <section-landing></section-landing>

      <main
        class="
          flex
          justify-center
          px-5
          relative
          bg-pattern
          md:px-24
          lg:-mt-28
          xl:-mt-44 xl:px-32
        "
      >
        <section
          class="
            max-w-md
            min-w-0
            md:max-w-full md:flex md:justify-evenly md:space-x-16
            xl:space-x-24
          "
        >
          <!-- Desktop layout of main content -->
          <div v-if="innerWidth >= 768" class="flex-1">
            <card-about class="relative z-30"></card-about>
            <card-achievements class="lg:mt-72"></card-achievements>
            <card-projects></card-projects>
          </div>
          <div v-if="innerWidth >= 768" class="flex-1">
            <card-skills class="lg:mt-40 xl:mt-56"></card-skills>
            <card-hobbies class="lg:mt-72"></card-hobbies>
          </div>

          <!-- Mobile layout of main content -->
          <div v-else>
            <card-about></card-about>
            <card-skills></card-skills>
            <card-achievements></card-achievements>
            <card-projects></card-projects>
            <card-hobbies></card-hobbies>
          </div>
        </section>
      </main>

      <section-contact></section-contact>
    </div>
  </div>
</template>

<script>
import lozad from 'lozad'

export default {
  data() {
    return {
      isDark: false,
      innerWidth: window.innerWidth,
    }
  },
  created() {
    // default to light theme, check if dark is in localStorage
    if (localStorage.theme === 'dark') {
      this.isDark = true
    }

    window.addEventListener('resize', this.resizeWindow)
  },
  mounted() {
    // lazy loads elements with default selector as '.lozad'
    // applies lazy loading globally
    const observer = lozad('.lozad', {
      rootMargin: '50% 0px', // start loading when element is 50vh outside viewport
    })
    observer.observe()
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeWindow)
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark // toggle isDark variable
      localStorage.theme = this.isDark ? 'dark' : 'light' // change localStorage to preserve preference on reload
    },
    resizeWindow() {
      this.innerWidth = window.innerWidth
    },
  },
}
</script>
