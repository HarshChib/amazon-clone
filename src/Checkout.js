import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import Mapper from './Mapper'
function Checkout() {
    return (
        <div className='checkout'>
           <div className="checkout__left">
                <img className='checkout__image'
                src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2019/PrimeDelivery/DEX_2019_Prime_LP_Header_Desktop_3000x600._CB1567810399_.jpg" 
                alt="checkout" />
                <div >
                   <h2 className="checkout__title">
                       Your Shopping Basket
                   </h2>
                   <Mapper/>
                </div>
           </div>
           <div className="checkout__right">
               <Subtotal></Subtotal>
           </div>
        </div>
    )
}

export default Checkout

