import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getoffres } from '../../redux/actions/offre'
import Card from './Card'
import './card.css'


//list bag

const OffreList = () => {
    const OffresList = useSelector(state => state.offreReducer.offres)
  const isLoading = useSelector(state => state.offreReducer.isLoading)




    
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getoffres())
    }, [dispatch])
    const navigate = useNavigate(); 

    return (
        
        <div>

      <div className="addbtn">
      <button onClick={()=>navigate("/dashboard")}className="backArrow">
    &#10140;</button>

        <div className='offr' style={{display:'flex' , justifyContent:"space-between" ,margin:30, flexWrap:"wrap"}}>
            {isLoading?<h1>loading...</h1>: OffresList && OffresList.map(e=><Card offer={e} key={e._id}/>)}
    
        </div>
        </div>
     
        </div>
        
    )
}

export default OffreList