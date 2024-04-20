<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
                           enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                           leave-from="opacity-100 translate-y-0 sm:scale-100"
                           leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <div class="mt-3 text-left sm:mt-5">
                  <DialogTitle as="h3" class=" text-center text-base font-semibold leading-6 text-gray-900">Version
                    1.0
                  </DialogTitle>
                  <div class="mt-2">
                    <ul class="text-sm text-gray-500">
                      <li>Detection of exposed .git</li>
                      <li>Detection of exposed .env, config.php, config.xml</li>
                      <li>Detection of exposed backups and database files</li>
                      <li>Detection of exposed ssh-keys</li>
                      <li>Detection of outdated Wordpress</li>
                      <li>Detection of outdated Webserver (Apache, Tomcat, IIS)</li>
                      <li>Detection of outdated SSH-Server</li>
                      <li>Detection of outdated PHPMyAdmin</li>
                      <li>Detection of Wordpress in setup</li>
                      <li>Detection of old webpages (no changes since 2018)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button type="button"
                        class="inline-flex w-full justify-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                        @click="open = false">close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div class="relative isolate overflow-hidden bg-gray-900">
    <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
      <defs>
        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1"
                 patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none"/>
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"/>
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"/>
    </svg>
    <div
        class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true">
      <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#db2777] to-[#831843] opacity-20"
           style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"/>
    </div>
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
      <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <NuxtImg lazy class="h-32" src="/images/logo.webp" alt="Cerast Intelligence"/>
        <div class="mt-24 sm:mt-32 lg:mt-16">
          <button class="inline-flex items-center space-x-6" @click="open = true">
            <span
                class="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-semibold leading-6 text-rose-400 ring-1 ring-inset ring-rose-500/20">What's new</span>
            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
              <span>New detections</span>
              <ChevronRightIcon class="h-5 w-5 text-gray-500" aria-hidden="true"/>
            </span>
          </button>
        </div>
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Find security issues with ease</h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">You're a bug hunter searching for easy bounties? We will help
          you! Just open the flood gates and we will throw easy targets at you which you can directly convert to bug
          bounty</p>
        <div class="mt-10 flex items-center gap-x-6">
          <NuxtLink to="#subscribe"
                    class="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400">
            Get started
          </NuxtLink>
        </div>
      </div>
      <div class="mt-20 flex flex-col justify-center sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
        <div class="shadow-lg md:rounded-3xl">
          <div class="bg-rose-600 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
            <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
              <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                  <div class="flex items-center bg-gray-800/40 ring-1 ring-white/5">
                    <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">Live WebSocket Stream <span class="w-2 h-2 bg-green-600 absolute animate-pulse rounded-full"/></div>
                    </div>
                    <button @click="disconnect()" class="text-white hover:text-rose-600 absolute right-2">
                      <PauseCircleIcon class="h-8 w-8" />
                    </button>
                  </div>
                  <div class="px-6 pb-14 pt-6 text-white">
                    <p class="font-bold">
                      These events are live and contain redacted data. <br>
                      The Data is real and shows how many hits we get.
                    </p>
                    <p v-for="event in events" :key="event.id"><time class="text-gray-400" :datetime="event.datetime">{{ event.time }}</time> > {{ event.category }} {{ event.path }} on {{ event.domain }}</p>
                  </div>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-900 py-6 sm:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by security researchers
            worldwide</h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">We're providing an easy access to bug bounty and security
            research</p>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-white/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-300">{{ stat.name }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>


  <div id="subscribe" class="isolate overflow-hidden bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-base font-semibold leading-7 text-rose-400">Pricing</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">The right price for you, <br
            class="hidden sm:inline lg:hidden"/>whoever you are</p>
      </div>
      <div class="relative mt-6">
        <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">All pricing tiers get access to the same data. Only
          difference is the price per month.</p>
        <svg viewBox="0 0 1208 1024"
             class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
          <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512"/>
          <defs>
            <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
              <stop stop-color="#7775D6"/>
              <stop offset="1" stop-color="#E935C1"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="flow-root pb-24 sm:pb-32">
      <div class="-mt-80">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
            <div v-for="tier in tiers" :key="tier.id"
                 class="flex flex-col justify-between rounded-3xl bg-white/80 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
              <div>
                <h3 :id="tier.id" class="text-base font-semibold leading-7 text-rose-600">{{ tier.name }}</h3>
                <div class="mt-4 flex items-baseline gap-x-2">
                  <span class="text-5xl font-bold tracking-tight text-gray-900"
                        :class="{ 'text-rose-600 ; text-6xl; text-decoration-line: underline': tier.highlight }">{{
                      tier.priceMonthly
                    }}</span>
                  <span class="text-base font-semibold leading-7 text-gray-600">/month</span>
                </div>
                <p class="mt-6 text-base leading-7 text-gray-600">{{ tier.description }}</p>
                <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                  <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                    <CheckIcon class="h-6 w-5 flex-none text-rose-600" aria-hidden="true"/>
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <button :data-fsc-item-path-value="tier.itemPath" data-fsc-action="Add, Checkout" :aria-describedby="tier.id"
                 class="mt-8 block rounded-md bg-rose-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">Get
                started today</button>
            </div>
            <div
                class="flex bg-white/80 flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center">
              <div class="lg:min-w-0 lg:flex-1">
                <h3 class="text-lg font-semibold leading-8 tracking-tight text-rose-600">Discounted</h3>
                <p class="mt-1 text-base leading-7 text-gray-600">If you are a student, teacher, social worker, or
                  non-profit organization employee, you may qualify for a discount on our services</p>
              </div>
              <a href="mailto:discount@cerast-intelligence.com"
                 class="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-rose-600 ring-1 ring-inset ring-rose-200 hover:ring-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">Contact
                us <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div id="faq" class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
      <div class="mx-auto max-w-7xl divide-y divide-white/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-y divide-white/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-white">
                <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true"/>
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true"/>
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-400">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
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
import {ChevronRightIcon} from '@heroicons/vue/20/solid'
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {ref} from 'vue'
import {CheckIcon, MinusSmallIcon, PlusSmallIcon, PauseCircleIcon} from '@heroicons/vue/20/solid'
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {CogIcon} from "@heroicons/vue/24/outline/index.js";

