import React from 'react';
import './dog.css';
import { Link } from 'react-router-dom';

const Dog = (props) => {
    const {title, image, price, set,} = props;
    return (
        <div className="container-dog">
            <Link to={`/detail/${price}`}><img src={image} alt="img" className="container-img"/></Link>
            <div className="container-text">
                <div className="container-name">
                    <div>{title}</div>
                </div>
            </div>
            <Link className="link-current-dog" to={`/detail/${price}`}><button className="btn" >Подробнее</button></Link>

            <div className="basket">
                <button data-item={price} onClick={(e)=>set({title, image, price, e})}>добавить в корзину</button>
            </div>
                <div className="container-cost">
                    <div>Цена:{price} Руб. </div>
                </div>
        </div>
    )
};

export default Dog;