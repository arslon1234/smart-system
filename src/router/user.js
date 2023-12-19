export default {
  path: "/",
  name: "user",
  component: () => {
    return import("@/views/user/UserIndex");
  },
  children: [
    {
      path: "user/dashboard",
      name: "Dashboard",
      component: () => {
        return import("@/views/user/UserDashboard");
      },
    },
    {
      name: "Course",
      path: "user/course",
      component: () => {
        return import("@/views/user/UserCourse.vue");
      },
    },
    {
      name: "Group",
      path: "user/group/:id",
      meta:{
        child: 'course_group',
      },
      component: () => {
        return import("@/views/user/UserGroup.vue");
      },
    },
    {
      name: "Talabalar",
      path: "user/students",
      component: () => {
        return import("@/views/user/UserStudents.vue");
      },
    },
    {
      name: "Xodimlar",
      path: "user/employee",
      component: () => {
        return import("@/views/user/UserEmployees.vue");
      },
    },
    {
      name: "Xonalar",
      path: "user/room",
      component: () => {
        return import("@/views/user/UserRooms.vue");
      },
    },
  ],
};
