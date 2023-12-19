<template>
  <section class="students">
    <!-- =====  Modals ===== -->
    <studentModal ref="student_create_edit"/>
    <studentDeleteModal ref="student_delete"/>
    <!-- ===== Student create ===== -->
    <div class="students__action">
      <div class="students__action-btn">
        <baseButton
            design="auth"
            @click="openCreateModal"
            name="Talaba qo'shish"
            type="submit"
        >
        </baseButton>

      </div>
      <input type="text" placeholder="Search" v-model="params.name__icontains" @change="getAllStudents">
    </div>
    <!-- ====== Table ===== -->
    <app-table :headers="headers" :body="store?.students.results">
      <template #body_groups="{ item }">
        <div v-if="item?.groups?.length > 0">
          <p v-for="(group, index) in item.groups" :key="index">
            {{ group.name }}
          </p>
        </div>
        <div v-else>
          <p>Guruhga qo'shilmagan</p>
        </div>
      </template>
      <template #body_added="{ item }">
        <span>{{ formatData(item.added) }}</span>
      </template>
      <template #body_user="{ item }">
        <p>{{ item?.user?.role }}</p>
        <p>{{ item?.user?.username }}</p>
      </template>
      <template #body_action="{ item }">
        <div class="table__actions">
          <span @click="() => openEditModal(item)">
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
          <span @click="() => openDeleteModal(item.id)">
            <i class="fa-solid fa-trash"></i>
          </span>
        </div>
      </template>
    </app-table>
    <v-pagination
        v-model="params.page"
        :pages="pageTotal"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="updateHandler"
    />
    <!--    {{ store.students }}-->
  </section>
</template>

<script setup>
import appTable from "@/components/ui/app-table.vue";
import studentModal from "@/views/user/ModalPages/students.vue";
import studentDeleteModal from "@/views/user/ModalPages/delete_modal.vue";
import baseButton from "@/components/button/BaseButton";
import moment from "moment";
import VPagination from "@hennge/vue3-pagination";

import {computed, onMounted, ref} from "vue";
//composable
import {useUser} from "@/composable/user/user.js";
//store
import {useStore} from "@/stores/user";

const {getAllStudents, params} = useUser();

const updateHandler = () => {
  getAllStudents();
  console.log(store.students);
};
const pageTotal = computed(() =>
    Math.ceil(store?.students?.total_objects / params.page_size)
);

const store = useStore();
const student_delete = ref();
const student_create_edit = ref();

// Create student
const openCreateModal = () => {
  student_create_edit.value.openModal();
};
// Edit student
const openEditModal = (item) => {
  student_create_edit.value.openModal(item);
};
// Delete student
const openDeleteModal = (id) => {
  student_delete.value.openModal(id, "Talabani o'chirish");
};
// Format added data
const formatData = (dateTime) => {
  return moment(dateTime).format("DD-MM-YYYY");
};
onMounted(async () => {
  await getAllStudents();
});

const headers = ref([
  {title: "ID", value: "id"},
  {title: "Ism", value: "name"},
  {title: "Guruh", value: "groups"},
  {title: "Tel nomer", value: "phone"},
  {title: "Davomat", value: "active"},
  {title: "Admin", value: "user"},
  {title: "Qachon kelgan", value: "added"},
  {title: "Actions", value: "action"},
]);
</script>

<style lang="scss" scoped>
.students {
  display: flex;
  flex-direction: column;

  .students__action {
    display: flex;

    .students__action-btn {
      width: 250px;
    }

  }

  .table__actions {
    display: flex;
    gap: 10px;
    cursor: pointer;
    justify-content: center;
    font-size: 18px;

    span {
      &:nth-child(1) {
        color: green;
      }

      &:nth-child(2) {
        color: crimson;
      }
    }
  }
}
</style>
