import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired
};

function Counter ({min = 1, max }){
    let [ current, setCurrent ] = useState(min/* чтобы стартовало с указанного min */);

    function applyCurrent(num){
        let validNum = Math.max(min, Math.min(max, num));
        setCurrent(validNum);
    }

    function parseCurrentStr( e ){
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);

/*     useEffect(() => {
        applyCurrent(current);
    }, [min, max]); */
    
/*     function inc(){
        if(current < max){
            setCurrent(current + 1);
        }
    };

    function dec(){
        if(current > min){
            setCurrent(current - 1);
        }
    }; */

    return<div>
        <button type='button' onClick={ dec }>-</button>
        <input type='text' value={ current } onChange={parseCurrentStr}/>
        <button type='button' onClick={ inc }>+</button>
    </div>
};


/* let a = prompt('вопрос','');
(a==1||a==2||a==3) ? alert ('hi') : alert ('иное'); */

export default Counter;