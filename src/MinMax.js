import React, { useState } from 'react';
import PropTypes from 'prop-types';

MinMax.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

function MinMax ({min = 1, max, current, onChange }){
    function applyCurrent(num){
        let validNum = Math.max(min, Math.min(max, num));
        onChange(validNum);
    }

    function parseCurrentStr( e ){
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);
    
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

export default MinMax;