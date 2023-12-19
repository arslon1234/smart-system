import {HttpClient} from "@/model/http-client/httpModel";

export class GroupApiClient {

    constructor(urls) {
        this.urls = urls
    }

    //getAllGroups
    getAllGroups(params,id) {
        const requestParams = {
            url: this.urls.groups + id,
            params
        }

        return HttpClient.get(requestParams)
    }
}