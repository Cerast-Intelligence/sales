<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Monitor the data stream.</h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">
            Enter your API key and start monitoring the data stream.

          </p>
          <div class="mt-6 flex max-w-md gap-x-4">
            <label for="api_key" class="sr-only">API Key</label>
            <input v-model="apiKey" id="api_key" name="api_key" type="text" required=""
                   class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                   placeholder="Your API Key"/>
            <button v-if="!isConnected" @click="start"
                    class="flex-none rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
              Start
            </button>
            <button v-else @click="stop"
                    class="flex-none rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
              Stop
            </button>
          </div>
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon class="h-6 w-6 text-white" aria-hidden="true"/>
            </div>
            <dt class="mt-4 font-semibold text-white">Live Data</dt>
            <dd class="mt-2 leading-7 text-gray-400">
              The data stream is live and updates instantly. No need to refresh the page.
            </dd>
          </div>
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon class="h-6 w-6 text-white" aria-hidden="true"/>
            </div>
            <dt class="mt-4 font-semibold text-white">Keep it legal</dt>
            <dd class="mt-2 leading-7 text-gray-400">
              Keep in mind our
              <NuxtLink to="/terms-of-service" class="text-rose-500">terms of service</NuxtLink>
              and the legal requirements.
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#db2777] to-[#831843] opacity-30"
           style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
    </div>
  </div>

  <div v-if="isConnected || timeline.length" class="bg-gray-900">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-white">Filters</h2>
                  <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500" @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4">
                  <Disclosure as="div" v-for="section in filters" :key="section.name" class="border-t border-gray-200 pb-4 pt-4" v-slot="{ open }">
                    <fieldset>
                      <legend class="w-full px-2">
                        <DisclosureButton class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                          <span class="text-sm font-medium text-white">{{ section.name }}</span>
                          <span class="ml-6 flex h-7 items-center">
                            <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']" aria-hidden="true" />
                          </span>
                        </DisclosureButton>
                      </legend>
                      <DisclosurePanel class="px-4 pb-2 pt-4">
                        <div class="space-y-6">
                          <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                            <input :id="`${section.id}-${optionIdx}-mobile`" :name="`${section.id}[]`" :value="option.value" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label :for="`${section.id}-${optionIdx}-mobile`" class="ml-3 text-sm text-gray-500">{{ option.label }}</label>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </fieldset>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="border-b border-gray-200 pb-10">
          <h1 class="text-4xl font-bold tracking-tight text-white">Data Stream</h1>
          <p class="mt-4 text-base text-gray-300">
            Monitor the data stream and see what is happening in real time.
          </p>
        </div>

        <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 class="sr-only">Filters</h2>

            <button type="button" class="inline-flex items-center lg:hidden" @click="mobileFiltersOpen = true">
              <span class="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            </button>

            <div class="hidden lg:block">
              <form class="space-y-10 divide-y divide-gray-200">
                <div v-for="(section, sectionIdx) in filters" :key="section.name" :class="sectionIdx === 0 ? null : 'pt-10'">
                  <fieldset>
                    <legend class="block text-sm font-medium text-white">{{ section.name }}</legend>
                    <div class="space-y-3 pt-6">
                      <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                        <input :id="`${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label :for="`${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-400">{{ option.label }}</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <!-- Product grid -->
          <div class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <div class="flow-root">
              <ul role="list" class="-mb-8">
                <li v-for="(event, eventIdx) in timeline" :key="event.id">
                  <div class="relative pb-8">
            <span v-if="eventIdx !== timeline.length - 1" class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-rose-600"
                  aria-hidden="true"/>
                    <div class="relative flex space-x-3">
                      <div>
              <span
                  :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-rose-600']">
                <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true"/>
              </span>
                      </div>
                      <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p class="text-sm text-white">
                            {{ event.domain }} {{ event.path }} {{ event.category }}
                          </p>
                        </div>
                        <div class="whitespace-nowrap text-right text-sm text-gray-500 flex items-center">
                          <time :datetime="event.datetime">{{ event.time }}</time>
                          <a v-if="event.domain && event.path" target="_blank" :href="`https://${event.domain}${event.path}`" class="text-rose-700 w-6 ml-2"><ArrowTopRightOnSquareIcon /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <div v-if="!isConnected" class="relative isolate overflow-hidden bg-gray-900">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">You're not yet a customer?<br/>No Problem!</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Just look at our subscription plan and start monitoring the data stream directly after your payment.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/#subscribe"
                    class="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            See pricing
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>



</template>

<script setup>
import {CalendarDaysIcon, HandRaisedIcon, DocumentIcon, FingerPrintIcon, ServerIcon, CogIcon, WrenchIcon, CalendarIcon, ArrowTopRightOnSquareIcon} from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/vue/20/solid'

useHead({
  title: 'Monitor | Cerast Intelligence',
  meta: [
    {
      name: 'description',
      content: 'Monitor the data stream and see what is happening in real time.',
    },
  ],
})

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'dotenv', label: '.env' },
      { value: 'dotgit', label: '.git' },
      { value: 'file', label: 'Files' },
      { value: 'wpsetup', label: 'WP Setup' },
      { value: 'wpoutdated', label: 'WP Outdated' },
      { value: 'ssh', label: 'SSH Keys' },
    ],
  }
]

const mobileFiltersOpen = ref(false)

const apiKey = ref("")
const isConnected = ref(false)
const isConnecting = ref(false)
let ws = null;

const categories = {
    'dotenv': {
      icon: CogIcon,
      color: 'bg-rose-500'
    },
    'dotgit': {
      icon: ServerIcon,
      color: 'bg-blue-500'
    },
    'file': {
      icon: DocumentIcon,
      color: 'bg-rose-500'
    },
    'wpsetup': {
      icon: WrenchIcon,
      color: 'bg-rose-500'
    },
    'wpoutdated': {
      icon: CalendarIcon,
      color: 'bg-rose-500'
    },
    'ssh': {
      icon: FingerPrintIcon,
      color: 'bg-rose-500'
    }
}

const stop = () => {
  ws.close()
  isConnected.value = false;
}

const start = () => {
  isConnecting.value = true;
  ws = new WebSocket(`wss://stream.cerast-intelligence.com:8080/ws`)

  ws.onopen = () => {
    ws.send(apiKey.value)
  }

  ws.onerror = (error) => {
    isConnected.value = false;
    isConnecting.value = false;
  }

  ws.onmessage = (event) => {
    const message = event.data
    if(message === 'AUTH FAIL') {
      isConnected.value = false;
    } else if(message === 'SUCCESS WS') {
      isConnected.value = true;
      events.value.unshift({
        id: events.value.length + 1,
        domain: null,
        path: null,
        category: 'Data will be streamed here',
        time: new Date().toLocaleTimeString(),
        datetime: new Date().toISOString(),
        icon: CogIcon,
        iconBackground: 'bg-green-400',
      })
    } else {
      const messageJson = JSON.parse(message)

      events.value.unshift({
        id: events.value.length + 1,
        domain: messageJson.domain,
        path: messageJson.path,
        category: messageJson.category,
        time: new Date().toLocaleTimeString(),
        datetime: new Date().toISOString(),
        icon: categories[messageJson.category].icon,
        iconBackground: categories[messageJson.category].color,
      })
    }

    isConnecting.value = false;
  }
}

const events = ref([])

const timeline = computed(() => {
  return events.value
})
</script>
