<template>
  <Form  autocomplete="off" class="w-full form ">
    <h1 class="title">{{ title }}</h1>
    <div class="form__item" v-for="{as ,name,label,children,...attrs} in schema?.fields">
      <slot></slot>
      <label class="label" :for="name">{{ label }}</label>
      <div class="form__item-input">
        <Field
            class="input focus:border-input-active"
            :name="name" :id="name" :as="as" v-bind="attrs"
        >
          <slot name="prepend"></slot>
          <template v-if="children && children.length">
            <component
                v-for="({ tag, text, ...childAttrs }, idx) in children"
                :key="idx"
                :is="tag"
                v-bind="childAttrs">
              {{ text }}
            </component>
          </template>
          <slot name="append"></slot>
        </Field>
      </div>
      <ErrorMessage class="text-input-error input__error  font-semibold lowercase" :name="name"/>
    </div>
    <button>{{ buttonValue }}</button>
  </Form>
</template>

<script setup>
import {Form, Field, ErrorMessage} from "vee-validate";
import "./Form.scss";

defineEmits(['submit'])
defineProps({
  schema: {
    type: Object,
    required: true,
  },
  buttonValue: {
    type: String,
    default: "Submit"
  },
  title: {
    type: String
  }
})
</script>

<style scoped>

</style>