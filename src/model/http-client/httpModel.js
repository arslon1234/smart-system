import http from "@/plugins/http";
import HttpErrorHandler from "@/model/http-client/httpErrorHandler";

class HttpClientModel {
    //get
    get(parameters) {
        return new Promise((resolve, reject) => {
            const {url, params} = parameters;
            http.get(url, {params})
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    console.error('error', error)
                    reject(error)
                })
        })
    }

    //post
    post(parameters) {
        return new Promise((resolve, reject) => {
            let {url, params, status} = parameters;
            http.post(url, params)
                .then((response) => {
                    resolve(response.data);
                    HttpErrorHandler(response)
                })
                .catch((error) => {
                    reject(error.message);
                    console.log("reject error");
                });
        });
    }

    //put
    put(parameters) {
        return new Promise((resolve, reject) => {
            let {url, params, status} = parameters;

            http.put(url, params)
                .then((response) => {
                    status = response.status
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    //delete
    delete(parameters) {
        return new Promise((resolve, reject) => {
            const {url, status} = parameters;
            http.delete(url)
                .then((response) => {
                    status.value = response.status
                    resolve(response.data);
                })
                .catch((error) => {
                    console.info('------ rejecting ----');
                    reject(error);
                });
        });
    }
}

export const HttpClient = new HttpClientModel();
