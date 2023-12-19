<template>
    <div class="flex h-screen bg-gray-200 font-roboto">
        <TheSidebar />
        <div class="flex-1 flex flex-col overflow-hidden">
            <TheHeader />
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#F6F8FA]">
                <div class="container mx-auto px-3 py-8">
                    <slot />
                </div>
            </main>
            <!-- <TheFooter /> -->
        </div>
    </div>
</template>

<script setup>
import TheSidebar from '@/components/header/TheSidebar.vue'
import TheHeader from '@/components/header/TheHeader.vue'

</script>

<style lang="scss" scoped></style>