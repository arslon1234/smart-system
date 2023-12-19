import { mdiApplicationBracketsOutline, mdiCardAccountDetails, mdiHome } from "@mdi/js";

export const userMenu = [
    {
        to: "/user/dashboard",
        icon: mdiHome,
        label: "Dashboard",
        name: "User Dashboard",
        meta: ""
    },
    {
        to: '/user/students',
        icon: mdiApplicationBracketsOutline,
        label: "Talabalar",
        name: "User Students",
        meta: ""
    },
    {
        to: '/user/course',
        icon: mdiApplicationBracketsOutline,
        label: "Course",
        name: "User Course",
        meta: "course_group"
    },
    {
        to: '/user/employee',
        icon: mdiApplicationBracketsOutline,
        label: "Xodimlar",
        name: "employee",
        meta: ""
    },
    {
        to: '/user/room',
        icon: mdiApplicationBracketsOutline,
        label: "Xonalar",
        name: "room",
        meta: ""
    },
]
