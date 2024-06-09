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
          <p class="text-sm text-gray-500" v-if="apiKey">
            <span @click="removeKeyFromLocalStorage()"
                  class="underline cursor-pointer">Remove key from local storage</span>
          </p>
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

  <div v-if="notifications.length" class="relative mx-auto max-w-7xl px-6 lg:px-8">
    <alert @close="closeNotification(id)" v-for="(notification, id) in notifications" :key="id"
           :type="notification.type" class="my-4 sm:my-8">
      {{ notification.message }}
    </alert>
  </div>

  <div v-if="isConnected || timeline.length" class="bg-gray-900">
    <div>
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                           enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                           leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25"/>
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                             enter-from="translate-x-full" enter-to="translate-x-0"
                             leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                             leave-to="translate-x-full">
              <DialogPanel
                  class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-900 py-4 pb-6 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-white">Filters</h2>
                  <button type="button"
                          class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                          @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
                  </button>
                </div>

                <form class="mt-4">
                  <Disclosure as="div" v-for="section in filters" :key="section.name"
                              class="border-t border-gray-200 pb-4 pt-4" v-slot="{ open }">
                    <fieldset>
                      <legend class="w-full px-2">
                        <DisclosureButton
                            class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                          <span class="text-sm font-medium text-white">{{ section.name }}</span>
                          <span class="ml-6 flex h-7 items-center">
                            <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']"
                                             aria-hidden="true"/>
                          </span>
                        </DisclosureButton>
                      </legend>
                      <DisclosurePanel class="px-4 pb-2 pt-4">
                        <div class="space-y-6">
                          <div v-for="(option, optionIdx) in section.options" :key="option.value"
                               class="flex items-center">
                            <input @change="toggleFilter(section.id, option.value)"
                                   :id="`${section.id}-${optionIdx}-mobile`" :name="`${section.id}[]`"
                                   :value="option.value" type="checkbox"
                                   class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"/>
                            <label :for="`${section.id}-${optionIdx}-mobile`"
                                   class="ml-3 text-sm text-gray-400">{{ option.label }}</label>
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

      <main class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div class="border-b border-gray-200 pb-10 flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold tracking-tight text-white relative">
              Data Stream
              <span
                  :class="{ 'bg-yellow-600 animate-pulse': isConnected && isPaused, 'bg-green-600 animate-pulse': isConnected && !isPaused, 'bg-rose-600': !isConnected }"
                  class="absolute w-6 h-6 rounded-full top-[25%] ml-2"></span>
            </h1>
            <p class="mt-4 text-base text-gray-300">
              Monitor the data stream and see what is happening in real time.
            </p>
          </div>

          <div v-if="!isPaused" class="flex items-center">
            <span class="sr-only">Pause stream</span>
            <PauseIcon @click="isPaused = !isPaused"
                       class="w-12 h-12 text-white rounded-full bg-gray-800 border-white/20 border hover:bg-rose-600 cursor-pointer p-2"/>
          </div>

          <div v-else>
            <span class="sr-only">Resume stream</span>
            <PlayIcon @click="isPaused = !isPaused"
                      class="w-12 h-12 text-white rounded-full bg-gray-800 border-white/20 border hover:bg-emerald-600 cursor-pointer p-2 pl-3"/>
          </div>
        </div>

        <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 class="sr-only">Filters</h2>

            <button type="button" class="inline-flex items-center lg:hidden" @click="mobileFiltersOpen = true">
              <span class="text-sm font-medium text-white">Filters</span>
              <PlusIcon class="ml-1 h-5 w-5 flex-shrink-0 text-white" aria-hidden="true"/>
            </button>

            <div class="hidden lg:block">
              <form class="space-y-10 divide-y divide-gray-200">
                <p class="text-gray-400">Showing <span class="text-gray-200">{{ timeline.length }}</span> of <span
                    class="text-gray-200">{{ events.length }}</span></p>

                <div class="pt-10">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </div>
                    <input v-model="search" id="search" name="search"
                           class="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                           placeholder="Search" type="search"/>
                  </div>


                  <SwitchGroup as="div" class="flex items-center mt-4">
                    <Switch v-model="regexEnabled"
                            :class="[regexEnabled ? 'bg-emerald-600' : 'bg-gray-700', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-gray-700']">
                      <span aria-hidden="true"
                            :class="[regexEnabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-100 shadow ring-0 transition duration-200 ease-in-out']"/>
                    </Switch>
                    <SwitchLabel as="span" class="ml-3 text-sm">
                      <span class="font-medium text-gray-500">Use regex in search</span>
                    </SwitchLabel>
                  </SwitchGroup>


                </div>

                <div v-for="(section, sectionIdx) in filters" :key="section.name" class="pt-10">
                  <fieldset>
                    <legend class="block text-sm font-medium text-white">{{ section.name }}</legend>
                    <div class="space-y-3 pt-6">
                      <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                        <input @change="toggleFilter(section.id, option.value)" :id="`${section.id}-${optionIdx}`"
                               :name="`${section.id}[]`" :value="option.value" type="checkbox"
                               class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"/>
                        <label :for="`${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-400">{{
                            option.label
                          }}</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <div class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <div class="bg-gray-900 w-full">
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select @change="currentTab = $event.target.value" id="tabs" name="tabs"
                        class="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm">
                  <option class="bg-gray-800">Stream</option>
                  <option class="bg-gray-800">Saved</option>
                </select>
              </div>
              <div class="hidden sm:block">
                <nav class="flex border-b border-white/10 py-4">
                  <ul role="list"
                      class="flex min-w-full flex-none gap-x-6 px-2 text-sm font-semibold leading-6 text-gray-400">
                    <li>
                      <button @click="currentTab = 'Stream'" :class="'Stream' === currentTab ? 'text-rose-600' : ''">
                        Stream
                      </button>
                    </li>
                    <li>
                      <button @click="currentTab = 'Saved'" :class="'Saved' === currentTab ? 'text-rose-600' : ''">
                        Saved {{ savedEvents.length }}
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div v-if="isPaused || pausedEvents.length"
                 class="flex items-center gap-x-6 bg-yellow-600 mt-4 rounded-lg px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
              <p class="text-sm leading-6 text-white">
                <template v-if="isPaused">
                  Stream is paused! Press <kbd>Space</kbd> to resume.
                </template>
                <template v-if="pausedEvents.length">
                  {{ pausedEvents.length }} events are waiting.
                </template>
              </p>
              <div class="flex flex-1 justify-end">
                <button @click="isPaused = false" type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                  <span class="sr-only">Dismiss</span>
                  <XMarkIcon class="h-5 w-5 text-white" aria-hidden="true"/>
                </button>
              </div>
            </div>

            <div @mousedown.prevent
                 @mouseenter="hoversTimeline = true"
                 @mouseleave="hoversTimeline = false"
                 v-show="currentTab === 'Stream'"
                 class="flow-root pt-6">
              <ul role="list" class="-mb-8">
                <li v-for="(event, eventIdx) in timeline" :key="'stream-' + event.id">
                  <div class="relative pb-8" :class="{ 'pb-32': route.hash === '#' + event.id }">
            <span v-if="eventIdx !== timeline.length - 1" class="absolute left-4 top-4 -ml-px h-full w-0.5"
                  :class="{ 'bg-white': route.hash !== '#' + event.id }"
                  aria-hidden="true"/>
                    <div class="relative flex space-x-3">
                      <div>
              <span
                  class="h-8 w-8 rounded-full flex items-center justify-center ring-2 bg-gray-800"
                  :class="{'ring-blue-700 text-blue-700': event.impact === 'LOW','ring-yellow-700 text-yellow-700': event.impact === 'MEDIUM','ring-rose-800 text-rose-800': event.impact === 'HIGH'}">
                <component :is="categories[event.category].icon" class="h-5 w-5" aria-hidden="true"/>
              </span>
                      </div>
                      <div :id="event.id" @click="shake($event)"
                           class="flex min-w-0 flex-1 justify-between space-x-4 group cursor-pointer">
                        <div @click="save(event)">
                          <div class="text-rose-600">
                            
                            <span class="text-white group-hover:text-rose-600">
                            {{ event.domain }}
                            </span>
                            {{ categories[event.category].label }} 
                          </div>
                         
                          <p class="text-sm text-gray-400">
                            {{ event.path }}
                          </p>
                        </div>
                        <div class="whitespace-nowrap text-right text-sm text-gray-500 flex items-center">
                          <time :datetime="event.datetime">{{ event.time }}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div v-show="currentTab === 'Saved'" class="flow-root pt-6">
              <div class="flex justify-between">
                <form @submit.prevent="importSaved" class="flex space-x-2">
                  <label for="importCode" class="sr-only">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <HashtagIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </div>
                    <input v-model="importCode" id="importCode" name="importCode"
                           class="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                           placeholder="Import Code" type="text"/>
                  </div>
                  <button
                      @click="importSaved"
                      type="button"
                      class="rounded-md bg-gray-700 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-600">
                    Import
                  </button>
                </form>
                <button
                    @click="exportSaved"
                    type="button"
                    class="rounded-md bg-gray-700 px-2 py-1 text-sm text-gray-100 font-semibold shadow-sm hover:bg-gray-600 flex items-center justify-center">
                  Export
                  <ArrowUpOnSquareIcon class="h-5 w-5 ml-2" aria-hidden="true"/>
                </button>
              </div>

              <ul role="list" class="-mb-8 mt-8">
                <li v-for="(event, eventIdx) in savedTimeline" :key="'save-' + event.id">
                  <div class="relative pb-8">
            <span v-if="eventIdx !== savedTimeline.length - 1"
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white"
                  aria-hidden="true"/>
                    <div class="relative flex space-x-3">
                      <div>
              <span
                  class="h-8 w-8 rounded-full flex items-center justify-center ring-2 bg-gray-800"
                  :class="{'ring-blue-700 text-blue-700': event.impact === 'LOW','ring-yellow-700 text-yellow-700': event.impact === 'MEDIUM','ring-rose-800 text-rose-800': event.impact === 'HIGH'}">
                <component :is="categories[event.category].icon" class="h-5 w-5" aria-hidden="true"/>
              </span>
                      </div>
                      <div class="flex min-w-0 flex-1 justify-between space-x-4">
                        <div>
                          <div class="flex">
                            <p class="text-gray-100">{{ event.domain }}</p>
                            <a v-if="event.showLink" :href="'https://' + event.domain + event.path" target="_blank">
                              <ArrowTopRightOnSquareIcon
                                  class="w-5 h-5 hover:text-blue-400 text-blue-600 ml-4 cursor-pointer"/>
                            </a>
                          </div>
                          <p class="text-sm text-gray-400">
                            {{ event.path }}
                          </p>
                        </div>
                        <div class="whitespace-nowrap text-right text-sm text-gray-500 flex items-center">
                          <time :datetime="event.datetime">{{ event.time }}</time>
                          <TrashIcon class="w-5 h-5 cursor-pointer text-rose-600 hover:text-rose-500"
                                     @click="remove(event)"/>
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
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">You're not yet a customer?<br/>No Problem!
        </h2>
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
import {
  CalendarDaysIcon,
  HandRaisedIcon,
  FingerPrintIcon,
  ServerIcon,
  CogIcon,
  WrenchIcon,
  CalendarIcon,
  CircleStackIcon,
  FolderIcon,
  TrashIcon,
  PauseIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUpOnSquareIcon,
  ArrowDownOnSquareIcon,
  HashtagIcon
} from '@heroicons/vue/24/outline'
import {ref} from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {XMarkIcon} from '@heroicons/vue/24/outline'
import {ChevronDownIcon, PlusIcon} from '@heroicons/vue/20/solid'
import {Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue'


const regexEnabled = ref(true)

onMounted(() => {
  const apiKeyFromLocalStorage = localStorage.getItem('apiKey')
  if (apiKeyFromLocalStorage) {
    apiKey.value = apiKeyFromLocalStorage
    start()
  }

  document.body.onkeydown = (e) => {
    if ((e.key === " " || e.code === "Space") && hoversTimeline.value) {
      e.preventDefault()
      isPaused.value = !isPaused.value
    }
  }
})

const route = useRoute();

useHead({
  title: 'Monitor | Cerast Intelligence',
  meta: [
    {
      name: 'description',
      content: 'Monitor the data stream and see what is happening in real time.',
    },
  ],
})

const currentTab = ref('Stream');

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      {value: 'config', label: 'Config File'},
      {value: 'source_code', label: 'SourceCode'},
      {value: 'wordpress', label: 'WP Setup'},
      {value: 'outdated', label: 'Outdated Software'},
      {value: 'credentials', label: 'Credentials'},
      {value: 'database', label: 'Database'},
      {value: 'exposed', label: 'Exposed Files'},
    ],
  },
  {
    id: 'impact',
    name: 'Impact',
    options: [
      {value: 'LOW', label: 'Low'},
      {value: 'MEDIUM', label: 'Medium'},
      {value: 'HIGH', label: 'High'},
    ],
  }
]

