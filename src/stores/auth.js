import {defineStore} from "pinia";

export const authStore = defineStore('auth', {
    state: () => {
        return {
            token: null,
            role: "",
            refresh: null
        }
    }
})