import React from 'react';
import { LogoNexaas, Notification, Avatar, Shape } from '../../assets';

function Header() {
    return (
        <div style={styles} class="container-sm">
            <div class="row align-items-center">
                <div class="col-2 col-sm-2 col-md-2">
                    <img src={LogoNexaas} />
                </div>
                <div class="col-5 col-sm-5 col-md-8">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1"><img src={Shape} /></button>
                        </div>
                        <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                </div>
                <div class="col-1 col-sm-auto col-md-1">
                    <img src={Notification} />
                </div>
                <div class="col-1 col-sm-auto col-md-1">
                    <img src={Avatar} />
                </div>
            </div>
        </div>
    );
}

const styles = {
    padding: '8px',
    borderBottom: 'solid 2px black',
}

export default Header;