const open = ref(false)
onMounted(() => {
  const ws = new WebSocket(`wss://stream.cerast-intelligence.com:8080/ws`);

  ws.onopen = () => {
    ws.send("TESTMODE")
  }


  ws.onmessage = (event) => {
    const message = event.data

    const messageJson = JSON.parse(message)

    if(events.value.length > 10) {
      events.value.pop()
    }

    events.value.unshift({
      id: events.value.length + 1,
      domain: messageJson.domain,
      path: messageJson.path,
      category: messageJson.category,
      time: new Date().toLocaleTimeString(),
      datetime: new Date().toISOString(),
      icon: CogIcon,
      iconBackground: 'bg-green-400',
    })

  }
})

const disconnect = () => {
  ws.close()
}

const events = ref([])

const tiers = [
  {
    name: '1 Month',
    id: '1month',
    href: '#',
    priceMonthly: '$49',
    highlight: false,
    description: 'For $49/month get access to our Datastream for Bug Bounty.',
    features: ['2 Days free trial', 'unlimited hits', 'easy access via monitoring page', '48-hour support response time'],
    itemPath: "1month",
  },
  {
    name: '6 Months',
    id: '6month',
    href: '#',
    priceMonthly: '$33',
    highlight: true,
    description: 'For $199/6months get access to our Datastream for Bug Bounty.',
    features: ['2 Days free trial', 'unlimited hits', 'easy access via monitoring page', '48-hour support response time', 'Feature Requests'],
    itemPath: "6months",
  },
  {
    name: '3 Months',
    id: '3month',
    href: '#',
    priceMonthly: '$39',
    highlight: false,
    description: 'For $119/3months get access to our Datastream for Bug Bounty.',
    features: ['2 Days free trial', 'unlimited hits', 'easy access via monitoring page', '48-hour support response time'],
    itemPath: "3months",
  },

]


useHead({
  title: 'Home | Cerast Intelligence',
  meta: {
    name: 'description',
    content: 'Cerast Intelligence provides up to date data on security issues worldwide. Subscribe to our service and get access to all found security issues in a websocket stream. Get easy targets for Bug Bounty'
  },
  script: [
    {
      id: 'fsc-api',
      src: 'https://sbl.onfastspring.com/sbl/1.0.1/fastspring-builder.min.js',
      type: 'text/javascript',
      'data-storefront': 'cerastintel.test.onfastspring.com/popup-cerastintel'
    }
  ],
})


const faqs = [
  {
    question: "Why should i buy your product?",
    answer:
        'We give you easy bug bounty targets which are pre verified. The return of investment is therefore high.',
  },
  {
    question: "Whats the catch?",
    answer:
        "There is none.",
  },
  {
    question: "Is the service legal?",
    answer:
        "Yes! We provide data which is somewhat publicly available. We're just aggregating,filtering and analyzing it to provide it in a easy way for you! We are a registered business in Germany, therefore being not legal would be quit bad for us :)",
  },
  {
    question: "Can I use the data for commercial purposes?",
    answer:
        "Yes, you can use the data for commercial purposes. The only restriction is that you can not resell the data directly.",
  },
  {
    question: "I need API access",
    answer:
        "Please contact us at api@cerast-intelligence.com.",
  },
  {
    question: "Are there student, NGO... discounts?",
    answer:
        "If you are a student, teacher, social worker, or non-profit organization employee, you may qualify for a discount on our service. Contact us!",
  },
  {
    question: "If I buy 6 months, how does the discount code work?",
    answer:
        'The discount code applies to "each payment period". This means if you have 50% off you get a discount of ~$100 because it applies to the whole 6 month',
  },
  {
    question: "Can I cancel my subscription?",
    answer:
        "Yes, you can cancel your subscription at any time. You will still have access to the data until the end of the billing period.",
  },
  {
    question: "Can I get a refund?",
    answer:
        "We are not offering refunds at the moment due to the nature of the product. If you're not sure if the service is right for you, you can try it out for free for 2 days.",
  },

]


const stats = [
  {id: 1, name: 'Findings last month', value: '86,400+'},
  {id: 3, name: 'Countries', value: 'in 120+'},
  {id: 2, name: 'Fulfillment', value: '100% Automated'},
  {id: 4, name: 'Legal', value: '100%'},
]
</script>
