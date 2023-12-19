import {GroupApiClient} from "@/model/api-client/group/GroupApiClient";

const urls = {
    groups: "api/groups/"
}

const groupApiClient = new GroupApiClient(urls)
export default groupApiClient;