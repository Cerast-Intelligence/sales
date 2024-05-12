<template>
  <div class="bg-gray-900 px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-4xl text-base leading-7 text-gray-300">
      <p class="text-base font-semibold leading-7 text-rose-600">Introducing</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">How to use</h1>
      <p class="mt-6 text-xl leading-8">This documentation provides detailed instructions on how to use the monitoring tool on our website. This guide is intended for users who need to monitor and filter data streams, ensuring they can effectively manage the information.</p>
      <div class="mt-10 max-w-2xl">
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-400">
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-rose-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-300">Access the Monitoring Page.</strong></span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-rose-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-300">Inserting Your Token.</strong> </span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-rose-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-300">Filtering the Results.</strong> </span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-rose-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-300">Troubleshooting.</strong> </span>
          </li>
        </ul>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-200">Access the Monitoring Page</h2>
        <p class="mt-6">To start using the monitoring functionalities, you must navigate to the Monitor page on our website.
          <ul role="list" class="mt-8 max-w-xl space-y-2 text-gray-400">
            <li class="flex gap-x-3">1. Open your preferred web browser.</li>
            <li class="flex gap-x-3">2. Enter the URL of our homepage.</li>
              <li class="flex gap-x-3">3. Navigate to the Monitor page either through the menu or by appending /monitor to the base URL.</li>
          </ul>  
        </p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-200">Inserting Your Token</h2>
        <p class="mt-6">To access the personalized data stream, a valid token must be inserted.
          <ul role="list" class="mt-8 max-w-xl space-y-2 text-gray-400">
            <li class="flex gap-x-3">1. On the Monitor page, locate the "Your API Key" field..</li>
            <li class="flex gap-x-3">2. Enter your personal access token. Ensure there are no extra spaces or characters to avoid errors.</li>
            <li class="flex gap-x-3">3. Submit the token by clicking the "Start" button.</li>
            <li class="flex gap-x-3">4. Wait for the system to validate your token. Once validated, the data stream will begin to populate.</li>
          </ul>  
        </p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-200">Filtering the Results</h2>
        <p class="mt-6">Once the data stream is active, you can apply filters to narrow down the results according to your needs. This feature is useful for focusing on specific data points within a larger stream.
          <ul role="list" class="mt-8 max-w-xl space-y-2 text-gray-400">
            <li class="flex gap-x-3">1. Find the "Filter Options" area on the Monitor page</li>
            <li class="flex gap-x-3">2. Select or enter the criteria for filtering the data.</li>
            <li class="flex gap-x-3">3. The filters get auto applied.</li>
            <li class="flex gap-x-3">4. The Stream will refresh, and the filtered results will be displayed.</li>
          </ul>  
        </p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-200">Troubleshooting</h2>
        <p class="mt-6">If you encounter issues while using the Monitor page, consider the following troubleshooting steps:
          <ul role="list" class="mt-8 max-w-xl space-y-2 text-gray-400">
            <li class="flex gap-x-3">Ensure your token is entered correctly without any typos</li>
            <li class="flex gap-x-3">Check your internet connection to ensure continuous data streaming</li>
            <li class="flex gap-x-3">Clear your browser cache if the page isn't loading or updating properly.</li>
          </ul>  
        </p>
      
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
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/20/solid'

useHead({
  title: 'Documentation | Cerast Intelligence',
  meta: [
    {
      name: 'description',
      content: 'Learn how to use Cerast Intelligence to monitor public security issues.',
    },
  ],
})
</script>
