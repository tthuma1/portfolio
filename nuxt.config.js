export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Tim Thuma's website",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Tim Thuma's personal website. Student and software developer from Slovenia.",
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Tim Thuma's website" },
      {
        property: 'og:description',
        content:
          "Tim Thuma's personal website. Student and software developer from Slovenia.",
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://timthuma.com/' },
      { property: 'og:image', content: 'https://timthuma.com/icon_trans.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1080' },
      { property: 'og:image:height', content: '1080' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'manifest', href: 'manifest.json' },
      { rel: 'apple-touch-icon', href: 'static/icons/apple-icon-180.png' },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2048-2732.jpg',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2732-2048.jpg',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1668-2388.jpg',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2388-1668.jpg',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1536-2048.jpg',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2048-1536.jpg',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1668-2224.jpg',
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2224-1668.jpg',
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1620-2160.jpg',
        media:
          '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2160-1620.jpg',
        media:
          '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1284-2778.jpg',
        media:
          '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2778-1284.jpg',
        media:
          '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1170-2532.jpg',
        media:
          '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2532-1170.jpg',
        media:
          '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1125-2436.jpg',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2436-1125.jpg',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1242-2688.jpg',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2688-1242.jpg',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-828-1792.jpg',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1792-828.jpg',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1242-2208.jpg',
        media:
          '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-2208-1242.jpg',
        media:
          '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-750-1334.jpg',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1334-750.jpg',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-640-1136.jpg',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        rel: 'apple-touch-startup-image',
        href: 'static/icons/apple-splash-1136-640.jpg',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    // 'nuxt-lazy-load',
    // '@ax2/lozad-module',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0',
  },

  pwa: {
    manifest: {
      name: "Tim Thuma's website",
      short_name: 'Tim Thuma',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#000',
      description:
        "Tim Thuma's personal website. Student and software developer from Slovenia.",
      icons: [
        {
          src: '/icons/manifest-icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: '/icons/manifest-icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any',
        },
      ],
    },
  },
}
