<template>
  <ContentCard>
    <template v-slot:heading>
      <a name="hobbies" class="pt-32">Hobbies</a></template
    >
    <div>
      <p>
        My biggest hobby is programming, and I spend most of my free time on it.
        But besides that, I also like learning math and science.
        <br />
        <br />
        I like challenges that require thinking, which is why I enjoy solving
        algorithmic problems.
      </p>
      <div class="flex justify-center my-6">
        <NuxtImg
          src="/big-o.jpg"
          alt="Big O notation graph"
          height="360"
          class="w-full rounded-md shadow-md"
          loading="lazy"
        />
      </div>
      <p>
        My most common form of procrastination is watching
        <a
            href="https://youtu.be/T38JRqe5tYQ"
            target="_blank"
            rel="noopener noreferrer"
            class="link-green"
          >
            random videos on YouTube</a>.
      </p>
    </div>
  </ContentCard>
</template>
