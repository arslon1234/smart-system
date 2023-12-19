import {EmployeeApiClient} from "@/model/api-client/employee/EmployeeApiClient";

const urls = {
    employees: "api/employee/",
    employees_type: "api/emptype/"
}

const employeeApiClient = new EmployeeApiClient(urls)
export default employeeApiClient;