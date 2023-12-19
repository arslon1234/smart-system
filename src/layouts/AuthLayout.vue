<template>
  <div class="auth">
    <div class="auth__right">
      <img :src="auth" alt="NO IMG">
    </div>
    <router-view/>
  </div>
</template>

<script setup>
import auth from "@/assets/img/svg/auth.svg"
</script>
