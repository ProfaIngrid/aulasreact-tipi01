import { useState } from "react";

function Eventos(){
    let [conta, setConta] = useState(0);
    const [nome, setNome] = useState();
    
    function enviaNome(){
        console.log("Nome enviado com sucesso!");
    }

    return(
        <>
        <p>O botão foi clicado {conta} vezes</p>
        <button onClick={() => {setConta(conta + 1)}}>Clique aqui!</button>
        <br/>
        <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit"></button>
        <p>O nome é: {nome}</p>
        
        </>
    )
}

export default Eventos;