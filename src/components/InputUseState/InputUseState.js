import { useState } from "react";

function InputUseState(){
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();
    const [vLogin, setVlogin] = useState();

    function verificaLogin(e){
        e.preventDefault(); //Impede que a página recarregue
        if(login.toLowerCase() === 'ingrid' && senha === '123'){
            setVlogin(true);
        }else{
            if(login.toLowerCase() !== 'ingrid' && senha === '123'){
                setVlogin('Login incorreto!');
            }else if (login.toLowerCase() === 'ingrid' && senha !== '123'){
                setVlogin('Senha Incorreta!');
            }else{
                setVlogin("Login e senha Incorretos!");
            }
        }
    }

    return(
        <form>
            <label>Login: </label>
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>
            <br/>
            <label>Senha: </label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <br/>
            <button onClick={verificaLogin}>Logar!</button>
            {
                vLogin === true 
                    ? <p>Logado com sucesso!</p> 
                    : ''
            }
            {
                vLogin !== true
                ? <p>{vLogin}</p> 
                : ''
            }
        </form>
    )
}

export default InputUseState;