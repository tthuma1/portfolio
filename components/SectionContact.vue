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
              src="/social/instagram.svg"
              alt="Instagram logo"
              class="w-12 h-12"
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
            <svg
              class="w-12 h-12"
              viewBox="0 0 36 36"
              fill="url(#jsc_s_f)"
              height="40"
              width="40"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  x2="50%"
                  y1="97.0782153%"
                  y2="0%"
                  id="jsc_s_f"
                >
                  <stop offset="0%" stop-color="#0062E0"></stop>
                  <stop offset="100%" stop-color="#19AFFF"></stop>
                </linearGradient>
              </defs>
              <path
                d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
              ></path>
              <path
                class="text-white fill-current"
                d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
              ></path>
            </svg>
          </a>

          <a
            href="https://github.com/tthuma1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">My Github profile</span>
            <img
              src="/social/github.svg"
              alt="Github logo"
              width="48"
              height="48"
              class="w-12 h-12"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/tim-thuma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">My LinkedIn profile</span>
            <img
              src="/social/linkedin.svg"
              alt="Linkedin logo"
              width="48"
              height="48"
              class="w-12 h-12"
            />
          </a>
        </div>
      </content-card>
    </div>
  </section>
</template>
