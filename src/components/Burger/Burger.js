import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from '../Burger/Burger.css';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
    .map(c => { 
        return [...Array(props.ingredients[c])]
    .map((_, i) => {
        return <BurgerIngredients key={c + i} type={c} />

    });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (ingredients.length === 0) {
        ingredients = <div>Please start adding ingredients</div>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {ingredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;