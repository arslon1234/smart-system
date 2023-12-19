<template>
  <AppModal v-model="dialog">
    <div class="modal">
      <h3 v-if="!forms.id">Xodim qo'shish</h3>
      <h3 v-else>Xodim o'zgartirish</h3>
      <Form @submit="send">
        <label for="name">Xodim ismi</label>
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

        <label for="active">Lavozim ni tanlang</label>
        <Field
          rules="required"
          :modelValue="forms.role"
          v-slot="{ errors }"
          name="Lavozim"
        >
          <select id="active" v-model="forms.role">
            <option disabled selected hidden value="">
              Lavozim ni tanlang
            </option>
            <option value="teacher">O'qituvchi</option>
            <option value="cleaner">Tozalovchi</option>
            <option value="admin">Adminstrator</option>
            <option value="quard">Qorovul</option>
          </select>
          <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
          </p>
        </Field>
        <label for="active" v-if="forms.role === 'teacher'">Kurs ni tanlang</label>
        <Field
          rules="required"
          :modelValue="forms.course"
          v-slot="{ errors }"
          name="Kurs"
          v-if="forms.role === 'teacher'"
        >
          <select id="active" v-model="forms.course">
            <option disabled selected hidden value="">
              Kurs ni tanlang
            </option>
            <option v-for="(item,index) in store?.courses?.results" :key="index" :value="item.id">
              {{ item.name }}
            </option>
          </select>
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
       
        <div class="btn">
          <BaseButton
            design="auth"
            @click="openModal"
            name="Xodim qo'shish"
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
import { ref, defineExpose, watch } from "vue";
import { Field, Form } from "vee-validate";
import AppModal from "@/components/ui/app-modal.vue";
import BaseButton from "@/components/button/BaseButton.vue";
import { useEmployee } from "@/composable/employee/employee";
import { courseStore } from "@/stores/course";
import moment from "moment";
const store = courseStore();
const dialog = ref(false);
const forms = ref({
  name: "",
  phone: "+998",
  role: "",
  course:""
});
// Open employees create and update modal
const openModal = (value) => {
  if (value && value.id) forms.value = { ...value };
  dialog.value = true;
};
// Clear Forms Values
watch(dialog, (value) => {
  if (!value) {
    forms.value.name = "";
    forms.value.phone = "+998";
    forms.value.role = "";
  }
});
// Import composible functions
const { createEmployee } = useEmployee();
  const send = async ()=> {
    let date = new Date()
    date = moment(date).format("YYYY-MM-DD")
    if(!forms.value.id){
      await createEmployee({
      name: forms.value.name,
      phone: forms.value.phone,
      role: 1,
      course: forms.value.course,
      added: date
    });
    }
  }

defineExpose({ openModal });
</script>
