<template>
  <section
    class="
      flex flex-col
      items-center
      px-5
      mt-6
      bg-lines bg-pattern-lines
      md:pb-8
      xl:px-24
    "
  >
    <div
      class="
        bg-gray-100
        rounded-md
        text-center
        py-6
        px-6
        shadow-md
        w-full
        max-w-md
        sm:max-w-xl
        md:w-9/12 md:mx-auto md:max-w-3xl
        dark:bg-truegray-900
      "
    >
      <div class="w-full border-b pb-1">
        <h2 class="text-3xl text-blue-600 font-bold dark:text-blue-400">
          <a name="contact" class="pt-28">Contact Me</a>
        </h2>
      </div>
    </div>
    <!-- </div> -->

    <div
      class="md:flex justify-evenly items-center md:space-x-12 xl:space-x-24"
    >
      <content-card>
        <template v-slot:heading
          ><span class="text-green-600 dark:text-green-400"
            >Send me a message</span
          >
        </template>
        <div class="w-full">
          <textarea
            rows="5"
            placeholder="Write something here..."
            class="
              w-full
              p-4
              rounded-lg
              bg-gray-200
              block
              shadow-sm
              dark:bg-truegray-800
            "
            v-model="message"
          />

          <button type="button" class="mt-8 mb-4">
            <a :href="mail" class="btn-primary">Send It</a>
          </button>
        </div>
      </content-card>

      <content-card>
        <template v-slot:heading
          ><span class="text-green-600 dark:text-green-400"
            >Find me on social media</span
          >
        </template>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
          <a
            href="https://www.instagram.com/timthuma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">My Instagram profile</span>
            <img
              data-src="/social/instagram.svg"
              alt="Instagram logo"
              class="w-12 h-12 lozad"
              width="48"
              height="48"
            />
          </a>

          <a
            href="https://www.facebook.com/tim.thuma.75/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">My Facebook profile</span>
            <img
              data-src="/social/facebook.svg"
              alt="Facebook logo"
              class="w-12 h-12 lozad"
              width="48"
              height="48"
            />
          </a>

          <a
            href="https://github.com/tthuma1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">My Github profile</span>
            <img
              data-src="/social/github.svg"
              alt="Github logo"
              width="48"
              height="48"
              class="w-12 h-12 lozad"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/tim-thuma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">My LinkedIn profile</span>
            <img
              data-src="/social/linkedin.svg"
              alt="Linkedin logo"
              width="48"
              height="48"
              class="w-12 h-12 lozad"
            />
          </a>
        </div>
      </content-card>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  computed: {
    mail() {
      return `mailto:thumatim@gmail.com?subject=Hello there!&body=${this.message}`
    },
  },
}
</script>
