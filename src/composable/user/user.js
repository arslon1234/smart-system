import {apiClient} from "@/model/api-client/ApiClient";
import {useStore} from "@/stores/user";
import {reactive, ref} from "vue";
import Notification from '@/plugins/Notification';

export function useUser() {
    const store = useStore()
    let status = ref()
    //getAllStudents
    const params = reactive({
        phone__icontains: "",
        name__icontains: "",
        search: "",
        page: 1,
        page_size: 10
    })
    const getAllStudents = async () => {
        return store.students = await apiClient.user.getAllStudents(params)
    }

    // createStudent
    const createStudent = async (params) => {
        await apiClient.user.createStudent(params, status)
        if (status.value === 200) {
            setTimeout(() => {
                location.reload()
            }, 3000)
            Notification({text: "Talaba qo'shildi !!!"}, {type: 'success'})
        } else {
            Notification({text: "Xatolik mavjud !!!"}, {type: 'danger'})
        }
    }

    // updateStudent
    const updateStudent = async (params) => {
        await apiClient.user.updateStudent(params, status)
        //  if(status.value === 200){
        //     setTimeout(()=>{
        //         location.reload()
        //     },3000)
        //     Notification({ text: "Talaba o'zgartildi !!!" },{type: 'warning'})
        // }else{
        //     Notification({ text: "Xatolik mavjud !!!" },{type: 'danger'})
        // }
    }

    //deleteStudent
    const deleteStudent = async (id) => {
        await apiClient.user.deleteStudent(id, status)
        if (status.value === 204) {
            setTimeout(() => {
                location.reload()
            }, 3000)
            Notification({text: "Talaba o'chirildi !!!"}, {type: 'success'})
        } else {
            Notification({text: "Xatolik mavjud !!!"}, {type: 'danger'})
        }

    }

    return {
        params,
        getAllStudents, deleteStudent, createStudent, updateStudent
    }
}