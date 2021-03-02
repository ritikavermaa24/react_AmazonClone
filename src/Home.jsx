import React from "react";
import home from "./Images/home.jpg";
import "./Home.css";
import Product from "./Product";
import productimg from "./Images/product2.png";

function Home() {
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={home} alt=" "/>
                <div className="home__row">
                    <Product 
                        id="1"
                        title="The lean Startup"
                        price={29.99}
                        images= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product 
                         id="2"   
                         title="Kenwood Kmix Stand Mixer for 
                                Baking, Styling Kitchen Mixer with
                                K-beater, Dough Hook and Whisk, 5 Litre
                                Glass Bowl"
                         price={239}
                         images= "https://images-na.ssl-images-amazon.com/images/I/41PsV-B+7vL._SY300_.jpg"
                         rating={4}
                    />
                    
                </div>
                <div className="home__row">
                    <Product 
                         id="3" 
                         title="Samsung Curved LED Gaming Monitor"
                         price={199.99}
                         images= "https://images-na.ssl-images-amazon.com/images/G/01/aplus/detail-page/samsung-S27D390H-2-l.jpg"
                         rating={3}
                    />
                    <Product 
                         id="4" 
                         title="Amazon Echo (3rd Generation)  |  Smart speaker"
                         price={98.99}
                         images= "https://th.bing.com/th/id/OIP.V9yskSKZXbLmFs52HoJOCgHaF3?pid=ImgDet&rs=1"

                         rating={5}
                    />
                    <Product 
                         id="5" 
                         title="New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - Silver (4th Generation"
                         price={599.99}
                         images= "https://th.bing.com/th/id/OIP.4rmoKRm1Ec8MB3u7F8V94AHaHa?pid=ImgDet&rs=1"

                         rating={4}
                    />
                    
                </div>
                <div className="home__row">
                
                    <Product 
                         id="6" 
                         title="Samsung Curved LED Gaming Monitor - Super Ultra Wide"
                         price={1094.99}
                         images= "https://th.bing.com/th/id/OIP.1i1N0JxTISIT7wpgvd3s5gHaFj?pid=ImgDet&rs=1"
                         
                         rating={4}
                    />
                </div>
            </div>

        </div>
    ); 
};

export default Home;