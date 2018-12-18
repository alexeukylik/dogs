import React, { Component } from 'react';
import Dog from '../dog/Dog';
import './app.css';
import { connect } from 'react-redux';
import { getDogsThunk } from '../../actions/actionServiceDogs';
import  Loading  from '../loading/Loading';
import { addBasketDog } from '../../actions/actionSetDeleteBasketDog';
import { Menu } from '../menu/Menu';

class App extends Component {
  constructor(props) {
    super(props)
    !this.props.isLoading && this.props.getAllDog();
  };

  handlerMapDog = (dogs, search, setBasket) => {
    const dog = param => param.map((dog, item) =><Dog key={item} {...dog} set={setBasket}/>);
    if(search && search.length > 0){
       return dog(search);
    } 
     if (search  && typeof search === 'object') {
      return <div className="nothing-dog">Нет такой собачки((</div>}
    return dog(dogs);
  };

  render() {
    const { dogs, isLoading, search, setBasket,} = this.props;
    return (
      <div className="container">
        <Menu/>
        <ul>
          { !isLoading ? <Loading /> : this.handlerMapDog(dogs, search, setBasket) }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = ({ dogs, search}) => ({
  dogs: dogs.items,
  isLoading: dogs.isLoading,
  search : search.newState,
});

const mapDispatchToProps = dispatch => ({
  getAllDog: () => dispatch(getDogsThunk()),
  setBasket: (dog) => dispatch(addBasketDog(dog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
