<template>
  <AppModal v-model="dialog">
    <div class="modal">
      <h3 v-if="!forms.id">Kurs qo'shish</h3>
      <h3 v-else>Kursni o'zgartirish</h3>
      <Form @submit="send">
        <label for="name">Kurs nomi</label>
        <Field
            rules="required"
            :modelValue="forms.name"
            v-slot="{ errors }"
            name="Kurs nomi"
        >
          <input
              type="text"
              id="name"
              placeholder="Kurs nomini kiriting"
              v-model="forms.name"
          />
          <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
          </p>
        </Field>

        <label for="cost">Kurs narxi</label>
        <Field
            rules="required"
            :modelValue="forms.cost"
            v-slot="{ errors }"
            name="Kurs narxi"
        >
          <input
              type="number"
              id="cost"
              placeholder="Kurs narxini kiriting"
              v-model="forms.cost"
          />
          <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
          </p>
        </Field>
        <div class="btn">
          <BaseButton
              design="auth"
              @click="openModal"
              name="Kurs qo'shish"
              type="submit"
              v-if="!forms.id"
          >
          </BaseButton>
          <BaseButton
              design="auth"
              @click="openModal"
              name="Kursni o'zgartirish"
              type="submit"
              v-else
          >
          </BaseButton>
        </div>
      </Form>
    </div>
  </AppModal>
</template>
<script setup>
import "@/assets/style/form_modal.scss";
import {ref, defineExpose, watch} from "vue";
import {Field, Form} from "vee-validate";
import AppModal from "@/components/ui/app-modal.vue";
import BaseButton from "@/components/button/BaseButton.vue";
import {useCourse} from "@/composable/course/course";

const dialog = ref(false);
let forms = ref({
  name: "",
  cost: "",
});
// Open employees create and update modal
const openModal = (value) => {
  if (value && value.id) forms.value = {...value};
  dialog.value = true;
};
// Clear Forms Values
watch(dialog, (value) => {
  if (!value) {
    forms.value = {};
  }
});
// Import composable functions
const {createCourse, updateCourse, deleteCourse} = useCourse();
const send = async () => {
  if (!forms.value.id) {
    await createCourse({
      name: forms.value.name,
      cost: forms.value.cost,
    });
    dialog.value = false
  } else {
    await updateCourse(forms.value);
    dialog.value = false
  }
};

defineExpose({openModal});
</script>
