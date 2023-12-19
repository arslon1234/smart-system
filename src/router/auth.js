export default {
  path: "/",
  name: "auth",
  redirect:"/login",
  component: () => {
    return import("@/layouts/AuthLayout");
  },
  children: [
    {
      path: "login",
      name: "login",
      component: () => {
        return import("@/views/auth/AuthIndex");
      },
    },
  ],
};
