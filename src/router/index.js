import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth";
import user from "./user";
import { getToken } from "@/utils/TokenService";
import Cookies from "js-cookie";
const routes = [auth, user];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('TOKEN');
//   console.log(token);
//   const name = to.name = "auth";
//   if (!token && !name){
//     return next({ name: "auth" });
//   } else {
//     if (token && name) {
//       return next({ name: "user" });
//     } else {
//       next();
//     }
//   }
// });

export default router;
