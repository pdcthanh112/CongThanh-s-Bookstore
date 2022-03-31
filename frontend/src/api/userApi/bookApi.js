import axiosClient from "../axiosClient";

const bookApi = {
  getAll: (params) => {
    return axiosClient
        .get("/user/book", { params }) //có thể truyền header được luôn....  params, header: {key:value....}, sửa được baseUrl luôn
        .then(response => response.data)
        .catch(error => console.log("Error at Book API: ", error))
    
  },

  getById: (id) => {
    return axiosClient
      .get(`/user/book/${id}`)
      .then(response => response.data[0])
      .catch(error => console.log("Error at Book API: ", error));
  },
};

export default bookApi;
