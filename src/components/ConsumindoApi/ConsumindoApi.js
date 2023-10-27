import { useState } from "react";
import axios from 'axios';

function ConsumindoApi(){
    const [buscaCep, setBuscaCep] = useState();
    const [data, setData] = useState([]);

    const api = `https://viacep.com.br/ws/${buscaCep}/json`;

    function buscaApi(e){
        e.preventDefault();
        axios.get(api)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return(
        <form>
            <label>Pesquisar usuário: </label>
            <br/>
            <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}/>
            <br/>
            <button onClick={buscaApi}>Pesquisar</button>
        </form>
    )
}

export default ConsumindoApi;