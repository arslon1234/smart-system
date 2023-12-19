<template>
  <section>
    <div class="dashboard__item" v-for="(item,index) in dashboard_items" :key="index">
      <p>{{ item.title }}</p>
      <div class="dashboard__item-img">
        <img :src="item.img" alt="" />
      </div>
      <span>{{item.number}}</span>
    </div>
  </section>

</template>

<script setup>
import {useUser} from "@/composable/user/user";
import { ref } from "vue";
import students from "@/assets/img/svg/students.svg";
import rooms from "@/assets/img/svg/rooms.svg";
import courses from "@/assets/img/svg/courses.svg";
import staffs from "@/assets/img/svg/staffs.svg";
import debt from "@/assets/img/svg/debt.svg";
import finance from "@/assets/img/svg/finance.svg";
import statistics from "@/assets/img/svg/statistics.svg";
import payment_history from "@/assets/img/svg/payment_history.svg";
import {useStore} from "@/stores/user";

const store = useStore()

const {getData} = useUser()

const submit = async ()=>{
  await getData()
}

const dashboard_items = ref([
    {title: "Talabalar", img: students, number: 333},
    {title: "Dars xonalar", img: rooms, number: 8},
    {title: "Kurslar", img: courses, number: 12},
    {title: "Xodimlar", img: staffs, number: 15},
    {title: "Qarzdorlar", img: debt, number: 6},
    {title: "Moliya", img: finance, number: 14},
    {title: "Statistika", img: statistics, number: 23},
    {title: "To'lov tarixi", img: payment_history, number: 9},
])
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 71px;
  row-gap: 50px;
  margin: 0 auto;
  .dashboard__item {
    width: 282px;
    height: 160px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    position: relative;
    font-size: 20px;
    font-weight: 500;
    p {
      position: absolute;
      top: 30px;
      left: 30px;
      color: #1D2D5B;
    }
    .dashboard__item-img {
      position: absolute;
      width: 50px;
      height: 50px;
      top: 55px;
      right: 15px;
      background-color: #eff3f6;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    span {
        position: absolute;
        left: 30px;
        bottom: 30px;
    }
  }
}
</style>
