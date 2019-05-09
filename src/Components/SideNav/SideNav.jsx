import React from 'react';
import NavItem from './NavItem/NavItem';
import { Icon1, Icon2 } from '../../assets';

function SideNav() {
    return (
        <div style={styles} class="container-sm">
            <NavItem label='Painel' icon={Icon1} selected={true} />
            <NavItem label='Configuração' icon={Icon2} selected={false} />
        </div>
    );
}

const styles = {
    borderRight: 'solid 2px black',
    height: '90vh',
}

export default SideNav;
