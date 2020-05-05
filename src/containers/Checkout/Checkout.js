import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
const queryString = require('query-string');

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    };

    componentWillMount() {
        const query = queryString.parse(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param in query) {
            if (param === 'price'){
                price = query[param];
            } else {
            ingredients[param] = +query[param];
            }
        };

        this.setState({
            ingredients: ingredients,
            totalPrice: price
        });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutCantinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} 
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutCantinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                render={(props) => (
                    <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)} />
            </div>
        );
    }
}

export default Checkout;