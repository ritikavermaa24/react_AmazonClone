import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";


function Cheackout() {

    const [{basket, user},dispatch]= useStateValue();
    return (
    <div className="checkout">

        <div className="checkout__left">
            <img className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/CEPC/storage/2020/May/Desktop_Header_ClearanceStore.jpg"
            alt=""
            />

            <div>
                <h3>Hello,{user?.email}</h3>
                <h2 className="checkout__title">
                    Your shopping Basket </h2>

                    {basket.map(item => (
                        <CheckoutProduct
                           id={item.id}
                           title={item.title}
                           images={item.images}
                           price={item.price}
                           rating={item.rating}
                        />
                    ))}

                    {/*CheckoutProduct*/}
                    {/*CheckoutProduct*/}
                    {/*CheckoutProduct*/}
                    {/*CheckoutProduct*/}
                    
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>
        
    </div>
    );
    
}

export default Cheackout;