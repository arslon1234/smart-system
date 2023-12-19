import {defineStore} from "pinia";

export const groupStore = defineStore('group', {
    state: () => {
        return {
            groups: []
        }
    }
})