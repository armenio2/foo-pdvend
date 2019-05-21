import React from 'react';
import './RowCard.css';
import { Avatar } from '../../assets/index';

function RowCard(props) {
    const result = props.data ? props.data : '';
    let status;
    if (result.status === 'paying') {
        status = <p style={{ color: 'green' }}>Adimplente</p>;
    } else {
        status = <p style={{ color: 'red' }}>Inadimplente</p>;
    }
    return (
        <div class="container-sm rowCard">
            <div class="row align-items-center">
                <div class="col-1 align-self-center" >
                    <img src={Avatar} />
                </div>
                <div class="col-2 align-self-center" >
                    <p>{result.name}</p>
                </div>
                <div class="col-5 align-self-center" >
                    <p>{result.email}</p>
                </div>
                <div class="col-2 align-self-center" >
                    <p>{result.phone}</p>
                </div>
                <div class="col-2 align-self-center" >
                    {status}
                </div>
            </div>
        </div>
    );
}

export default RowCard;
