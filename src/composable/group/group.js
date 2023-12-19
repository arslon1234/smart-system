import {reactive} from "vue";
import {apiClient} from "@/model/api-client/ApiClient";
import {groupStore} from "@/stores/group";

export function useGroup() {
    const store = groupStore();
    const params = reactive({
        search: "",
        page: 1,
        page_size: 10
    })

    const getAllGroups = async (id) => {
        store.groups = await apiClient.group.getAllGroups(params,id)
        return store.groups
    }

    return {getAllGroups, params}
}