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
          <a href="#" class="inline-flex space-x-6">
            <span
                class="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-semibold leading-6 text-rose-400 ring-1 ring-inset ring-rose-500/20">What's new</span>
            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
              <span>New detections</span>
              <ChevronRightIcon class="h-5 w-5 text-gray-500" aria-hidden="true"/>
            </span>
          </a>
        </div>
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Find security issues with ease</h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">You're a bug hunter searching for bounties? We help you find
          them!</p>
        <div class="mt-10 flex items-center gap-x-6">
          <NuxtLink to="#subscribe"
                    class="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400">
            Get started
          </NuxtLink>
          <NuxtLink to="/about-us" class="text-sm font-semibold leading-6 text-white">Learn more <span
              aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
      <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <NuxtImg lazy src="/images/background.webp" alt="App screenshot" width="2432" height="1442"
                   class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"/>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-900 py-6 sm:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by researchers worldwide</h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">We're providing up to date data on security issues
            worldwide</p>
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

  <!--
  <div id="subscribe" class="bg-gray-900 py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div class="p-8 sm:p-10 lg:flex-auto">
          <h3 class="text-2xl font-bold tracking-tight text-white">Subscribe to all data</h3>
          <p class="mt-6 text-base leading-7 text-gray-300">We're currently offering only one subscription plan, which
            will give you access to all found security issues in a websocket stream</p>
          <div class="mt-10 flex items-center gap-x-4">
            <h4 class="flex-none text-sm font-semibold leading-6 text-white">What’s included</h4>
            <div class="h-px flex-auto bg-gray-100"/>
          </div>
          <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
            <li v-for="feature in includedFeatures" :key="feature" class="flex gap-x-3 text-gray-400">
              <CheckIcon class="h-6 w-5 flex-none text-rose-600" aria-hidden="true"/>
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div
              class="rounded-2xl bg-white/5 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div class="mx-auto max-w-xs px-8">
              <p class="text-base font-semibold text-gray-300">Pay once, own it forever</p>
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-gray-200">50</span>
                <span class="text-sm font-semibold leading-6 tracking-wide text-gray-300">EUR</span>
              </p>
              <a href="#"
                 class="mt-10 block w-full rounded-md bg-rose-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
                Get access
              </a>
              <p class="mt-6 text-xs leading-5 text-gray-300">Invoices and receipts available for easy company
                reimbursement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  -->

  <div class="isolate overflow-hidden">
    <div class="flow-root pb-16 pt-24 sm:pt-32 lg:pb-0">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative z-10">
          <h2 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">Simple pricing, with free trial</h2>
          <p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
            Choose the plan that works for you. All plans include a 2-day free trial.
            All plans can be changed or canceled at any time.
          </p>
          <div class="mt-16 flex justify-center">
            <RadioGroup v-model="frequency" class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
              <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
              <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option" v-slot="{ checked }">
                <div :class="[checked ? 'bg-rose-500' : '', 'cursor-pointer rounded-full px-2.5 py-1']">
                  <span>{{ option.label }}</span>
                </div>
              </RadioGroupOption>
            </RadioGroup>
          </div>
        </div>
        <div class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
          <svg viewBox="0 0 1208 1024" aria-hidden="true" class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
            <ellipse cx="604" cy="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx="604" ry="512" />
            <defs>
              <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                <stop stop-color="#db2777" />
                <stop offset="1" stop-color="#831843" />
              </radialGradient>
            </defs>
          </svg>
          <div class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10" aria-hidden="true" />
          <div v-for="tier in tiers" :key="tier.id" :class="[tier.featured ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10' : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0', 'relative rounded-2xl']">
            <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
              <h3 :id="tier.id" :class="[tier.featured ? 'text-gray-900' : 'text-white', 'text-sm font-semibold leading-6']">{{ tier.name }}</h3>
              <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                <div class="mt-2 flex items-center gap-x-4">
                  <p :class="[tier.featured ? 'text-gray-900' : 'text-white', 'text-4xl font-bold tracking-tight']">{{ tier.price[frequency.value] }}</p>
                  <div class="text-sm leading-5">
                    <p :class="tier.featured ? 'text-gray-900' : 'text-white'">USD</p>
                    <p :class="tier.featured ? 'text-gray-500' : 'text-gray-400'">{{ `Billed ${frequency.value}` }}</p>
                  </div>
                </div>
                <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.featured ? 'bg-rose-600 shadow-sm hover:bg-rose-500 focus-visible:outline-rose-600' : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white', 'rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">
                  Subscribe now
                </a>
              </div>
              <div class="mt-8 flow-root sm:mt-10">
                <ul role="list" :class="[tier.featured ? 'divide-gray-900/5 border-gray-900/5 text-gray-600' : 'divide-white/5 border-white/5 text-white', '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0']">
                  <li v-for="mainFeature in tier.mainFeatures" :key="mainFeature" class="flex gap-x-3 py-2">
                    <CheckIcon :class="[tier.featured ? 'text-rose-600' : 'text-gray-500', 'h-6 w-5 flex-none']" aria-hidden="true" />
                    {{ mainFeature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative bg-gray-900">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Feature comparison (up to lg) -->
        <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
          <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

          <div class="mx-auto max-w-2xl space-y-16">
            <div v-for="tier in tiers" :key="tier.id" class="border-t border-gray-900/10">
              <div :class="[tier.featured ? 'border-rose-600' : 'border-transparent', '-mt-px w-72 border-t-2 pt-10 md:w-80']">
                <h3 :class="[tier.featured ? 'text-rose-600' : 'text-gray-900', 'text-sm font-semibold leading-6']">{{ tier.name }}</h3>
                <p class="mt-1 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
              </div>

              <div class="mt-10 space-y-10">
                <div v-for="section in sections" :key="section.name">
                  <h4 class="text-sm font-semibold leading-6 text-gray-900">{{ section.name }}</h4>
                  <div class="relative mt-6">
                    <div aria-hidden="true" class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block" />

                    <div :class="[tier.featured ? 'ring-2 ring-rose-600' : 'ring-1 ring-gray-900/10', 'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0']">
                      <dl class="divide-y divide-gray-200 text-sm leading-6">
                        <div v-for="feature in section.features" :key="feature.name" class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
                          <dt class="pr-4 text-gray-600">{{ feature.name }}</dt>
                          <dd class="flex items-center justify-end sm:justify-center sm:px-4">
                            <span v-if="typeof feature.tiers[tier.name] === 'string'" :class="tier.featured ? 'font-semibold text-rose-600' : 'text-gray-900'">{{ feature.tiers[tier.name] }}</span>
                            <template v-else>
                              <CheckIcon v-if="feature.tiers[tier.name] === true" class="mx-auto h-5 w-5 text-rose-600" aria-hidden="true" />
                              <XMarkIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Yes' : 'No' }}</span>
                            </template>
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div aria-hidden="true" :class="[tier.featured ? 'ring-2 ring-rose-600' : 'ring-1 ring-gray-900/10', 'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block']" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <section id="testimonials" class="bg-gray-900 py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
          <img class="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-white.svg" alt=""/>
          <figure class="mt-10 flex flex-auto flex-col justify-between">
            <blockquote class="text-lg leading-8 text-white">
              <p>"This streaming service provides real-time alerts on web security risks, combining an intuitive
                interface with precise customization. Its timely and accurate information allows us to address
                vulnerabilities swiftly, enhancing our defense against threats. It's an indispensable tool for anyone
                serious about maintaining robust online security."</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center gap-x-6">
              <img class="h-14 w-14 rounded-full bg-gray-800"
                   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt=""/>
              <div class="text-base">
                <div class="font-semibold text-white">Judith Black</div>
                <div class="mt-1 text-gray-400">CEO of Tuple</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div
            class="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
          <img class="h-12 self-start" src="https://tailwindui.com/img/logos/reform-logo-white.svg" alt=""/>
          <figure class="mt-10 flex flex-auto flex-col justify-between">
            <blockquote class="text-lg leading-8 text-white">
              <p>“Offering real-time updates on vulnerabilities, this service excels in delivering tailored, actionable
                intelligence. Its comprehensive threat coverage and user-friendly design make it a standout for
                effective cybersecurity management. It's a critical asset for proactively safeguarding digital
                assets.”</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center gap-x-6">
              <img class="h-14 w-14 rounded-full bg-gray-800"
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt=""/>
              <div class="text-base">
                <div class="font-semibold text-white">Joseph Rodriguez</div>
                <div class="mt-1 text-gray-400">CEO of Reform</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>

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
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckIcon, XMarkIcon } from '@heroicons/vue/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'annually', label: 'Annually' },
]
const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    featured: false,
    price: { monthly: '$15', annually: '$144' },
    mainFeatures: [
        'Access to 3 issue categories',
        'No rate limits',
        'Get 75% of the hits',
        'Only billing support via e-mail'
    ],
  },
  {
    name: 'Scale',
    id: 'tier-scale',
    href: '#',
    featured: true,

    price: { monthly: '$60', annually: '$576' },
    mainFeatures: [
        'Access to all issue categories',
        'Access to our monitoring tool',
        'Get 100% of the hits',
        'Full Support via e-mail or chat'
    ],
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '#',
    featured: false,
    price: { monthly: '$30', annually: '$288' },
    mainFeatures: [
        'Access to 6 issue categories',
        'Access to our monitoring tool',
        'Get 85% of the hits',
        'Billing support via e-mail'
    ],
  },
]


