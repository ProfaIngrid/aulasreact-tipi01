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
        <form>
        <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)}
        />
        <p>O nome é: {nome}</p>
        <button type="submit"></button>
        </form>
        
        </>
    )
}

export default Eventos;