const authUtil = {
  getToken: function () {
    return localStorage.getItem("token");
  },
  setToken: function (token) {
    localStorage.setItem("token", token);
  },
  removeToken: function () {
    return localStorage.removeItem("token");
  },
};

export default authUtil;
