import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({id,title,price,rating,image,count}) {
    const star='⭐'
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item into the data layer
            dispatch({
            type: "ADD_TO_BASKET",
            item: {
            count:count,
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
           
          },
        });
      };
    return (
        <div className='product zoom'>
            <div className='product__info'>
                <p>
                {title}
                </p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                <p>{star.repeat(rating)}</p>
                </div>
            </div>
            <img 
            src={image}
            alt='iqoo'></img>
            <button onClick={addToBasket}>
                Add to basket
            </button>
        </div>
    )
}

export default Product
