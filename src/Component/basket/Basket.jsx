import React, { lazy, Suspense } from 'react';
import './basket.css'
import { connect } from "react-redux";
import { deleteDog } from "../../actions/actionSetDeleteBasketDog";
import Loading from './../../Component/loading/Loading';
const BasketItems = lazy(() => import('./../basketItems/BasketItems'));

const Basket = (props) => {
    const {delDog} = props;
  return (
      <div className="wrapper">
          <div className="list-dog">Список собачек в корзине :</div>
          { props.basketDog.items.length > 0 ?  
              props.basketDog.items.map((dog, )=> {
                  return  <Suspense key={dog.price} fallback={<Loading />}>
                              <BasketItems key={dog.price} {...dog} deleteDog={delDog}/>
                          </Suspense>}) : <div className="basket-null" >Ваша корзина пуста :(</div>}
      </div>
      );
};

const mapStateToProps = ({ dogs, dog, basketDog }) => ({
  dogs: dogs.items,
  dog: dog, 
  basketDog: basketDog,
});

const mapDispatchToProps = dispatch => ({
  delDog: dog => dispatch( deleteDog (dog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