const search = ref('')

const start = () => {
  isConnecting.value = true;
  ws = new WebSocket(`wss://stream.cerast-intelligence.com:8080/ws`)

  ws.onopen = () => {
    ws.send(apiKey.value)
  }

  ws.onerror = (error) => {
    isConnected.value = false;
    isConnecting.value = false;
    const index = notifications.value.push({
      message: 'An error occurred while connecting to the data stream.',
      type: 'error'
    })
    setTimeout(() => {
      notifications.value.splice(index - 1, 1)
    }, 5000)
  }

  ws.onmessage = (event) => {
    const message = event.data
    if (message === 'EXPIRED') {
      notifications.value.push({message: 'The API key is expired.', type: 'warning'})
      isConnected.value = false;
    } else if (message === 'INVALID TOKEN') {
      notifications.value.push({message: 'The API key is invalid.', type: 'warning'})
      isConnected.value = false;
    } else if (message === 'SUCCESS WS') {
      const index = notifications.value.push({message: 'Successfully connected to the data stream', type: 'success'})
      setTimeout(() => {
        notifications.value.splice(index - 1, 1)
      }, 5000)

      localStorage.setItem('apiKey', apiKey.value)
      isConnected.value = true;
      events.value.unshift({
        id: 1,
        domain: "The data stream has started",
        path: null,
        category: 'start',
        time: new Date().toLocaleTimeString(),
        datetime: new Date().toISOString(),
        iconBackground: categories['start'].color,
        showLink: categories['start'].showLink,
      })
    } else {
      const messageJson = JSON.parse(message)

      let item = {
        id: messageJson.uuid,
        domain: messageJson.domain,
        path: messageJson.path,
        category: messageJson.category,
        time: new Date().toLocaleTimeString(),
        datetime: new Date().toISOString(),
        iconBackground: categories[messageJson.category].color,
        showLink: categories[messageJson.category].showLink,
        impact: messageJson.impact,
      };

      if (isPaused.value) {
        pausedEvents.value.unshift(item)
      } else {
        events.value.unshift(item)
      }
    }

    isConnecting.value = false;
  }
}

