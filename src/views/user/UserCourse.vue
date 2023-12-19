<template>
  <section class="students">
    <!-- =====  Modals ===== -->
    <courseModal ref="course_create_edit"/>
    <courseDeleteModal ref="course_delete"/>
    <!-- ===== Course create ===== -->
    <div class="students__action">
      <div class="students__action-search">
        <div class="relative mx-4 lg:mx-0"><span class="absolute inset-y-0 left-0 flex items-center pl-3"><svg
            class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none"><path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"></path></svg></span>
          <!--              @keydown="searchCourse"-->
          <input
              v-model="search"
              class="w-32 pl-10 pr-4 py-2 text-indigo-600 border-gray-200 rounded-md sm:w-full" type="text"
              placeholder="Search">
        </div>
      </div>
      <div class="students__action-btn">
        <baseButton
            design="auth"
            @click="openCreateModal"
            name="Kurs qo'shish"
            type="submit"
        >
        </baseButton>
      </div>
    </div>
    <!-- ====== Table ===== -->
    <app-table :headers="headers" :body="store?.courses.results">
      <template #body_groups="{ item }">
        <span>{{ item.groups.length }}</span>
      </template>
      <template #body_action="{ item }">
        <div class="table__actions">
          <span @click="() => openEditModal(item)">
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
          <span @click="() => openDeleteModal(item.id)">
            <i class="fa-solid fa-trash"></i>
          </span>
          <router-link :to="{name: 'Group', params:{id: item.id}}" class="link">
            <i class="fa-solid fa-eye"></i>
          </router-link>
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
import courseModal from "@/views/user/ModalPages/courses.vue";
import courseDeleteModal from "@/views/user/ModalPages/delete_modal.vue";
import baseButton from "@/components/button/BaseButton";
import VPagination from "@hennge/vue3-pagination";

import {computed, onMounted, ref, watch} from "vue";
//composable
import {useCourse} from "@/composable/course/course";
//store
import {courseStore} from "@/stores/course";

const {getAllCourses, params} = useCourse();

const search = ref("")

const updateHandler = () => {
  getAllCourses();
};
const store = courseStore();

const pageTotal = computed(() =>
    Math.ceil(store?.courses?.total_objects / params.page_size)
);

watch(params?.search, (newValue, oldValue) => {
  try {
    console.log(newValue)
  } catch (error) {
    console.log(error)
  }
})

const course_delete = ref();
const course_create_edit = ref();

// Create course
const openCreateModal = () => {
  course_create_edit.value.openModal();
};
// Edit course
const openEditModal = (item) => {
  course_create_edit.value.openModal(item);
};
// Delete course
const openDeleteModal = (id) => {
  course_delete.value.openModal(id, "Kurs o'chirish");
};

// const searchCourse = async () => {
//   await getAllCourses()
//
// }


onMounted(async () => {
  await getAllCourses();
});

const headers = ref([
  {title: "Kurs nomi", value: "name"},
  {title: "Kurs narxi", value: "cost"},
  {title: "Nechta guruh borligi", value: "groups"},
  {title: "Actions", value: "action"},
]);
</script>

<style lang="scss" scoped>
.students {
  display: flex;
  flex-direction: column;

  .students__action {
    display: flex;
    justify-content: space-between;

    &-search {
      display: flex;
      gap: 10px;

      button {
        width: 200px;
      }

      input {
        width: 300px;
      }
    }

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

    .link {
      color: #1d2d5b;
    }
  }
}
</style>
