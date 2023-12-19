
import {AuthApiClient} from "@/model/api-client/auth/AuthApiClient";

const urls = {
    login:"auth/token/",
    refresh:"auth/token/refresh/",
    verify:"auth/verify/"
}

const authApiClient = new AuthApiClient(urls);
export default authApiClient