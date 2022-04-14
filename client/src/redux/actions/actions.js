import {LOAD_USER,REGISTER_USER,LOGIN_USER, FAIL_USER, CURRENT_USER, LOGOUT_USER} from '../constantes/user'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
//registr user
export const registerUser=(user,navigate)=>async dispatch =>{
    dispatch({type:LOAD_USER})
    try {
    const result=await  axios.post('/user/register',user)
    console.log(user)
       dispatch({type:REGISTER_USER,payload:result.data})
       console.log(result.data)
       if (result.data){ navigate('/dashboard')}
    //   

       console.log()

       
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data})
    }
}
//login 

export const loginUser=(user,navigate)=>async dispatch =>{
    dispatch({type:LOAD_USER})
    try {
        
    const result=   await  axios.post('/user/signin',user)
       dispatch({type:LOGIN_USER,payload:result.data})
       if (result.data){ navigate('/dashboard')}

       
        //    navigate('/dashboard')
         } catch (error) {
        const {errors,msg}=error.response.data
        if(Array.isArray(errors)){errors.forEach(err=>toast.error(err.msg))}
        if (msg){toast.success(msg)}
        dispatch({type:FAIL_USER,payload:error.response.data})
    }
}
export const currentUser=()=> async dispatch=>{
    dispatch({type:LOAD_USER})
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
        let result= await axios.get('/user/current',options)
        dispatch({type:CURRENT_USER,payload:result.data.user})
        
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });

    }
   
} 
export const logout=()=>{
    return {
        type:LOGOUT_USER
    }
}


