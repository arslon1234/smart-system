<template>
  <AppModal v-model="dialog">
    <div class="modal">
      <h3 v-if="!forms.id">Talaba qo'shish</h3>
      <h3 v-else>Talabani o'zgartirish</h3>
      <Form @submit="send">
        <label for="name">Talaba ismi</label>
        <Field
            rules="required"
            :modelValue="forms.name"
            v-slot="{ errors }"
            name="Talabaning ismi"
        >
          <input
              type="text"
              id="name"
              placeholder="Talabaning ismini kiriting"
              v-model="forms.name"
          />
          <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
          </p>
        </Field>

        <label for="phone">Telefon nomer</label>
        <Field
            rules="required"
            :modelValue="forms.phone"
            v-slot="{ errors }"
            name="Telefon nomer"
        >
          <input
              type="text"
              id="phone"
              v-mask="'+998#########'"
              masked="true"
              placeholder="(+998)-93-102-06-36"
              v-model="forms.phone"
          />
          <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
          </p>
        </Field>

        <label for="active">Status ni tanlang</label>
        <Field
            rules="required"
            :modelValue="forms.active"
            v-slot="{ errors }"
            name="Status"
        >
          <select id="active" v-model="forms.active">
            <option disabled selected hidden value="">
              Status ni tanlang
            </option>
            <option value="true">Yangi</option>
            <option value="false">Boshladi</option>
          </select>
          <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
          </p>
        </Field>
        <div class="btn">
          <BaseButton
              design="auth"
              @click="openModal"
              name="Talaba qo'shish"
              type="submit"
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
import {useUser} from "@/composable/user/user.js";

const dialog = ref(false);
let forms = ref({
  name: "",
  phone: "+998",
  active: "",
});
// Open Student create and update modal
const openModal = (value) => {
  if (value && value.id) forms.value = {...value}
  dialog.value = true;
};
// Clear Forms Values
watch(dialog, (value) => {
  if (!value) {
    forms.value.id = ""
    forms.value.name = ""
    forms.value.phone = "+998"
    forms.value.active = ""
  }
})
// Import composible functions
const {createStudent, updateStudent} = useUser();
const send = async () => {
  if (!forms.value.id) {
    await createStudent({
      name: forms.value.name,
      phone: forms.value.phone,
      active: true,
      user: {
        username: "+998950192469",
        role: "MANAGER"
      },
      add_to_course: [
        0
      ],
      add_to_group: [
        0
      ]
    });
  } else {
    await updateStudent(forms.value)
  }
}

defineExpose({openModal});
</script>
