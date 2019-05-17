import React, { useState, useEffect } from 'react';
import './GeneralPanel.css'
import Card from '../../Util/Card/Card';
import GetCustomers from '../../service/get_customers';





function GeneralPanel() {
    const [resultCustomers, setResult] = useState(0)

    /*const get_customers = async () => {
        const result = await GetCustomers.then()
        console.log("dentro do get_customers ", result)
        //return formatResult(result.data)
        if (result.status === 200) {
            console.log("sucess ", result)
            return await formatResult(result.data.customers)//result.data
        } else {
            return "Error"
        }
    }*/

    function formatResult(result) {
        console.log("result ", result)
        const resultPanel = result.reduce((sum, next) => sum + next.subscription_amount, 0)
        console.log("depois do reduce ", resultPanel)
        return resultPanel;
        /*return resultPanel = {
            totalCliente: totalCliente
        }*/
    }
    /*
        useEffect(() => {
            // Update the document title using the browser API
            console.log("document")
            setResult(get_customers)
          });*/
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await GetCustomers;
            return response
            //return formatResult(response.data.customers)

            // ...
        }
        fetchData();
        setResult(fetchData())
    }, [setResult]); // Or [] if effect doesn't need props or state


    function totalCliente(result) {
        console.log('resultno cliente ', result)
        return
    }

    /*useEffect(async () => {
      async const result = await GetCustomers.then();
  
      setResult(formatResult(result.data.customers));
    });
*/
    console.log("resultCustomers ", resultCustomers)
    //let cardResult = resultCustomers.data.customers.reduce((sum, next) => sum + next.subscription_amount, 0)
    //console.log("cardresult ", cardResult)
    //setResult(get_customers())
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
                        <Card title='Total de Clientes' value={totalCliente(resultCustomers)} type={null} />
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
