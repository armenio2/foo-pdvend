import React, { useState, useEffect } from 'react';
import './GeneralPanel.css'
import Card from '../../Util/Card/Card';
import getCustomers from '../../service/get_customers';




function formatResult(result) {
    console.log("result ", result)
    const resultPanel = result.reduce((sum, next) => sum + next.subscription_amount, 0)
    console.log("depois do reduce ", resultPanel)
    return resultPanel;
}

const GeneralPanel = () => {
    const [resultCustomers, setResult] = useState(0)

    useEffect(async () => {
        const response = await getCustomers();
        debugger;
        setResult(formatResult(response.customers))
    }, [setResult]);

    console.log("resultCustomers ", resultCustomers)
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
                        <Card title='Total de Clientes' value={resultCustomers} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Clientes Inadimplentes' value={0} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Clientes Adimplentes' value={0} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Total Arrecadado' value={0} type={null} />
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
