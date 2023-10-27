import { useState } from "react";
import axios from 'axios';
import './consumoApi.css';

function ConsumindoApi(){
    const [buscaCep, setBuscaCep] = useState();
    const [data, setData] = useState();
    const [cepInvalido, setCepInvalido] = useState();
    const api = `https://viacep.com.br/ws/${buscaCep}/json`;

    function buscaApi(e){
        e.preventDefault();
        axios.get(api)
        .then(response => {
            if(response.data.erro === true){
                setData([]);
                setCepInvalido("Cep Inválido");
                setData("");
            }else{
                setData(
                    response.data.logradouro + " " +
                    response.data.bairro + " " +
                    response.data.localidade+ " " +
                    response.data.uf+ " " +
                    response.data.cep
                )
                setCepInvalido("")
            }
        }).catch((error) => {
            console.log(error)
            setData("");
            setCepInvalido("Cep Inválido")
        })
    }
    
    return(
        <div className="main-cep">
        <form className="form-cep">
            <label className="title-cep">BUSCA CEP</label>
            <br/>
            <div className="input-cep">
                <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}/>
                <button onClick={buscaApi}>IR</button>
            </div>
        </form>
        <p className="resposta-cep">
            {cepInvalido} 
            {data}  
        </p>
        </div>
    )
}

export default ConsumindoApi;