const toggleFilter = (sectionId, optionValue) => {
  const index = activeFilters.value.findIndex((filter) => filter.sectionId === sectionId && filter.optionValue === optionValue)
  if (index === -1) {
    activeFilters.value.push({sectionId, optionValue})
  } else {
    activeFilters.value.splice(index, 1)
  }
}

const activeFilters = ref([])

const mobileFiltersOpen = ref(false)

const apiKey = ref("")
const isConnected = ref(false)
const isConnecting = ref(false)
const notifications = ref([])
const closeNotification = (id) => {
  notifications.value.splice(id, 1)
}

const removeKeyFromLocalStorage = () => {
  localStorage.removeItem('apiKey')
  apiKey.value = ""
}

let ws = null;

const categories = {
  'start': {
    label: "The data stream has started",
    icon: CogIcon,
    showLink: false,
  },
  'config': {
    label: "Config File",
    icon: CogIcon,
    showLink: true,
  },
  'source_code': {
    label: "Source Code",
    icon: CogIcon,
    showLink: true,
  },
  'wordpress': {
    label: "Misconfigured Wordpress",
    icon: WrenchIcon,
    showLink: true,
  },
  'outdated': {
    label: "Outdated Software",
    icon: CalendarIcon,
    showLink: false,
  },
  'credentials': {
    label: "Credentials leaked",
    icon: FingerPrintIcon,
    showLink: false,
  },
  'database': {
    label: "Database Backup",
    icon: CircleStackIcon,
    showLink: true,
  },
  'exposed': {
    label: "Exposed Files",
    icon: FolderIcon,
    showLink: true,
  },
}

