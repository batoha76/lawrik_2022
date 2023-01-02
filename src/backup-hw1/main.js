import React from 'react';
import ReactDom from 'react-dom';
import UserCard from './UserCard';/* ЭТА ФУНКЦИЯ - ДЕСТРУКТУРИРОВАНА (БЕЗ 'PROPS'): */
import Counter from './Counter';

ReactDom.render(
    <div className='some'>
        <div>Hello, World</div>
        <hr/>
{/*         <h3>Class max=3</h3> ЭТО ПРИМЕР КЛАССОВОЙ КОМПОНЕНТЫ:
        <CounterClass max={3}/>
        <h3>Class max=5</h3>
        <CounterClass max={5}/>
        <hr/> */}
        <h3>Fn max=5</h3>
        <Counter min={-4} max={5}/>
        <hr/>
        <h3>Fn 20,50</h3>
        <Counter min={20} max={50}/>
        <hr/>
{/*         <hr/>
        <div>Text</div>
        <UserCard name="Dmitry" text="Hi there!"/>
        <UserCard name="Igor" text="Hi!"/>
        <UserCard name="Vitalii" text="Hello!"/> */}
    </div>,
    document.querySelector('.app')
);
