<script setup>
import {CheckCircleIcon} from "@heroicons/vue/20/solid";
import { HomeIcon } from '@heroicons/vue/20/solid'


const pages = [
  { name: 'Changelog', href: '/changelog', current: false },
  { name: 'Detections 1.0.0', href: '#', current: true },
]
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
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Detections 1.0.0</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">We are happy to publish our first set of Detections.</p>
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

  <div class="container mx-auto px-4 py-12 text-white">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold text-rose-600">New Detection Capabilities in Our Monitoring Tools</h1>
            <p class="mt-4 text-lg">We're excited to announce a significant upgrade to our suite of monitoring tools designed to enhance the security and integrity of your digital assets. Our latest rollout includes new checks that encompass a wide range of file types and configurations, aimed at identifying potential vulnerabilities before they can be exploited.</p>
            
            <h2 class="mt-8 text-2xl text-white font-bold">Enhanced Configuration File Checks</h2>
            <p>Configuration files are often targeted by attackers due to their sensitive content and critical role in system operations. Our new set of checks includes:</p>
            <ul class="list-disc pl-5 mt-2">
                <li><strong>YAML and YML Files:</strong> Monitoring `/config.yml` and `/config.yaml` files, ensuring they do not exceed 500 KB to prevent bloating and potential manipulation.</li>
                <li><strong>PHP Configuration Files:</strong> The `/config.php` files, often containing sensitive PHP settings, are now checked for specific content markers , capping at 500 KB.</li>
                <li><strong>Web and Database Configuration:</strong> High-impact checks for `/web.config` and SQL dump files like `/dump.sql`, `/backup.sql`, and `/database.sql` to monitor SQL commands and database directives within a 5 MB size limit.</li>
                <li><strong>WordPress Configuration:</strong> Reinforced monitoring of WordPress configuration and setup files, including `wp-config.php` and `wp-admin/setup-config.php`.</li>
            </ul>

            <h2 class="mt-8 text-2xl text-white font-bold">Database Integrity and Security</h2>
            <p>Maintaining the integrity of database backups and configurations is crucial for data security. Our enhanced checks include:</p>
            <ul class="list-disc pl-5 mt-2">
                <li><strong>SQL Content Monitoring:</strong> Scrutinizing SQL dump files for potential exposures of structure and data insertion commands.</li>
            </ul>

            <h2 class="mt-8 text-2xl text-white font-bold">Source Code and Version Control</h2>
            <p>Source code and version control systems can be avenues for information leaks if not properly secured. To address this, we've added:</p>
            <ul class="list-disc pl-5 mt-2">
                <li><strong>Archive Files and Version Control Systems:</strong> Checks on archive files such as `/backup.zip` and `/backup.tar.gz`, along with Git HEAD files in `/.git/HEAD`.</li>
            </ul>

            <h2 class="mt-8 text-2xl text-white font-bold">Sensitive Credential Protections</h2>
            <p>Credentials stored in system files are a prime target for cyber threats. Our system now includes checks for:</p>
            <ul class="list-disc pl-5 mt-2">
                <li><strong>SSH Private Keys:</strong> Files such as `/.ssh/id_ed25519`, `/.ssh/id_ecdsa`, and `/.ssh/id_rsa` are monitored closely to ensure they contain private keys and do not exceed 50 KB.</li>
            </ul>

            <p class="mt-8">This rollout reflects our commitment to providing robust, comprehensive monitoring solutions that safeguard your digital infrastructure against evolving security threats. By continuously expanding our detection capabilities, we ensure that our tools remain effective in the dynamic landscape of cybersecurity threats.</p>
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
