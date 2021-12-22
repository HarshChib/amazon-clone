import React from 'react'
import './Home.css'
import Product from './Product'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://m.media-amazon.com/images/I/61PiLohzyTL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51n+vaFfeXL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61Y6exteCHL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61g36HCnbrL._SX3000_.jpg" }
    
  ];
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                 <div className='home__image'>
                    <SimpleImageSlider
                        width={1500}
                        height={504}
                        images={images}
                        autoPlay={true}
                    />
                 </div>

                <div className="home__row">
                    <Product
                    id="12321341"
                    title='iQOO Z5 5G (Arctic Dawn, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge'
                    price={23990.00}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71mCphsCGZL._SL1200_.jpg'
                    count={1}/>
                    
                    <Product
                    id="123295941"
                    title='
                    iQOO Z5 5G (Mystic Space, 12GB RAM, 256GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge'
                    price={26990.00}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71wevQRS5qL._SL1196_.jpg'
                    count={1}/>
                    
                </div>

                <div className="home__row">
                    <Product
                    id="12321341515"
                    title='New Apple AirPods Pro with MagSafe Charging Case'
                    price={24900.00}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg'
                    count={1}/>
                    
                    <Product
                    id="123213417145"
                    title='New Apple AirPods Max - Space Grey'
                    price={54900.00}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81S533RgkwL._SL1500_.jpg'
                    count={1}/>

                    <Product
                    id="123213415415615"
                    title='Apple iPhone 13 Mini (128GB) - Blue'
                    price={69900.00}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71X6mnUDSzL._SL1500_.jpg'
                    count={1}/>
                </div>

                <div className="home__row">
                    <Product
                    id="1232134148498"
                    title='OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)'
                    price={24900.00}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71vZypjNkPS._SL1500_.jpg'
                    count={1}/>
                </div>
                <div className='home__last'>
                    <p>
                        It is just a Clone !<br></br>
                        Made By:Harsh Dev Singh Chib
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
