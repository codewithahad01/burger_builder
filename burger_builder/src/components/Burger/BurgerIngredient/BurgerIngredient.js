import React, {Component} from "react";
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
    retder() {
        let ingrediant = null;

        switch(this.props.type){
            case('bread-bottom'):
                ingrediant = <div className="classes.BreadBottom"></div>
                break;
            case('bread-top'):
                ingrediant = (
                    <div className="classes.BreadTop">
                        <div className="classes.Seeds1"></div>
                        <div className="classes.Seeds2"></div>
                    </div>
                )    
                break;
            case('meat'):
                    ingrediant = <div className="classes.Meat"></div>
                    break;
    
            case('cheese'):
            ingrediant = <div className="classes.Cheese"></div>
            break;
    
            case('bacon'):
            ingrediant = <div className="classes.Bacon"></div>
            break;
    
            case('salad'):
            ingrediant = <div className="classes.Salad"></div>
            break;
    
            default:
                ingrediant = null;
        }
        return ingrediant;
    }
    // eslint-disable-next-line default-case
}

BurgerIngredient.prototype = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient