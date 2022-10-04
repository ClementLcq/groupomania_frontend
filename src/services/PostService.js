import http from "./httpCommon";

const getAll = () => {
  return http.get("/posts");
};

const get = id => {
  return http.get(`/posts/${id}`);
};

const create = data => {
  return http.post("/posts", data);
};

const update = (id, data) => {
  return http.put(`/posts/${id}`, data);
};

const remove = id => {
  return http.delete(`/posts/${id}`);
};

const removeAll = () => {
  return http.delete(`/posts`);
};


const PostService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default PostService;