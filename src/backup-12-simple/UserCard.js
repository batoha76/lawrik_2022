import React from 'react';

/* ЭТА ФУНКЦИЯ - ДЕСТРУКТУРИРОВАНА (БЕЗ 'PROPS'): */
export default function /* UserCard */({ name, text }){
    return( 
        <> {/* пустой тег - это фрагментирование */}
            <div className='card'>
                <h3>{ name }</h3>
                <hr/>
                <div>{ text }</div>
            </div>
            <hr/> {/* чтобы продемонстрировать ФРАГМЕНТИРОВАНИЕ */}
        </>
    )
};
/* ТО ЖЕ ЧТО Й ФУНКЦИЯ ВЫШЕ:
function UserCard(props){
    return <div className='card'>
        <h3>{props.name}</h3>
        <hr/>
        <div>{props.text}</div>
    </div>
}; */