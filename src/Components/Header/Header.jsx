import React from 'react';
import { LogoNexaas, Notification, Avatar, Shape } from '../../assets';

function Header() {
    return (
        <div style={styles} class="container-sm">
            <div class="row align-items-center">
                <div class="col-10  col-md-10">
                    <div style={styleInputGroup} class="input-group">
                        <div class="input-group-prepend">
                            <div style={styleButton}><img src={Shape} /></div>
                        </div>
                        <input style={styleInput} placeholder='Busque por clientes' />
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

const styles = {
    padding: '8px',
}

const styleButton = {
    background: 'transparent',
    border: 'none',
    width: '8%',
}

const styleInput = {
    border: 'none',
    width: '90%',
    marginLeft: '2%'
}

const styleInputGroup = {
    border: '1px solid #F5F5F5',
    borderRadius: '50px',
    padding: 8
}

export default Header;
