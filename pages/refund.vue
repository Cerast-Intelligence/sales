<template>
  <div class="bg-gray-900 px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-white">
      <p class="text-base font-semibold leading-7 text-rose-600">Cerast Intelligence</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Refund Policy</h1>
      <div class="mt-10 max-w-2xl">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">No Refund Policy</h2>
        <p>Due to the nature of our DataStream Subscription service, we do not offer refunds once the purchase is made. As our service provides immediate access to data and information, the value of our product is delivered instantly at the time of purchase. This means there is no way to "return" the information once accessed or used.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Understanding Our Policy</h2>
        <p>By subscribing to and using our service, you acknowledge and agree that all payments are final and non-refundable. This policy is due to the immediate consumption of the information, which cannot be undone.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Questions and Contact Information</h2>
        <p>If you have any questions or concerns about our Refund Policy, please contact us at contact@cerast-intelligence.com for further clarification.</p>
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
</script>
