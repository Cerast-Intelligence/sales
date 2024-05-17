<script setup>
import {CheckCircleIcon} from "@heroicons/vue/20/solid";
import { HomeIcon } from '@heroicons/vue/20/solid'


const pages = [
  { name: 'Changelog', href: '/changelog', current: false },
  { name: 'Launchday', href: '#', current: true },
]

useHead({
  title: 'Launchday | Cerast Intelligence',
  meta: [
    {
      name: 'description',
      content: 'Check out our launch announcement for Cerast Intelligence! We\'re excited to welcome you to our new website and share a special discount.',
    },
  ],
})
</script>

<template>
  <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 border-b border-rose-600">
    <div class="-z-10 absolute w-full h-full top-0 left-0 bg-cover bg-no-repeat bg-center bg-[url('/images/changelog.webp')]"></div>
    <div class="-z-10 absolute w-full h-full top-0 left-0 bg-cover bg-no-repeat bg-center bg-gray-900/70"></div>

    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#db2777] to-[#831843] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#db2777] to-[#831843] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Launchday</h2>
      
    </div>
  </div>

  <nav class="mx-auto max-w-7xl py-6 px-6" aria-label="Breadcrumb">
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

  <div class="container mx-auto px-4 py-12 text-white">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold text-rose-600">Emerging from Stealth: Our Journey Begins</h1>
            <p class="mt-4 text-lg">After a period of dedicated development and strategic planning, we are excited to announce that our team is beginning to transition out of stealth mode. This marks a new chapter in our journey, where we not only unveil our innovative solutions but also start to engage actively with potential customers and the wider community.</p>

            <div class="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                <h2 class="text-xl text-white font-bold">Why We Are Here</h2>
                <p class="mt-2">Our mission is to deliver cutting-edge technological solutions that address key pain points in our industry. By stepping out of the shadows, we are inviting early adopters to be part of a transformative experience, helping us refine our offerings through their valuable feedback.</p>
            </div>

            <div class="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                <h2 class="text-xl text-white font-bold">Seeking First Customers and Feedback</h2>
                <p class="mt-2">As we introduce our product to the market, our initial focus is to build strong relationships with our first users. Your insights and experiences are crucial to our iterative process, enabling us to tailor our development to meet real-world needs and expectations.</p>
            </div>

            <div class="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                <h2 class="text-xl text-white font-bold">Join Us on Our Journey</h2>
                <p class="mt-2">We are looking forward to engaging with businesses, tech enthusiasts, and thought leaders who are eager to explore new technologies and innovations. Join us to be at the forefront of this exciting phase, as we promise transparency, commitment, and a drive towards excellence.</p>
            </div>

            <p class="mt-8">Your feedback is more than just valuable; it is essential to our growth and refinement. We encourage you to reach out, interact with our products, and let us know how we can better serve your needs. Together, let's shape the future of technology.</p>

            <div class="mt-10 flex justify-center">
                <a href="mailto:contact@cerast-intelligence.com" class="bg-rose-600 text-white font-bold py-2 px-4 rounded hover:bg-rose-700">Contact Us</a>
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

<style scoped>

</style>
