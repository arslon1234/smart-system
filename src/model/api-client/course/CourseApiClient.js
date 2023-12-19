import {HttpClient} from "@/model/http-client/httpModel";

export class CourseApiClient {

    constructor(urls) {
        this.urls = urls
    }

    //getAllTeachers
    getAllCourses(params) {
        const requestParams = {
            url: this.urls.courses,
            params
        }

        return HttpClient.get(requestParams)
    }
    //createCourse
    createCourse(params) {
        const requestParams = {
            url: this.urls.courses,
            params: params,
        }
        return HttpClient.post(requestParams)
    }
    //updateCourse
    updateCourse(params) {
        const requestParams = {
            url: this.urls.courses + params.id + "/",
            params: {
                name: params.name,
                cost: params.cost,
            },
        }
        return HttpClient.put(requestParams)
    }
    //deleteStudents
    deleteCourse(id) {
        const requestParams = {
            url: this.urls.courses + id + "/",
        }
        return HttpClient.delete(requestParams)
    }
}