// import {API_URL} from "../../API"
import Axios from "axios";
import userTypes from "../types/user";
import Cookie from "universal-cookie";
import swal from "sweetalert"
const API_URL = `http://localhost:8080`
const cookieObj = new Cookie();
const {
  ON_LOGIN_SUCCESS,
  ON_LOGIN_FAIL,
  ON_LOGOUT_SUCCESS,
  ON_REGISTER_SUCCESS,
  ON_REGISTER_FAIL
} = userTypes;

export const cookieChecker = () => {
  return {
    type: "COOKIE_CHECK",
  };
};

export const changePasswordHandler = (passwordData) => {
  const { id, newPassword } = passwordData;
  return (dispatch) => {
    Axios.put(`${API_URL}/user/changePassword/${id}`, {
      password: newPassword,
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: ON_LOGIN_SUCCESS,
          payload: res.data,
        });
        swal("Berhasil", "Password Has Been Changed", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("Gagal", "Cannot Change Password", "error");
      });
  };
};

export const loginHandler = (userData) => {
  return (dispatch) => {
    const { userName, password } = userData;
    Axios.get(`${API_URL}/user/login`, {
      params: {
        userName,
        password,
      },
    })
      .then((res) => {
        dispatch({
          type: ON_LOGIN_SUCCESS,
          payload: res.data,
        });

      })
      .catch((err) => {
        dispatch({
          type: ON_LOGIN_FAIL,
          payload: "Username atau password salah",
        });
      });
  };
};


export const userKeepLogin = (userData) => {
  return (dispatch) => {
    Axios.get(`${API_URL}/user/id`, {
      params: {
        id: userData.id,
      },
    })
      .then((res) => {
        if (Object.keys(res.data).length > 0) {
          dispatch({
            type: ON_LOGIN_SUCCESS,
            payload: res.data,
          });
          // Axios.get(`${API_URL}/carts`, {
          //   params: {
          //     userId: res.data[0].id,
          //   },
          // })
          //   .then((res) => {
          //     dispatch({
          //       type: "FILL_CART",
          //       payload: res.data.length,
          //     });
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
        } else {
          dispatch({
            type: ON_LOGIN_FAIL,
            payload: "Username atau Password Salah!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logoutHandler = () => {
  cookieObj.remove("authData", { path: "/" });
  return {
    type: ON_LOGOUT_SUCCESS,
  };
};

export const registerHandler = (userData) => {
  return (dispatch) => {
      Axios.post(`${API_URL}/user`, {
          ...userData, role: "user"
      })
          .then((res) => {
              dispatch({
                  type: ON_REGISTER_SUCCESS,
                  payload: res.data
              })
              console.log(res)
          })
          .catch((err) => {
              dispatch({
                  type: ON_REGISTER_FAIL,
                  payload: "Error"
              })
              
          })
  }
}


export const fillCart = (userId) => {
  return (dispatch) => {
    Axios.get(`${API_URL}/carts`, {
      params: {
        userId,
      },
    })
      .then((res) => {
        dispatch({
          type: "FILL_CART",
          payload: res.data.length,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const searchProductHandler = (searchInput) => {
  return {
    type: "SEARCH_PRODUCT",
    payload: searchInput,
  };
};
