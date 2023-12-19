<template>
  <section class="students">
    <!-- =====  Modals ===== -->
    <teacherModal ref="teacher_create_edit" />
    <teacherDeleteModal ref="teacher_delete" />
    <!-- ===== Employee create ===== -->
    <div class="students__action">
      <div class="students__action-btn">
        <baseButton
          design="auth"
          @click="openCreateModal"
          name="Xodim qo'shish"
          type="submit"
        >
        </baseButton>
      </div>
    </div>
    <!-- ====== Table ===== -->
    <app-table :headers="headers" :body="store?.employees">
      <template #body_role="{ item }">
        <span>{{ item.role === null ? "---" : item.role.role }}</span>
      </template>
      <template #body_added="{ item }">
        <span>{{ formatData(item.added) }}</span>
      </template>
      <template #body_course="{ item }">
        <span>{{ item.course === null ? "---" : item.course }}</span>
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
  </section>
</template>

<script setup>
import appTable from "@/components/ui/app-table.vue";
import teacherModal from "@/views/user/ModalPages/employees.vue";
import teacherDeleteModal from "@/views/user/ModalPages/delete_modal.vue";
import baseButton from "@/components/button/BaseButton";
import VPagination from "@hennge/vue3-pagination";
import { computed, onMounted, ref } from "vue";
//composable
import { useEmployee } from "@/composable/employee/employee";
import { useCourse } from "@/composable/course/course";
//store
import { employeeStore } from "@/stores/employee";
import moment from "moment";

const { getAllEmployees, getEmployeeType, params } = useEmployee();
const { getAllCourses } = useCourse();

const updateHandler = () => {
  getAllEmployees();
};
const store = employeeStore();

const pageTotal = computed(() =>
  Math.ceil(store?.employees?.total_objects / params.page_size)
);

const teacher_delete = ref();
const teacher_create_edit = ref();

// Create employee
const openCreateModal = () => {
  teacher_create_edit.value.openModal();
};
// Edit employee
const openEditModal = (item) => {
  teacher_create_edit.value.openModal(item);
};
// Delete employee
const openDeleteModal = (id) => {
  teacher_delete.value.openModal(id, "Xodim o'chirish");
};
// Format data
const formatData = (dateTime) => {
  return moment(dateTime).format("DD-MM-YYYY");
};
onMounted(() => {
  getAllEmployees();
  getAllCourses(), getEmployeeType();
});

const headers = ref([
  { title: "F.I.O", value: "name" },
  { title: "Telefon nomer", value: "phone" },
  { title: "Lavozim", value: "role" },
  { title: "Yo'nalish", value: "course" },
  { title: "Qo'shilgan sana", value: "added" },
  { title: "Actions", value: "action" },
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
