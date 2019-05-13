import React from 'react';
import './Card.css';

function Card(props) {
    const value = props.type === 'money' ? `R$: ${props.value}` : props.value;
    return (
        <div class="container-sm card">
            <div class="row">
                <div class="col-12" >
                    <p>{props.title}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12" >
                    <p>{value}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
