<template>
  <section class="section">
    <!--    modals-->
    <courseModal ref="course_create_edit"/>
    <div class="courses__head">
      <div class="courses__head-btn">
        <base-button
            design="auth"
            name="Guruh yaratish"
            type="submit"
            @click="openCreateModal"
            class="py-[12px] px-[40px]"
        />
      </div>
    </div>
      <app-table :headers="headers" :body="store?.groups?.results">
        <template #body_day="{item}">
          <div v-if="item.day?.length" class="flex gap-2">
            <p v-for="(day,index) in item.day" :key="index">
              {{ day }}
            </p>
          </div>
          <div v-else>Kunlari endi qo'yiladi</div>
        </template>
        <!--        cost-->

        <template #body_course="{item}">
          {{ item?.course?.cost }}
        </template>
        <template #body_student="{item}">
          {{ item?.student?.length }}
        </template>
        <!--        room-->
        <template #body_room="{item}">
          {{ item?.room?.name }}
        </template>
        <!--        actions-->

        <template #body_action>
          <div class="table__actions">
          <span>
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
            <span>
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
import baseButton from "@/components/button/BaseButton";
import courseModal from "@/views/user/ModalPages/groups.vue"
import {useGroup} from "@/composable/group/group";
import {groupStore} from "@/stores/group";
import {computed, onMounted, ref} from "vue";
import AppTable from "@/components/ui/app-table";
import BaseButton from "@/components/button/BaseButton";
import VPagination from "@hennge/vue3-pagination";
//composable
const {getAllGroups, params} = useGroup()

//store
const store = groupStore()
const course_create_edit = ref()

const updateHandler = () => {
  getAllGroups();
};
const pageTotal = computed(() =>
  Math.ceil(store?.groups?.total_objects / params.page_size)
);

// url direction
let url = window.location.href.split('/')
console.log(url[5])
// Crud Modals
const openCreateModal = () => {
  course_create_edit.value.openModal()
}

const search = () => {
  getAllGroups()
}

//table headers
const headers = ref([
  {title: "Nomi", value: "name"},
  // {title: "Turi", value: "education"},
  {title: "Boshlangan sanasi", value: "start"},
  {title: "Tugash sanasi", value: "finish"},
  {title: "Kunlari", value: "day"},
  {title: "Narxi", value: "course"},
  {title: "Boshlanish vaqti", value: "start_lesson"},
  {title: "Tugash vaqti", value: "finish_lesson"},
  {title: "Studentlar soni", value: "student"},
  {title: "Xonasi", value: "room"},
  {title: "Actions", value: "action"}
])

onMounted(() => {
  getAllGroups(url[5])
})
</script>

<style lang="scss" scoped>
.section {
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

