import React, { Component } from 'react';
import './detail.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionDog } from '../../actions/actionShowDog'
import './../dog/dog.css'

class DetailList extends Component {
    constructor(props) {
        super(props);
        this.props.dogItem({ 'dogItem': this.props.location.pathname, 'arrayDogs': this.props.dogs })
    };

    render() {
        const { image, price, title } = this.props.dog
        return (
            <div className="container-detail">
                <div className="image-detail">
                    <img src={image} alt="img" />
                </div>
                <div className="wrap-info">
                    <Link className="back-home" to="/">
                        <button className="btnNewBook">Back</button>
                    </Link>
                    <div className="price-detail">
                        {price}
                    </div>
                    <div className="title-detail">
                        {title}
                    </div >
                </div>
            </div>
        )
    }
};

const mapStateToProps = ({ dogs, search, match, dog }) => ({
    dogs: dogs.items,
    search: search,
    match: match,
    dog: dog
});

const mapDispatchToProps = dispatch => ({
    dogItem: (dogInfo) => dispatch(actionDog(dogInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailList);















