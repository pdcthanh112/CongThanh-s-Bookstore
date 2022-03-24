import axiosClient from "../axiosClient";

const bookApi = {
  getAll: (params) => {
    return (
      axiosClient
        .get("/user/book", { params }) //có thể truyền header được luôn....  params, header: {key:value....}, sửa được baseUrl luôn
        //.then((response) => console.log(response.data))
        .catch((error) => console.log("Error at Book API: ", error))
    );
  },

  getById: (id) => {
    axiosClient.get(`/user/book/${id}`);
  },
};

export default bookApi;