const frequency = ref(frequencies[0])

useHead({
  title: 'Home | Cerast Intelligence',
  meta: {
    name: 'description',
    content: 'Cerast Intelligence provides up to date data on security issues worldwide. Subscribe to our service and get access to all found security issues in a websocket stream.'
  }
})


const faqs = [
  {
    question: "Is the service legal?",
    answer:
        "Yes! We provide data which is already publicly available. We're just aggregating it and providing it in a more convenient way.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
        "Yes, you can cancel your subscription at any time. You will still have access to the data until the end of the billing period.",
  },
  {
    question: "Can I get a refund?",
    answer:
        "We're not offering refunds at the moment. If you're not sure if the service is right for you, you can try it out for free for 2 days.",
  },
  {
    question: "Can I use the data for commercial purposes?",
    answer:
        "Yes, you can use the data for commercial purposes. We're not restricting the usage of the data in any way.",
  },
]

const includedFeatures = [
  'E-Mail Support',
  'Websocket stream',
  'Access to all security issues',
  'No rate limits',
]

const stats = [
  {id: 1, name: 'Findings today', value: '6,000+'},
  {id: 2, name: 'Countries', value: 'in 89'},
  {id: 3, name: 'Uptime', value: 'with 99.9%'},
  {id: 4, name: 'per month', value: 'for only 50€'},
]
</script>
