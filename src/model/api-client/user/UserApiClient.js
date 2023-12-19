import {HttpClient} from "@/model/http-client/httpModel";

export class UserApiClient {
    constructor(urls) {
        this.urls = urls
    }

    //getAllStudents
    getAllStudents(params) {
        const requestParams = {
            url: this.urls.students,
            params
        }
        return HttpClient.get(requestParams)
    }
    //createStudent
    createStudent(params,status) {
        const requestParams = {
            url: this.urls.students,
            params: params,
            status: status
        }
        return HttpClient.post(requestParams)
    }
    // updateStudent
    updateStudent(params,status) {
        const requestParams = {
            url: this.urls.students + params.id + "/",
            params: {
                name: params.name,
                phone: params.phone,
                active: true
            },
            status:status
        }
        return HttpClient.put(requestParams)
    }
    //deleteStudents
    deleteStudent(id,status) {
        console.log(status, 'status')
        const requestParams = {
            url: this.urls.deleteStudents + id + "/",
            status: status
        }
        return HttpClient.delete(requestParams)
    }
}