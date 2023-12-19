import { defineRule, configure } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    install(app) {
        app.component("Form", Form)
        app.component('Field', Field);
        app.component('ErrorMessage', ErrorMessage);

        defineRule("required", required);
        defineRule("email", email)
        defineRule("min", min)
        defineRule("max", max);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required`,
                    min: `The field ${ctx.field} is too short`,
                    max: `The field ${ctx.field} is too long`,
                    alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces`,
                    email: `The field ${ctx.field} mustt be a valid email`,
                    password_mismatch: "The password don't match",
                };

                return messages[(ctx.rule)]
                    ? messages[(ctx.rule)]
                    : `${ctx.field} kiritilmadi`;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });
    }



}
