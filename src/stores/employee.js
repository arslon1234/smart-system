import {defineStore} from "pinia";

export const employeeStore = defineStore('employees', {
        state: () => {
            return {
                employees:[],
                emp_type: []
            }
        },
        actions: {}
    }
)