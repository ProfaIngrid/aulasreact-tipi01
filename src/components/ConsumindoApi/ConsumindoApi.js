import { useState } from "react";
import axios from 'axios';

function ConsumindoApi(){
    const [buscaUser, setBuscaUser] = useState();
    const api = 'https://api.postmon.com.br/v1/cep/' + buscaUser;

    function buscaApi(e){
        e.preventDefault();
        console.log(api);

        axios.get(api)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return(
        <form>
            <label>Pesquisar usuário: </label>
            <br/>
            <input type="text" value={buscaUser} onChange={(e) => setBuscaUser(e.target.value)}/>
            <br/>
            <button onClick={buscaApi}>Pesquisar</button>
        </form>
    )
}

export default ConsumindoApi;