<template>
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
          <NuxtLink to="/changelog/detections-1-0-0" class="inline-flex items-center space-x-6">
            <span
                class="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-semibold leading-6 text-rose-400 ring-1 ring-inset ring-rose-500/20">What's new</span>
            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
              <span>New detections</span>
              <ChevronRightIcon class="h-5 w-5 text-gray-500" aria-hidden="true"/>
            </span>
          </NuxtLink>
        </div>
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Bug Bounty on a Sushi Belt - Fast & Fresh 24/7</h1>
        <p class="mt-6 mr-20 text-lg leading-8 text-gray-300">Sit back and watch as the easiest bug bounties roll directly to you on a virtual sushi belt, each one pre-verified and ready for the taking. Simply claim your bounty or dive deeper to uncover more vulnerabilities. </p>
        <div class="mt-10 flex items-center gap-x-6">
          <NuxtLink to="#subscribe"
                    class="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400">
            Get started
          </NuxtLink>
        </div>
      </div>

      <div
          class="mt-20 hidden lg:flex flex-col justify-center sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
        <div class="md:rounded-3xl [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))] relative">
          <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
            <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
              <div class="flex items-center bg-gray-800/40 ring-1 ring-white/5">
                <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                  <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                    Live Data Stream <span class="w-2 h-2 bg-green-600 absolute animate-pulse rounded-full"/></div>
                </div>
                <button @click="disconnect()" class="text-white hover:text-rose-600 absolute right-2">
                  <PauseCircleIcon class="h-8 w-8"/>
                </button>
              </div>
              <div class="px-6 pb-14 pt-6 text-white">
                <p class="font-bold">
                  These events are live, but are redacted. <br>
                  Get acces <a href="/#subscribe" class="text-rose-600">now</a> to see unredacted data. 
                </p>
                <p v-for="event in events" :key="event.id">
                  <time class="text-gray-400" :datetime="event.datetime">{{ event.time }}</time>
                  > {{ event.category }} {{ event.path }} on {{ event.domain }}
                </p>
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
               aria-hidden="true"/>
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


  <div id="subscribe" class="bg-gray-900 py-16 sm:py-24 relative">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base font-semibold leading-7 text-rose-600">Pricing</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">The right price for you, whoever you
          are</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
        Choose how long you want to subscribe and get access to our datastream.
        <br> Get 2 free trial days and cancel anytime.
      </p>
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="tier in tiers" :key="tier.id"
             :class="[tier.mostPopular ? 'bg-white/5 ring-2 ring-rose-600' : 'ring-1 ring-white/10', 'rounded-3xl p-8 xl:p-10']">
          <div class="flex items-center justify-between gap-x-4">
            <h3 :id="tier.id" class="text-lg font-semibold leading-8 text-white">{{ tier.name }}</h3>
            <p v-if="tier.mostPopular"
               class="rounded-full bg-rose-600 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most value</p>
          </div>
          <p class="text-sm leading-6 text-gray-500">Starting at {{ tier.price }} / month excl. VAT</p>
          <p class="mt-4 text-sm leading-6 text-gray-300">{{ tier.description }}</p>
          <button :data-fsc-item-path-value="tier.id" data-fsc-action="Add, Checkout" :aria-describedby="tier.id"
                  :class="[tier.mostPopular ? 'bg-rose-600 text-white shadow-sm hover:bg-rose-500 focus-visible:outline-rose-600' : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white', 'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">
            Subscribe now
          </button>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-white" aria-hidden="true"/>
              {{ feature }}
            </li>
          </ul>
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
import {RadioGroup, RadioGroupLabel, RadioGroupOption} from '@headlessui/vue'

const open = ref(false)

onUnmounted(() => {
  ws.close()
})

onMounted(() => {
  const ws = new WebSocket(`wss://stream.cerast-intelligence.com:8080/ws`);

  ws.onopen = () => {
    ws.send("TESTMODE")
  }

  setTimeout(() => {
    ws.close()
  }, 10 * 60 * 1000)


  ws.onmessage = (event) => {
    const message = event.data

    const messageJson = JSON.parse(message)

    if (events.value.length > 10) {
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
    price: '$12.49',
    description: 'Get to know our service in a shorter term.',
    features: [
      '2 Days free trial',
      'unlimited hits',
      'easy access via monitoring page',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
  {
    name: '6 Months',
    id: '6months',
    price: '$54.99',
    description: 'Save ~30% compared to the monthly plan.',
    features: [
      '2 Days free trial',
      'unlimited hits',
      'easy access via monitoring page',
      '48-hour support response time',
      'Feature Requests',
    ],
    mostPopular: true,
  },
  {
    name: '3 Months',
    id: '3months',
    price: '$29.95',
    description: 'Save ~20% compared to the monthly plan.',
    features: [
      '2 Days free trial',
      'unlimited hits',
      'easy access via monitoring page',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
]

useHead({
  title: 'Home | Cerast Intelligence',
  meta: {
    name: 'description',
    content: 'Cerast Intelligence delivers a comprehensive Datastream designed to identify prime targets for bug bounty and security research efforts. Our service highlights vulnerable assets, including exposed .git directories, .env files, and outdated software, helping you secure potential weaknesses effectively'
  },
  script: [
    {
      id: 'fsc-api',
      src: 'https://sbl.onfastspring.com/sbl/1.0.1/fastspring-builder.min.js',
      type: 'text/javascript',
      'data-storefront': 'cerastintel.onfastspring.com/popup-cerastintel'
    }
  ],
})


const faqs = [
  {
    question: "Why should I buy your product?",
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
        "Yes! We provide data which is somewhat publicly available. We're just aggregating,filtering and analyzing it to provide it in a easy way for you!",
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
  {id: 1, name: 'Findings last month', value: '670,000+'},
  {id: 3, name: 'Countries', value: 'in 120+'},
  {id: 2, name: 'Fulfillment', value: '100% Automated'},
  {id: 4, name: 'Legal', value: '100%'},
]
</script>
