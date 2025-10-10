<template>
  <ContentCard>
    <template v-slot:heading>
      <a name="skills" class="pt-32">Skills and Education</a>
    </template>
    <div>
      <p>
        I have finished the computer technician programme at
        <a
          href="https://www.vegova.si/"
          target="_blank"
          rel="noopener"
          class="link-green"
          >Vegova</a
        >.
      </p>

      <div class="flex justify-center my-6">
        <NuxtImg
          src="/coding.jpg"
          alt="Example code"
          width="208"
          height="126"
          class="w-56 rounded-md shadow-md"
          loading="lazy"
        />
      </div>

      <p>I enjoy programming very much. So far I have worked with:</p>
      <ul class="pl-6 leading-8 list-disc">
        <li>
          C++
          <NuxtImg
            src="/cpp.svg"
            alt="C++ logo"
            width="28"
            height="32"
            class="inline h-8"
            loading="lazy"
          />
        </li>
        <li>
          Python
          <NuxtImg
            src="/python.png"
            alt="Python logo"
            height="32"
            class="inline h-8"
            loading="lazy"
          />
        </li>
        <li>Solidity</li>
        <li>
          Web languages
          <span class="text-gray-700 dark:text-gray-300">(HTML, CSS, JS)</span>

          <NuxtImg
            src="/www.svg"
            alt="World wide web icon"
            width="32"
            height="32"
            class="inline h-8"
            loading="lazy"
          />
        </li>
        <li>
          JS frameworks/librarires
          <span class="text-gray-700 dark:text-gray-300">(Vue, React)</span>
        </li>
        <li>
          Embedded systems
          <span class="text-gray-700 dark:text-gray-300"
            >(Arduino, Raspberry Pi)</span
          >
          <NuxtImg
            src="/arduino.svg"
            alt="Arduino logo"
            width="28"
            height="28"
            class="inline h-7"
            loading="lazy"
          />
        </li>
        <li>PHP</li>
        <li>SQL</li>
      </ul>

      <br />

      <p>
        I'm also skilled at GNU/Linux system administration.

        <NuxtImg
          src="/arch.svg"
          alt="Arch linux logo"
          width="32"
          height="32"
          class="inline h-8"
          loading="lazy"
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
        >,
        <a
          href="https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
        >
          CCNA 2</a
        >
        and
        <a
          href="https://www.netacad.com/courses/networking/ccna-enterprise-networking-security-automation"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
        >
          CCNA 3</a
        >
        courses.
      </p>

      <!-- Cisco badges -->
      <div class="flex justify-around my-4 space-x-4">
        <div class="flex-1 text-xs text-gray-600 dark:text-gray-400 lg:text-sm">
          <div class="flex flex-col items-center">
            <a
              href="https://www.credly.com/badges/fc4f664e-6ee6-48f2-b3e5-7fd170b1ed57/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NuxtImg
                src="/ccna1.png"
                alt="CCNA 1 certification badge"
                class="w-28"
                loading="lazy"
              />
            </a>
            <div class="mt-1 px-1.5 text-left lg:text-center">
              CCNA 1: Introduction to Networks
            </div>
          </div>
        </div>

        <div class="flex-1 text-xs text-gray-600 dark:text-gray-400 lg:text-sm">
          <div class="flex flex-col items-center">
            <a
              href="https://www.credly.com/badges/9c14c662-8481-487c-a690-1e8f09a68e54/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NuxtImg
                src="/ccna2.png"
                alt="CCNA 2 certification badge"
                class="w-28"
                loading="lazy"
              />
            </a>
            <div class="mt-1 px-1.5 text-left lg:text-center">
              CCNA 2: Switching, Routing, and Wireless Essentials
            </div>
          </div>
        </div>

        <div class="flex-1 text-xs text-gray-600 dark:text-gray-400 lg:text-sm">
          <div class="flex flex-col items-center">
            <a
              href="https://www.credly.com/badges/03fac854-096c-43a7-8e6d-f1f5426b6cf8/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NuxtImg
                src="/ccna3.png"
                alt="CCNA 3 certification badge"
                class="w-28"
                loading="lazy"
              />
            </a>
            <div class="mt-1 px-1.5 text-left lg:text-center">
              CCNA 3: Enterprise Networking, Security, and Automation
            </div>
          </div>
        </div>
      </div>

      <p>
        I'm always interested in learning more stuff and broadening my
        knowledge.
      </p>

      <br />

      <p>
        I have been working as a full-stack (C++ and JS) developer at
        <a
          href="https://ebadms.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="link-green"
        >
          EBA d.o.o.</a
        >
        since July 2023.
      </p>
    </div>
  </ContentCard>
</template>
