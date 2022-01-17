<template>
  <content-card>
    <template v-slot:heading>
      <a name="skills" class="pt-32">Skills and Education</a>
    </template>
    <div>
      <p>
        I have finished 2 out of 4 years of computer technician programme at
        <a
          href="https://www.vegova.si/"
          target="_blank"
          rel="noopener"
          class="link-green"
          >Vegova</a
        >.
      </p>

      <div class="flex justify-center my-6">
        <img
          data-src="/coding.jpg"
          alt="Example code"
          width="208"
          height="126"
          class="w-56 rounded-md shadow-md lozad"
        />
      </div>

      <p>I enjoy programming very much. So far I have worked with:</p>
      <ul class="list-disc pl-6 leading-8">
        <li>
          C++
          <img
            data-src="/cpp.svg"
            alt="C++ logo"
            width="32"
            height="32"
            class="inline h-8 lozad"
          />
        </li>
        <li>
          Python
          <img
            data-src="/python.png"
            alt="Python logo"
            width="32"
            height="32"
            class="inline h-8 lozad"
          />
        </li>
        <li>Solidity</li>
        <li>
          Web languages
          <span class="text-gray-700 dark:text-gray-300">(HTML, CSS, JS)</span>

          <img
            data-src="/www.svg"
            alt="World wide web icon"
            width="32"
            height="32"
            class="inline h-8 lozad"
          />
        </li>
        <li>
          JS frameworks/librarires
          <span class="text-gray-700 dark:text-gray-300">(Vue, React)</span>
        </li>
        <li>
          Embedded systems (Arduino, Raspberry Pi)
          <img
            data-src="/arduino.svg"
            alt="Arduino logo"
            width="28"
            height="28"
            class="inline h-7 lozad"
          />
        </li>
        <li>PHP</li>
        <li>SQL</li>
      </ul>

      <br />

      <p>
        I'm also skilled at GNU/Linux system administration.

        <img
          data-src="/arch.svg"
          alt="Arch linux logo"
          width="32"
          height="32"
          class="inline h-8 lozad"
        />
      </p>

      <br />
      <p>
        I have finished Cisco's
        <a
          href="https://www.netacad.com/courses/networking/ccna-introduction-networks"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
          >CCNA 1</a
        >
        and
        <a
          href="https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
        >
          CCNA 2</a
        >
        courses.
      </p>

      <!-- Cisco badges -->
      <div class="my-4 flex justify-around space-x-4">
        <div class="flex-1 text-gray-600 text-xs dark:text-gray-400 lg:text-sm">
          <div class="flex flex-col items-center">
            <a
              href="http://https://www.credly.com/badges/fc4f664e-6ee6-48f2-b3e5-7fd170b1ed57/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                data-src="/ccna1.png"
                alt="CCNA 1 certification badge"
                width="112"
                height="112"
                class="w-28 lozad"
              />
            </a>
            <div class="mt-1 px-3 text-left lg:text-center">
              CCNA: Introduction to Networks
            </div>
          </div>
        </div>
        <div class="flex-1 text-gray-600 text-xs dark:text-gray-400 lg:text-sm">
          <div class="flex flex-col items-center">
            <a
              href="https://www.credly.com/badges/9c14c662-8481-487c-a690-1e8f09a68e54/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                data-src="/ccna2.png"
                alt="CCNA 2 certification badge"
                width="112"
                height="112"
                class="w-28 lozad"
              />
            </a>
            <div class="mt-1 px-3 text-left lg:text-center">
              CCNA: Switching, Routing, and Wireless Essentials
            </div>
          </div>
        </div>
      </div>

      <p>
        I'm always interested in learning more stuff and broadening my
        knowledge.
      </p>
    </div>
  </content-card>
</template>
