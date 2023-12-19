import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
const Notification = (text,type) => {
     return setTimeout(() => {
       createToast(text.text, {
              type: type.type,
              position: "top-right",
              showIcon: true,
              timeout: 3000,
            });
     }, );  
}
export default Notification

   