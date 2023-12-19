import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import {apiClient} from "@/model/api-client/ApiClient";
import {setRole, setToken} from "@/utils/TokenService";
import {authStore} from "@/stores/auth";
import Notification from '@/plugins/Notification';
export function useAuth() {
    const router = useRouter();

    const store = authStore();

    const isLoading = ref(false);

    //login
    const loginModel = reactive({
        password: "", username: ""
    })
    const login = async () => {
        try {
            isLoading.value = true
            const result = await apiClient.auth.login(loginModel);
            store.token = result?.access
            if (result?.message) {
                console.log('message yes')
            }
            if (result?.access && result?.role) {
                await router.push("/user/dashboard")
                setToken(result?.access)
                setRole(result?.role)
                Notification({ text: "Muvaffaqiyatli kirish !!!" },{type: 'success'})
            }
        } catch (e) {
            console.log("error", e)
        } finally {
            isLoading.value = false
        }


    }

    return {loginModel, login, isLoading}

}