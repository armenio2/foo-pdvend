import React from 'react';
import { LogoNexaas, Notification, Avatar, Shape } from '../../assets';

function Header() {
    return (
        <div style={styles} class="container-sm">
            <div class="row align-items-center">
                <div style={logo} class="col-2">
                    <img src={LogoNexaas} />
                </div>
                <div class="col-8">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1"><img src={Shape} /></button>
                        </div>
                        <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                </div>
                <div class="col-1">
                    <img src={Notification} />
                </div>
                <div class="col-1">
                    <img src={Avatar} />
                </div>
            </div>
        </div>
    );
}

const styles = {
    padding: 8,
    borderBottom: 'solid 2px black',
}

const logo = {
    borderRigth: 'solid 2px black'
}

export default Header;
