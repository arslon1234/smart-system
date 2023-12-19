<template>
  <AppModal v-model="dialog">
    <div class="modal">
      <h3>{{title}}</h3>
      <div class="modal__actions">
        <baseButton
          design="cancel_modal"
          @click="dialog = false"
          name="bekor qilish"
          type="submit"
        >
        </baseButton>
        <baseButton
          design="delete_modal"
          @click="deleteUser"
          name="o'chirish"
          type="submit"
        >
        </baseButton>
      </div>
    </div>
  </AppModal>
</template>
<script setup>
import { ref, defineExpose, watch } from "vue";
import AppModal from "@/components/ui/app-modal.vue";
import BaseButton from "@/components/button/BaseButton.vue";
import { useUser } from "@/composable/user/user.js";
import { useCourse } from "@/composable/course/course";
const dialog = ref(false);
const ID = ref();
const title = ref("")

// Open Delete Modal
const openModal = (id,value) => {
  ID.value = id;
  title.value = value
  dialog.value = true;
};
// Delete student
const {deleteStudent} = useUser()
const {deleteCourse} = useCourse()
const deleteUser = async () => {
  if(title.value === "Talabani o'chirish"){
    await deleteStudent(ID.value);
  }else if(title.value === "Kurs o'chirish"){
    await deleteCourse(ID.value);
  }
  
};
// Clear ID value
watch(dialog, (value) => {
  if (!value) {
    ID.value = "";
  }
});
defineExpose({ openModal });
</script>

<style scoped lang="scss">
$red-color: crimson;
$blue-color: #57caeb;
.modal {
  width: 100%;
  .modal__actions {
    width: 100%;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
}
</style>
