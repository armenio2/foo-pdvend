import React from 'react';
import { Notification, Avatar, Shape } from '../../assets';
import './Header.css'

function Header() {
    return (
        <div class="container-sm header">
            <div class="row align-items-center">
                <div class="col-10  col-md-10">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class='buttonInput'><img src={Shape} /></div>
                        </div>
                        <input class='inputHeader' placeholder='Busque por clientes' />
                    </div>
                </div>
                <div class="col-1  col-md-1">
                    <img src={Notification} />
                </div>
                <div class="col-1 col-md-1">
                    <img src={Avatar} />
                </div>
            </div>
        </div>
    );
}

export default Header;
