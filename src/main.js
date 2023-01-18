import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import UserCard from './UserCard';/* ЭТА ФУНКЦИЯ - ДЕСТРУКТУРИРОВАНА (БЕЗ 'PROPS'): */
import MinMax from './MinMax';


import App from './App';

ReactDom.render(
    <App/>,
    document.querySelector('.app')
);

{/*         <h3>Class max=3</h3> ЭТО ПРИМЕР КЛАССОВОЙ КОМПОНЕНТЫ:
        <CounterClass max={3}/>
        <h3>Class max=5</h3>
        <CounterClass max={5}/>
        <hr/> */}
{/*         <hr/>
        <div>Text</div>
        <UserCard name="Dmitry" text="Hi there!"/>
        <UserCard name="Igor" text="Hi!"/>
        <UserCard name="Vitalii" text="Hello!"/> */}

/* ЧАСТО ИСПОЛЬЗУЕМЫЕ ХУКИ
        useState
        useEffect
        useCallback
        useMemo
        useReducer
        useContext
        useRef 
*/
