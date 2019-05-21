import React, { useState, useEffect } from 'react';
import './GeneralPanel.css'
import Card from '../../Util/Card/Card';
import getCustomers from '../../service/get_customers';
import RowCard from '../../Util/RowCard/RowCard';

function returnLength(result) {
    return result.length;
}

function returnInadimplentesClientes(result) {
    if (result === 0) {
        return 0;
    } else {
        let total = []
        result.forEach(item => item.status === 'overdue' ? total.push(item) : '')
        return total.length;
    }
}

function returnAdimplentesClientes(result) {
    if (result === 0) {
        return 0;
    } else {
        let total = []
        result.forEach(item => item.status === 'overdue' ? total.push(item) : '')
        return total.length;
    }
}

function returnTotalClientes(result) {
    if (result === 0) {
        return 0;
    }
    const resultPanel = result.reduce((sum, next) => sum + next.subscription_amount, 0)
    return resultPanel.toFixed(2);
}

function GeneralPanel() {

    const [resultCustomers, setResult] = useState(0)
    useEffect(async () => {
        const response = await getCustomers();
        setResult(response.customers)
    }, [setResult]);


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
                        <Card title='Total de Clientes' value={returnLength(resultCustomers)} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Clientes Inadimplentes' value={returnInadimplentesClientes(resultCustomers)} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Clientes Adimplentes' value={returnAdimplentesClientes(resultCustomers)} type={null} />
                    </div>
                    <div class="col-3" >
                        <Card title='Total Arrecadado' value={returnTotalClientes(resultCustomers)} type={'money'} />
                    </div>
                </div>
            </div>
            <div class="container-sm">
                <div class="row  align-items-center">
                    <div class="col-12" >
                        <span>Clientes Cadastrados</span>
                    </div>
                    {resultCustomers ? resultCustomers.map((item) => (
                        <div class="col-12" style={{ padding: 0 }}>
                            <RowCard data={item}></RowCard>
                        </div>
                    )) : null}
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
