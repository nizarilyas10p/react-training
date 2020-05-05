import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for (let ingredient in props.ingredients) {
        ingredients.push({
            name: ingredient,
            amount: props.ingredients[ingredient]

        });
    }

    const output = ingredients.map(c => {
        return <span 
        style={{textTransform: 'capitalize', display: 'inline-block', margin: '0 10px', border: '1px solid #ccc', padding: '5px'}}
        key={c.name}>{c.name} ({c.amount})</span>;
    })
    return (
    <div className={classes.Order}>
        <p>Ingredients: {output}</p>
        <p>Total Price: <strong>{props.price}</strong></p>
    </div>

    );
}

export default order;