import {reactive} from "vue";
import {apiClient} from "@/model/api-client/ApiClient";
import {courseStore} from "@/stores/course";

export function useCourse() {
    const store = courseStore();
    let params = reactive({
        search: "",
        page: 1,
        page_size: 10
    })
    // getAllCourses
    const getAllCourses = async () => {
        store.courses = await apiClient.course.getAllCourses(params)
        return store.courses
    }
    // createCourse
    const createCourse = async (params) => {
        await apiClient.course.createCourse(params)
        await getAllCourses()
    }
    // updateCourse
    const updateCourse = async (params) => {
        await apiClient.course.updateCourse(params)
        await getAllCourses()
    }
    //deleteCourse
    const deleteCourse = async (id) => {
        await apiClient.course.deleteCourse(id)

    }
    return {getAllCourses, createCourse, updateCourse, deleteCourse, params}
}