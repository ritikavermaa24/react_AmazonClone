
import React from 'react';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,images, title,price,rating}) {

    const [{basket},dispatch] = useStateValue();

    const RemoveFromBasket =() => {
        //remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })

    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={images}
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}
                </p>
                <p className="checkoutProduct__Price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=> (
                        <p>⭐</p>
                    ))
                    }

                </div>

                <button onClick={RemoveFromBasket}> Remove From Basket</button>

            </div>


            
        </div>
    )
}

export default CheckoutProduct;
