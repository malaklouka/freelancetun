import {GET_OFFRE,LOAD_OFFRE,FAIL_OFFRE} from "../constantes/offre"
import axios from "axios"

  export const getoffres = () => async (dispatch) => {
    dispatch({ type: LOAD_OFFRE })
    try {
  
      const response = await axios.get("/aa/")
      dispatch({ type: GET_OFFRE, payload: response.data.offres})
      console.log(response.data.offres)
    } catch (error) {
      console.dir(error)
      dispatch({ type: FAIL_OFFRE, payload: error })
    }
  }

  export const getOFFREId=(id)=> async (dispatch)=> {
    dispatch({type:LOAD_OFFRE})
    try {
     
      const response= await axios.get(`/aa/${id}`)
      dispatch({type: GET_OFFRE, payload: response.data.oneOffre})
    } catch (error) {
      dispatch({type:FAIL_OFFRE, payload:error})
    }
  }

  







  