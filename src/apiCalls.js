import axios from "axios";
const api = axios.create({
  baseURL : `http://localhost:8800/api`
});
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    //console.log("calling" ,userCredential )
    const res = await api.post("/auth/login", userCredential)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};