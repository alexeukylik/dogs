import React from 'react';
import './search.css';
import { Link } from 'react-router-dom';

const Search = (props) => {
    const {basket, handlerSearchDog, defValue, cost} = props
    return (
        <section className="menu">
            <div className="magazin">
                Магазин собак
            </div>
            <div className="input">
                <div>
                    <input type="text" defaultValue={defValue} placeholder="search" onChange={handlerSearchDog} />
                </div>
            </div>
            <section className="position-right">
                <div className="cost">
                    Всего: &nbsp;&nbsp; {cost? cost : '0'} руб.
                </div>
                <Link to={'basket'}><div className="cart">Корзина {basket.length === 0 ? <b>0</b> :<b>{basket.length}</b>}</div></Link>
            </section>
        </section>
    )
};

export default Search;
