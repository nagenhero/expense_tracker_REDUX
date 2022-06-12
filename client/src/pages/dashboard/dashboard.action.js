import { deleteTransactions, getTransactions, postTransaction } from "../../helpers/axiosHelper";
import { setIsLoading, setResponse, setTransactions } from "./dashboard.slice";
import { toast } from "react-toastify";

export const fetchTransactionsAction = () => async (dispatch) => {
  dispatch(setIsLoading());

  // call api
  const data = await getTransactions();
  if (data.status === "success") {
    dispatch(setTransactions(data.result));
  }
};
export const postTransactionAction = form=>async dispatch=>{
   const { _id } = JSON.parse(window.sessionStorage.getItem("user"));

    if (!_id) {
      return alert("Please login first");
    }
  dispatch(setIsLoading());
    const result = await postTransaction({ ...form, userId: _id });

  toast[result.status](result.message);
    dispatch(setResponse(result));
    if (result.status === "success") {
      dispatch(fetchTransactionsAction ())
    }
}
export  const deleteTransactionAction=ids=> async dispatch=>{
 dispatch(setIsLoading());
  const result = await deleteTransactions(ids);
  console.log(result, "lsjdfldsjlsj");
  
  result.status === "success" &&
    dispatch(fetchTransactionsAction()) 
    toast[result.status](result.message);
   
    
}