export const setToken = token => {
    localStorage.setItem("token", token);
  };
  
  export const removeToken = () => {
    localStorage.removeItem("token");
  };
  
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  export const setAuthHttpHeaderToAxios = (axiosInstance, token) => {
    axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
  };