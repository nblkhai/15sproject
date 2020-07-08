import { API_URL } from "../../constants/API";
import Axios from "axios";
import userTypes from "../types/user";
import Cookie from "universal-cookie";

const cookieObj = new Cookie();
const {
  ON_LOGIN_SUCCESS,
  ON_LOGIN_FAIL,
  ON_LOGOUT_SUCCESS
} = userTypes;

export const cookieChecker = () => {
  return {
    type: "COOKIE_CHECK",
  };
};

export const loginHandler = (userData) => {
  return (dispatch) => {
    const { username, password } = userData;
    Axios.get(`${API_URL}/user/login`, {
      params: {
        username,
        password,
      },
    })
      .then((res) => {
        dispatch({
          type: ON_LOGIN_SUCCESS,
          payload: res.data,
        });
        Axios.get(`${API_URL}/carts`, {
          params: {
            userId: res.data.id,
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
    Axios.get(`${API_URL}/user`, {
      params: {
        id: userData.id,
      },
    })
      .then((res) => {
        if (res.data.length > 0) {
          dispatch({
            type: ON_LOGIN_SUCCESS,
            payload: res.data[0],
          });
          Axios.get(`${API_URL}/carts`, {
            params: {
              userId: res.data[0].id,
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
    Axios.get(`${API_URL}/user/username`, {
      params: {
        username: userData.userName,
      },
    })
      .then((res) => {
        if (res.data.length > 0) {
          dispatch({
            type: "ON_REGISTER_FAIL",
            payload: "Username already used",
          });
          // alert("ga masuk");
        } else {
          Axios.post(`${API_URL}/user`, {
            firstname: userData.firstName,
            lastname: userData.lastName,
            username: userData.userName,
            password: userData.password,
            email: userData.emailAddress,
            phonenumber: userData.phoneNumber
          })
            .then((res) => {
              dispatch({
                type: ON_LOGIN_SUCCESS,
                payload: res.data,
              });

              // Axios.get(`${API_URL}/carts`, {
              //   params: {
              //     userId: res.data.id,
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
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


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
