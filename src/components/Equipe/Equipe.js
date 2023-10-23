import ExibePerfil from '../ExibePerfil/ExibePerfil';
import './equipe.css';

function Equipe({titulo, listaP}){
    function cat(c, n){
        if(c === 'professor'){
            return(
                <div className='prof'>
                    <p>Professor</p>
                </div>
            )
        }else if(c === 'aluno'){
            return(
                <div className='aluno'>
                    <p>Aluno</p>
                </div>
            )
        }else {
            console.log(`Falta categoria para: ${n}`)
            return(
                <div className='sCat'>
                    <p>ATENÇÃO! {n} está sem categoria</p>
                </div>
            )
        }
    } 

    return(
        <>
        <h1>{titulo}</h1>
        <div className='div-exibe'>
            {listaP.map((p) => 
                <div>
                    <img className="img-exibe-perfil" src={p.imagem} alt={p.nome}/>
                    {
                        p.nome === undefined  
                        ? <h1>Sem nome!</h1> 
                        : <h1>Nome: {p.nome}</h1>
                    }
                    {cat(p.categoria, p.nome)}
                    {/* {p.categoria === "professor" ? <div className='prof'><p>Professor</p></div>: ""}
                    {p.categoria === "aluno"? <div className='aluno'><p>Aluno</p></div>: ""} */}
                    
                    {
                        p.crt === undefined  
                        ? <p>Sem Habilidades!</p>
                        : <p>Habilidades: {p.crt}</p>
                    }
                </div>
            )} 
        </div>
        </>
    )
}

export default Equipe;