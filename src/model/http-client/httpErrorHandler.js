import Notification from "@/plugins/Notification";
import axios from "axios";
import router from "vue-router"

function HttpErrorHandler(error) {
    console.log("errrorl", error)
    if (error === null) throw new Error('Aniqlanmagan xato!')

    else if (axios.isAxiosError(error)) {

        const {code, response} = error
        //network error
        if (code === "ERR_NETWORK") {
            Notification({text: "Ulanishda xatolik internetni tekshiring"}, {type: "warning"})
        } else if (code === "ERR_CANCELED") {
            Notification({text: "Ulanish bekor qilinmoqda..."}, {type: "danger"})
        }
        // else if (code === "ERR_BAD_REQUEST") {
        //     Notification({text: "Aniqlanmagan xatolik"}, {type: "danger"})
        // }

        // response error
        if (response) {
            const statusCode = response?.status;
            if (statusCode === 404) {
                Notification({text: "The requested resource does not exist or has been deleted"}, {type: "info"})
            } else if (statusCode === 401) {
                Notification({text: response?.data?.detail}, {type: "danger"})
                router.push("/login")
            } else if(statusCode===500) {
                Notification({text: "Serverdagi xatolik"}, {type: "danger"})
            }
        }
    }

    console.log("error message", error.code)
}

export default HttpErrorHandler;

