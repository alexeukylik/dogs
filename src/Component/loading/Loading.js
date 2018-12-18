import React from 'react';
import './loading.css'

const Loading = () => {
    return (
        <div className="wrap_loading">
            <div className="title" >Подождите идет загрузка</div>
            <div className="wBall" id="wBall_1">
                <div className="wInnerBall" />
            </div>
            <div className="wBall" id="wBall_2">
                <div className="wInnerBall" />
            </div>
            <div className="wBall" id="wBall_3">
                <div className="wInnerBall" />
            </div>
            <div className="wBall" id="wBall_4">
                <div className="wInnerBall" />
            </div>
            <div className="wBall" id="wBall_5">
                <div className="wInnerBall" />
            </div>
        </div>)
};

export default Loading;