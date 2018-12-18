import React from 'react';
import './notFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
    <div className="wrap-not-Found">
        <Link className="house" to="/" ><button>Вернутся назад</button></Link>
        <div className="not-Found">нет такой страницы!</div>
    </div>
    )
};

export default NotFound;