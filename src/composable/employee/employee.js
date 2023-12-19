import {reactive} from "vue";
import {apiClient} from "@/model/api-client/ApiClient";
import {employeeStore} from "@/stores/employee";

export function useEmployee() {
    const store = employeeStore();
    const params = reactive({
        // phone__icontains: "",
        // name__icontains: "",
        search: "",
        page: 1,
        page_size: 10
    })
    // GetAllEmployees
    const getAllEmployees = async () => {
        store.employees = await apiClient.employee.getAllEmployees(params)
        return store.employees
    }
    // GetEmployeeType
    const getEmployeeType = async () => {
        store.emp_type = await apiClient.employee.getEmployeeType(params)
        return store.emp_type
    }
    // CreateEmployee
    const createEmployee = async (params) => {
        await apiClient.employee.createEmployee(params)
    }
    return {getAllEmployees, createEmployee, getEmployeeType, params}
}