import React, { useState } from 'react';
import './GeneralPanel.css'
import Card from '../../Util/Card/Card';
import GetCustomers from '../../service/get_customers';

async function get_customers() {
    const result = await GetCustomers
    console.log("dentro do get_customers ", result)
    //return formatResult(result.data)
    if (result.status === 200) {
        console.log("sucess ", result)
        return formatResult(result.data.customers)//result.data
    } else {
        return "Error"
    }
}

function formatResult(result) {
    console.log("result ", result)
    const resultPanel = result.reduce((sum, next) => sum + next.subscription_amount, 0)
    console.log("depois do reduce ", resultPanel)
    return resultPanel;
    /*return resultPanel = {
        totalCliente: totalCliente
    }*/
}


function GeneralPanel() {
    //const [resultCustomers, setCount] = useState(get_customers())
    /*state = {
        resultCustomers: get_customers(),
    }*/


    //console.log("get_customerasdasds ", resultCustomers)
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
                        <Card title='Total de Clientes' value={get_customers()} type={null} />
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
