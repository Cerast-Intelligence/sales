<template>
  <div class="bg-gray-900 px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-4xl text-base leading-7 text-white">
      <p class="text-base font-semibold leading-7 text-rose-600">Cerast Intelligence</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Imprint</h1>
      <div class="mt-10 max-w-2xl">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Company Information</h2>
        <p><strong>Name:</strong> Cerast Intelligence Einzelunternehmen</p>
        <p><strong>Represented by:</strong> Daniel Riebel</p>
        <p><strong>Address:</strong> Dr. Dietz Straße 23, 36043 Fulda, Germany</p>
        <p><strong>Steuernummer:</strong> 018 860 63236</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Contact Information</h2>
        <p>Email: contact@cerast-intelligence.com</p>
        <p>Phone: +49 (160) 8747137</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Legal Information</h2>
        <p>Responsible for content according to § 55 Abs. 2 RStV: Daniel Riebel</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Privacy Policy</h2>
        <p>Last updated: 18.04.2024</p>
        <p>Our Privacy Policy outlines the types of personal information we collect and how we use, maintain, and disclose that information. For detailed information, please refer to the privacy policy section of our website.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">More Information</h2>
        <p>For additional inquiries or if you require further information about our services, please contact us using the information provided above.</p>
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
