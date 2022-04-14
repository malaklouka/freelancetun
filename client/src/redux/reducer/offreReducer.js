import {LOAD_OFFRE,GET_OFFRE,FAIL_OFFRE} from "../constantes/offre"
 
   const initialState={
   offres:[],
   errors:null,
   isLoading:false,
};
export const offreReducer=(state=initialState,{type,payload})=>{
           switch (type) {
               case LOAD_OFFRE:
                   return {
                       ...state,isLoading:true,errors:null
                   }
               case GET_OFFRE:
                   return{
                       ...state,isLoading:false,offres:payload,errors:null
                   }
                   case FAIL_OFFRE:
                       return{
                           ...state,isLoading:false,errors:payload
                       }
                       
                                
               default:
                   return state;
           }
}