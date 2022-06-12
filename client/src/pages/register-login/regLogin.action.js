import { postUser } from "../../helpers/axiosHelper";
import { setIsLoading, setResponse } from "./regLogin.slice";

export const registerAction = (form) => async (dispatch) => {
  // set the loader on
  dispatch(setIsLoading());

  // call axios
  const result = await postUser(form);
  console.log(result);
  // set the response
  dispatch(setResponse(result));
};
