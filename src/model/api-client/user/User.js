import {UserApiClient} from "@/model/api-client/user/UserApiClient";

const urls = {
    students: "api/students/",
    deleteStudents: "api/students/"
}

const userApiClient = new UserApiClient(urls)

export default userApiClient