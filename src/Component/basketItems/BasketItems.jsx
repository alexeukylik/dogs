import React from 'react';
import './basketItems.css';
import { Link } from 'react-router-dom';


const BasketItems =(props)=> {
    const {deleteDog, price, image, title} = props;
    return (
        <div className="wrap">
            <div className="title">{title}</div>
            <div className="image-wrap"><img className="image" src={image} alt='dog'/></div>
            <div className="price">{price}</div>
            <div className="delete" onClick={()=>deleteDog(price)}>X</div>
            <div className="home" ><Link  to="/" ><button>вернуться назад</button></Link></div>
        </div>
    )
};

export default BasketItems;