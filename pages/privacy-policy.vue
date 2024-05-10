<template>
  <div class="bg-gray-900 px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-4xl text-base leading-7 text-white">
      <p class="text-base font-semibold leading-7 text-rose-600">Cerast Intelligence</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Privacy Policy</h1>
      <div class="mt-10 max-w-2xl">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Introduction</h2>
        <p>Last updated: 18.04.2024</p>
        <p>At DataStream Service, we are committed to maintaining the trust and confidence of our visitors to our web site. In this Privacy Policy, we’ve provided detailed information on when and why we collect your personal information, how we use it, and how we keep it secure.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Collection of Personal Information</h2>
        <ul role="list" class="mt-8 max-w-xl space-y-8">
          <li class="flex gap-x-3">
            <span class="flex-none text-white">IP Addresses and Device Fingerprints:</span>
            <span>We collect information like your IP address and device fingerprint to analyze usage patterns and to enhance the security and functionality of our service.</span>
          </li>
          <li class="flex gap-x-3">
            <span class="flex-none text-white">Usage Data:</span>
            <span>When you connect to our stream, we log the connection details including the data you accessed. This helps us to improve our service and ensure compliance with our terms of service.</span>
          </li>
        </ul>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Payment Information</h2>
        <p>All payment processing for DataStream Service is handled by our third-party service provider, FastSpring. At no point does DataStream Service collect or store your payment card details. The collection, use, and storage of your payment information are solely governed by the privacy policy of FastSpring.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Use of Your Information</h2>
        <p>We use the information we collect about you in the following ways:</p>
        <ul role="list" class="mt-8 max-w-xl space-y-8">
          <li>To provide our services to you and ensure their optimal functionality.</li>
          <li>To improve and customize our services based on user feedback and usage patterns.</li>
          <li>To ensure the security of our service.</li>
        </ul>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Third-Party Services</h2>
        <p>We may share your information with trusted third parties for the purpose of enhancing our services. These third parties comply with similar and equally stringent undertakings of privacy and confidentiality.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Your Rights</h2>
        <p>You have the right to request access to the personal information that we hold about you. If you believe that any information we are holding on you is incorrect or incomplete, please contact us as soon as possible.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Changes to This Privacy Policy</h2>
        <p>We may change this Privacy Policy from time to time in order to reflect changes in the law or our privacy practices. We encourage you to review this Privacy Policy regularly for the latest information on our privacy practices.</p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-white">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our treatment of your personal information, please write to us by email to contact@cerast-intelligence.com .</p>
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
