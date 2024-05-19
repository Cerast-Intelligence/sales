<template>
  <div class="bg-gray-900">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Cerast Intelligence</span>
            <NuxtImg class="h-12 w-auto" src="/images/snek.webp" alt=""/>
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                  @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                    class="text-sm font-semibold leading-6 text-white">{{ item.name }}
          </NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink href="/monitor" class="text-sm font-semibold leading-6 text-white">Monitor <span
              aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"/>
        <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Cerast Intelligence</span>
              <NuxtImg class="h-8 w-auto" src="/images/logo.webp" alt=""/>
            </NuxtLink>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">{{
                    item.name
                  }}</a>
              </div>
              <div class="py-6">
                <NuxtLink to="/monitor"
                          class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                  Monitor
                </NuxtLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <slot></slot>

    <footer class="relative mt-32 sm:mt-40" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <NuxtImg lazy class="h-16" src="/images/snek.webp" alt="Cerast Intelligence"/>
            <p class="text-sm leading-6 text-gray-300">
              Cerast Intelligence is a monitoring tool that helps you to keep track of public security issues.
            </p>
            <p class="text-sm text-gray-600">
              Support at contact[at]cerast-intelligence[dot]com
            </p>
            <div class="flex space-x-6">
              <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href"
                 class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true"/>
              </a>
            </div>
          </div>
          <div class="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-300">Developer</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in footerNavigation.developer" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-400 hover:text-gray-300">{{ item.name }}</a>
                </li>
              </ul>
            </div>

            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-300">Billing</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in footerNavigation.billing" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-400 hover:text-gray-300">{{ item.name }}</a>
                </li>
              </ul>
            </div>

            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-300">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in footerNavigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-400 hover:text-gray-300">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p class="text-xs leading-5 text-gray-400">&copy; 2024 Cerast Intelligence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline/index.js";
import {Dialog, DialogPanel} from "@headlessui/vue";
import {defineComponent, h, ref} from "vue";

const router = useRouter()
router.afterEach(() => {
  mobileMenuOpen.value = false
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

const mobileMenuOpen = ref(false)

const navigation = [
  {name: 'Pricing', href: '/#subscribe'},
  {name: 'FAQ', href: '/#faq'},
  {name: 'Documentation', href: '/documentation'},
  {name: 'Changelogs', href: '/changelog'},
]

const footerNavigation = {
  legal: [
    {name: 'Imprint', href: '/imprint'},
    {name: 'Privacy', href: '/privacy-policy'},
    {name: 'Terms', href: '/terms-of-service'},
  ],
  developer: [
    {name: 'Documentation', href: '/documentation'},
    {name: 'Changelog', href: '/changelog'},
  ],
  billing: [
    {name: 'Refund Policy', href: '/refund'},
    {name: 'Manage subscription', href: 'https://cerastintel.onfastspring.com/account'},
    {name: 'Cancel subscription', href: 'https://cerastintel.onfastspring.com/account'},
  ],
  social: [
    {
      name: 'X',
      href: 'https://twitter.com/CerastIntel',
      icon: defineComponent({
        render: () =>
            h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
              h('path', {
                d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
              }),
            ]),
      }),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Cerast-Intelligence',
      icon: defineComponent({
        render: () =>
            h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    }
  ],
}
</script>
