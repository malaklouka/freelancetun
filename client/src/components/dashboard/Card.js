import React from 'react'
import { useNavigate } from 'react-router-dom';
import Flippy, { FrontSide } from 'react-flippy'

import './card.css'

const Card = ({offer}) => {
    const navigate = useNavigate(); 

  return (
    <Flippy  flipOnClick={true} flipOnHover={false} flipDirection="vertical" className='username'  >
    <FrontSide >
            <div className="contain">
    <div className="imag">
  
                        
    
    <img src={offer.image} className="img-responsive"  alt="offer"width="295" height="200" style={{marginLeft:-15,marginTop:-45}} />
                 
                 
    </div>
    <h3 className="nameoffer" style={{fontSize:15,color:"purple"}}> {offer.offrename}</h3>
    <span style={{color:"green",marginBottom:10,marginLeft:152}}> {offer.price} dt /heure</span>
 <button onClick={()=>navigate(`/detail/${offer._id}`)} style={{marginTop:50, marginLeft:25}}> More Details</button>
    
    
            </div>
    
            </FrontSide>
        
        </Flippy>

 
  )
}

export default Card