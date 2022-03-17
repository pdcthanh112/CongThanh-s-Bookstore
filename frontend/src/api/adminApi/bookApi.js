import axiosClient from "../axiosClient";

const bookApi = {
    getAll: (params) => {
        axiosClient.get('/user/book', { params })          //có thể truyền header được luôn....  params, header: {key:value....}, sửa được baseUrl luôn
    },

    getById: (id) => {
        axiosClient.get(`/user/book/${id}`)
    },
}

export default bookApi;