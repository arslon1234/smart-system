import {HttpClient} from "@/model/http-client/httpModel";

export class AuthApiClient {
    constructor(urls) {
        this.urls = urls
    }

    //login
    login(params) {
        const requestParams = {
            url: this.urls.login,
            params
        }
        return HttpClient.post(requestParams)
    }
}