<template>
  <AppModal v-model="dialog">
    <div class="modal">
      <h3>Guruh qo'shish</h3>
      <Form>
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
        <BaseButton
            design="auth"
            @click="openModal"
            name="Talaba qo'shish"
            type="submit"
        >
        </BaseButton>
      </Form>
    </div>
  </AppModal>
</template>
<script setup>
import {Field, Form} from "vee-validate";
import "@/assets/style/form_modal.scss";
import AppModal from "@/components/ui/app-modal";
import {reactive, ref, watch} from "vue";

const dialog = ref(false);
let forms = reactive({
  name: "",
  phone: "+998",
  active: "",
  education: "",
  day: "",
  start: ""
})

const openModal = (value) => {
  if (value && value.id) forms = {...value}
  dialog.value = true
}

watch(dialog, (value) => {
  if (!value) {
    forms.day = ""
    forms.name = ""
    //  ....
  }
})

defineExpose({openModal})
</script>