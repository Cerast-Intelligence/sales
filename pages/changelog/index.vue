<template>
  <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 border-b border-rose-600">
    <div class="-z-10 absolute w-full h-full top-0 left-0 bg-cover bg-no-repeat bg-center bg-[url('/images/changelog.webp')]"></div>
    <div class="-z-10 absolute w-full h-full top-0 left-0 bg-cover bg-no-repeat bg-center bg-gray-900/70"></div>

    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
         aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#db2777] to-[#831843] opacity-20"
           style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
    </div>
    <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#db2777] to-[#831843] opacity-20"
           style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
    </div>
    <div class="mx-auto max-w-2xl text-center z-20">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Changelogs</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">Get our latest changes and news in a compact blog-like form. Stay updated on new detections and changes to out service.</p>
    </div>
  </div>

  <nav class="flex mx-auto max-w-7xl py-6 px-6" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <NuxtLink to="/" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </NuxtLink>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name">
        <div class="flex items-center">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
          <NuxtLink :to="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</NuxtLink>
        </div>
      </li>
    </ol>
  </nav>

  <div class="bg-gray-900 py-12 sm:py-16">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2">
      <article class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        <time :datetime="featuredPost.datetime" class="block text-sm leading-6 text-gray-500">{{
            featuredPost.date
          }}
        </time>
        <h2 id="featured-post" class="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
          {{ featuredPost.title }}</h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">{{ featuredPost.description }}</p>
        <div class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
          <div class="flex">
            <a :href="featuredPost.href" class="text-sm font-semibold leading-6 text-rose-600"
               aria-describedby="featured-post">Continue reading <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </article>
      <div
          class="mx-auto w-full max-w-2xl border-t border-gray-100/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
        <div class="-my-12 divide-y divide-gray-900/10">
          <article v-for="post in posts" :key="post.id" class="py-10">
            <div class="group relative max-w-xl">
              <time :datetime="post.datetime" class="block text-sm leading-6 text-gray-500">{{ post.date }}</time>
              <h2 class="mt-2 text-lg font-semibold text-gray-100 group-hover:text-gray-300">
                <NuxtLink :to="post.href">
                  <span class="absolute inset-0"/>
                  {{ post.title }}
                </NuxtLink>
              </h2>
              <p class="mt-4 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="relative isolate overflow-hidden bg-gray-900">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">You're already a customer?<br/>Use our tool
          to watch the stream.</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          You can use our tool to watch the stream of security issues. Just enter your API key and you're ready to go.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/monitor"
                    class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Watch stream
          </NuxtLink>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 1024 1024"
         class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
         aria-hidden="true">
      <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7"/>
      <defs>
        <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
          <stop stop-color="#db2777"/>
          <stop offset="1" stop-color="#831843"/>
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/20/solid'

const pages = [
  { name: 'Changelog', href: '/changelog', current: true }
]

useHead({
  title: 'Changelog | Cerast Intelligence',
  meta: [
    {
      name: 'description',
      content: 'Keep up with the latest updates to our products and services.',
    },
  ],
})

const featuredPost = {
  id: 1,
  title: 'Our launchday is here! 🚀',
  href: '/changelog/launchday',
  description: '\n' +
      'Check out our launch announcement for Cerast Intelligence! We\'re excited to welcome you to our new website and share a special discount. Join us on this journey and help shape our future with your valuable feedback.',
  date: 'May 11, 2024',
  datetime: '2024-05-11',
}

const posts = [
  {
    id: 1,
    title: 'Available detections for version 1.0.0',
    href: '/changelog/detections-1-0-0',
    description:
        'We\'ve added a total of 10 new detections to our service. These detections are available for all customers and can be used to monitor public security issues.',
    date: 'May 8, 2024',
    datetime: '2024-05-08',
  },
].reverse()
</script>
