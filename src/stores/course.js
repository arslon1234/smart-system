import {defineStore} from "pinia";

export const courseStore = defineStore('courses', {
        state: () => {
            return {
                courses:[]
            }
        },
        actions: {}
    }
)