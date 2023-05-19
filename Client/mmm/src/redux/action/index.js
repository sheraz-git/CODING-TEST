import axios from "axios";
import { SIGNUP, LOGIN,GET_USERS,DELETE_USERS,UPDATE_USERS} from "./type";
const Cookies=require("js-cookie");


//////////UserSignup////////////
export const usersignup =( firstName, lastName, email, password  ) =>async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/api/Usercreate", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
    console.log(response.data);
    dispatch({ type: SIGNUP, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
// //////////Userlogin////////////
export const userlogin =(email, password ) =>async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/api/loginuser", {
      email: email,
      password: password
    });
    console.log(response.data);
    const token=response.data.token;
    const expires = new Date();
    expires.setTime(expires.getTime() + 10 * 60 * 1000);
    Cookies.set('token', token, { expires, path: '/' });
    dispatch({ type: LOGIN, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

////gettask/////
export const gettask = (token) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/api/getUser", {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: GET_USERS, payload: response.data.findUser });
  } catch (error) {
    console.log(error);
  }
};


 ////////////////// DELETE USER////////////////////
 export const deleteTask = (id, token) => async (dispatch) => {
  try {
    const response = await axios
      .delete(`http://localhost:3000/api/deleteUser/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        dispatch({ type: DELETE_USERS, payload: id });
      });
  } catch (error) {
    console.log(error);
  }
};

////////////////// UPDATE USER////////////////////


export const updateUser = (id, updatedData, token) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/updateUser/${id}`,
      updatedData,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: UPDATE_USERS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};