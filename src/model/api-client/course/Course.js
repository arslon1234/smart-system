import {CourseApiClient} from "@/model/api-client/course/CourseApiClient";

const urls = {
    courses: "api/course/"
}

const courseApiClient = new CourseApiClient(urls)
export default courseApiClient;