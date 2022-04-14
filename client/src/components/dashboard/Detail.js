import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  getOFFREId } from "../../redux/actions/offre";
import "./detail.css"
import { AiOutlineHome } from 'react-icons/ai'




const Detail = () => {
    const dispatch = useDispatch()
    let {id}=useParams()
  
    


   const offer=useSelector((state)=>state.offreReducer.offres)

useEffect(() => {
dispatch(getOFFREId(id))    
}, [dispatch, id])

const navigate = useNavigate(); 

   
  return (

<div className="communityCard">
  <button onClick={()=>navigate("/card")} className="backArrow">
    &#10140;</button>

	<div className="communityCard__header">
		<h2 className="title">About the offre</h2>
		<span className="button" aria-label="settings">
			<svg width="28" height="6" viewBox="0 0 28 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.8" cy="3.00001" r="2.8" fill="#1E1411"/>
<circle cx="14" cy="3.00001" r="2.8" fill="#1E1411"/>
<circle cx="25.2" cy="3.00001" r="2.8" fill="#1E1411"/>
</svg>
		</span>
	</div>
	<div className="communityCard__body">
		<div style={{marginRight:70}}>
			<h3 className="">{offer.offrename}</h3>
			<p className="">
			{offer.description}
			</p>
		</div>
		<div className="stats">
			<div className="item">
				<span style={{color:"green"}}>Price : {offer.price} dt/hour </span>
			</div>
			<div className="item" style={{color:"black"}}>
				<span style={{color:"purple"}}><AiOutlineHome/> {offer.adresse}</span>
        <span >expired at : {offer.expirationDate}</span>
        <span>work from : {offer.from}</span>
			</div>
		</div>
		<div className="actions">
			<button className="button button--outline" style={{backgroundColor:"blue"}} onClick={()=>navigate("/pay")}>Pay</button>
			<button className="button button--primary">contacter</button>
		</div>
    <div className="rating">
	<span className="rating__stars" ></span>
	<div className="rating__number">
		<span className="rating__score">4.5</span>
	</div>
</div>	</div>
</div>

 
  )}
     
    

  export default Detail
