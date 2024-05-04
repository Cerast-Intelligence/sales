<template>
  <div
      :class="{ 'bg-blue-600': type === 'info', 'bg-rose-600': type === 'error', 'bg-yellow-600': type === 'warning', 'bg-emerald-600': type === 'success' }"
      class="rounded-md p-4 text-white">
    <div class="flex">
      <div class="flex-shrink-0">
        <slot name="icon"></slot>
      </div>
      <div class="ml-3">
        <slot></slot>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button @click="$emit('close')" type="button"
                  :class="{'bg-emerald-50 text-emerald-500 hover:bg-emerald-100 focus:ring-emerald-600 focus:ring-offset-emerald-50': type === 'success',
                           'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50': type === 'warning',
                           'bg-rose-50 text-rose-500 hover:bg-rose-100 focus:ring-rose-600 focus:ring-offset-rose-50': type === 'error',
                           'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50': type === 'info'}"
                  class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2">
            <span class="sr-only">Dismiss</span>
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {XMarkIcon} from "@heroicons/vue/24/outline";

defineProps({
  type: {
    type: String,
    default: 'info'
  }
})
</script>
