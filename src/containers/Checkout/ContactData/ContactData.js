import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
            loading: false
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true,
        })
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            deliveryMethod: 'fast',
            consumer: {
                name: 'Nizar',
                constactNo: '0300-12345677',
                address: 'Karachi'
            }
        }
        axios.post('/orders.json', orders).then(response => {
            console.log(response);
            this.setState({ loading: false, purchase: false })
            this.props.history.push('/');
        }).catch(error => {
            console.log(error);
            this.setState({ loading: false, purchase: false })
        });
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name"></input>
                <input type="email" name="email" placeholder="Your Email"></input>
                <input type="text" name="street" placeholder="Your Street"></input>
                <input type="text" name="postalCode" placeholder="Your Postal Code"></input>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );

    };
}

export default ContactData;