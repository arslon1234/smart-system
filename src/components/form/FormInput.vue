<template>
  <div class="mb-[18px] w-full">
    <label
        class=""
        v-if="label?.value"
        :for="label.for"
        :class="['form-label']"
    >
      {{ label.value }}
    </label>

    <div :class="['relative flex items-center']">
      <div class="prepend">
        <slot name="prepend">
        </slot>
      </div>
      <input
          :type="type"
          :id="label?.for"
          :placeholder="placeholder"
          :class="[
        'form__input',
        { '': type !== 'checkbox' },

      ]"
          class=""
          v-bind="$attrs"
          v-model="value"
          @blur.prevent="emit('blur')"
      />

      <div class="append">
        <slot name="append"></slot>
      </div>
    </div>
    <span class="form__input-error" v-for="(error,i) in errors" :key="i">{{ error }}</span>
  </div>
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['update:modelValue', 'blur']);

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    required: true
  },
  label: {
    type: Object,
    default: {
      value: "", for: ''
    }
  },
  classes: {
    type: Object,
    default: () => {
      return {
        label: '',
        input: '',
        error: ''
      }
    }
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: "Enter typing..."
  },
  errors: {
    type: Array,
    default: []
  }
})

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped>

</style>