const events = ref([])
const savedEvents = ref([])

const stop = () => {
  ws.close()
  isConnected.value = false;
}

const save = (event) => {
  remove(event)
  savedEvents.value.unshift(event)
}

const remove = (event) => {
  const index = savedEvents.value.indexOf(event)
  if (index !== -1) {
    savedEvents.value.splice(index, 1)
  }
}


const timeline = computed(() => {
  if (activeFilters.value.length === 0 && search.value.length === 0) {
    return events.value;
  }

  return events.value.filter(event => {
    const sectionSatisfactions = {};

    sectionSatisfactions['search'] = [];
    const regex = new RegExp(search.value, 'ig');
    sectionSatisfactions['search'].push(!(search.value.length && (!regexEnabled.value && !event.domain.includes(search.value)) || (regexEnabled.value && !regex.test(event.domain))));

    for (const filter of activeFilters.value) {
      if (!sectionSatisfactions[filter.sectionId]) {
        sectionSatisfactions[filter.sectionId] = [];
      }

      sectionSatisfactions[filter.sectionId].push(event[filter.sectionId] === filter.optionValue);
    }


    return Object.values(sectionSatisfactions).every(results => results.includes(true));
  });
})

const savedTimeline = computed(() => {
  if (activeFilters.value.length === 0 && search.value.length === 0) {
    return savedEvents.value;
  }

  return savedEvents.value.filter(event => {
    const sectionSatisfactions = {};

    sectionSatisfactions['search'] = [];
    const regex = new RegExp(search.value, 'ig');
    sectionSatisfactions['search'].push(!(search.value.length && (!regexEnabled.value && !event.domain.includes(search.value)) || (regexEnabled.value && !regex.test(event.domain))));

    for (const filter of activeFilters.value) {
      if (!sectionSatisfactions[filter.sectionId]) {
        sectionSatisfactions[filter.sectionId] = [];
      }

      sectionSatisfactions[filter.sectionId].push(event[filter.sectionId] === filter.optionValue);
    }


    return Object.values(sectionSatisfactions).every(results => results.includes(true));
  });
})

