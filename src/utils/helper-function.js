import moment from "moment"

export const dayFormatter = (day) => {
    return moment().format(day)
}