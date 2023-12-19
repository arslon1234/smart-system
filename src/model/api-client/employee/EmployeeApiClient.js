import {HttpClient} from "@/model/http-client/httpModel";

export class EmployeeApiClient {

    constructor(urls) {
        this.urls = urls
    }

    //getAllEmployee
    getAllEmployees(params) {
        const requestParams = {
            url: this.urls.employees,
            params
    }
        return HttpClient.get(requestParams)
    }
    // getEmplooyeeType
    getEmployeeType(params) {
        const requestParams = {
            url: this.urls.employees_type,
            params
    }
        return HttpClient.get(requestParams)
    }

    // createEmployee
    createEmployee(params) {
        const requestParams = {
            url: this.urls.employees,
            params: params,
        }
        return HttpClient.post(requestParams)
    }
}