const pausedEvents = ref([])

const shake = (event) => {
  const element = event.currentTarget
  shakeElement(element)
}

const shakeElement = (element, shakeTime = 750) => {
  element.classList.add('shake')

  setTimeout(() => {
    element.classList.remove('shake')
  }, shakeTime)
}

const isPaused = ref(false)
const hoversTimeline = ref(false)
const importCode = ref('')

watch(isPaused, (value) => {
  if (value) return;

  const lastItem = events.value[0]
  events.value = pausedEvents.value.concat(events.value)
  pausedEvents.value = []
  location.hash = lastItem.id
})

const importSaved = async () => {
  fetch('https://api.pastes.dev/' + importCode.value)
      .then(response => response.json())
      .then(data => {
        savedEvents.value = data
      })
      .catch((error) => {
        console.error('Error:', error)
      })
}

const exportSaved = async () => {
  fetch('https://api.pastes.dev/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/json',
    },
    body: JSON.stringify(savedEvents.value),
  })
      .then(response => response.json())
      .then(data => {
        notifications.value.push({
          message: 'Use the following code to import your saved events: ' + data.key,
          type: 'success'
        })
      })
      .catch((error) => {
        notifications.value.push({
          message: 'An error occurred while exporting the saved events.',
          type: 'error'
        })
      })
}
</script>
