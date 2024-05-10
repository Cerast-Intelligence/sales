<template>
  <div class="bg-gray-900 px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-4xl text-base leading-7 text-white">
      <p class="text-base font-semibold leading-7 text-rose-600">Cerast Intelligence</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Terms of Service for DataStream Subscription</h1>
      <div class="mt-10 max-w-2xl">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">1. Acceptance of Terms</h2>
        <p>By subscribing to and using the DataStream service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">2. Service Description</h2>
        <p>The Service provides a subscription-based access to a data stream that you may use for research and analysis purposes. The Service does not guarantee uptime or the volume of data transmitted.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">3. Use of Data</h2>
        <ul role="list" class="mt-8 max-w-xl space-y-8">
          <li class="flex gap-x-3">
            <span class="flex-none text-white">a.</span>
            <span>You may use the data provided through the Service for conducting research and for creating derivative works based on such research.</span>
          </li>
          <li class="flex gap-x-3">
            <span class="flex-none text-white">b.</span>
            <span>You are expressly prohibited from publishing, reselling, or distributing the data received through the Service in any form.</span>
          </li>
          <li class="flex gap-x-3">
            <span class="flex-none text-white">c.</span>
            <span>The data may not be used for any illegal activities or to support any illegal activities.</span>
          </li>
        </ul>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">4. User Responsibilities</h2>
        <p>You must keep your access credentials confidential and not share them with any third party. You are responsible for all activities that occur under your account and agree to immediately notify the Service provider of any unauthorized use of your account or any other breach of security.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">5. Prohibited Conduct</h2>
        <p>Engaging in illegal activities or supporting illegal activities through the use of the data is strictly prohibited. Publishing, selling, or distributing the data outside the scope permitted by these Terms is also forbidden.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">6. Termination</h2>
        <p>Any violation of these Terms will result in immediate termination of your subscription without any refund for the last billing period. The Service provider may terminate your access to the Service at any time, with or without cause, with or without notice, effective immediately.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">7. Disclaimer of Warranties</h2>
        <p>The Service is provided on an "as is" and "as available" basis. The Service provider expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">8. Limitation of Liability</h2>
        <p>In no event shall the Service provider be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, resulting from the use or the inability to use the Service.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">9. Indemnification</h2>
        <p>You agree to indemnify and hold harmless the Service provider from any claims, damages, or expenses arising from your use of the Service.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">10. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Continued use of the Service after such changes will constitute your consent to such changes.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">11. Contact Information</h2>
        <p>Questions about the Terms of Service should be sent to us at contact@cerast-intelligence.com .</p>
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
