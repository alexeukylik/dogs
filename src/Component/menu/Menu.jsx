import React, { Component } from 'react';
import Search from '../search/Search';
import { connect } from 'react-redux';
import { setSearch } from '../../actions/actionSearchDog';

export const getCost = (params) => {
    let cost = Number('');
    params.map((el)=> cost+=el.price);
    return cost;
}

class MenuList extends Component {
    
    handlerSearchDog = (e) => {
        this.valueInput = e.target.value
        this.props.setSearch(this.valueInput, this.props.dogs);
    };

    render() {
        const {basket, search:{InputVale}} = this.props
        return (
            <div>
                <Search handlerSearchDog={this.handlerSearchDog} basket={basket} defValue={InputVale} cost={this.props.cost}/>
            </div>
        )
    };
};

const mapStateToProps = ({ dogs, basketDog, search }) => {
    return {
        dogs: dogs.items,
        basket: basketDog.items,
        search: search,
        cost: getCost(basketDog.items),
    }
};

const mapDispatchToProps = (dispatch) => ({
    setSearch: (dogName, dogs) => dispatch(setSearch(dogName, dogs)),
});

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuList);
