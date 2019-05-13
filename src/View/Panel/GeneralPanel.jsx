import React from 'react';
import './GeneralPanel.css'
import Card from '../../Util/Card/Card';

function GeneralPanel() {
    return (
        <div style={style} class='generalPanel'>
            <div class="container-sm">
                <div class="row">
                    <div class="col-12" >
                        <span>Visão Geral</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3" >
                        <Card title='Total de Clientes' value={0} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Total de Clientes' value={0} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Total de Clientes' value={0} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Total de Clientes' value={0} type={null} />
                    </div>
                </div>
            </div>
            <div class="container-sm">
                <div class="row">
                    <div class="col-12" >
                        <span>Clientes Cadastrados</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


const style = {
    background: '#F5F5F5',
    height: '100vh'
}
export default GeneralPanel;
