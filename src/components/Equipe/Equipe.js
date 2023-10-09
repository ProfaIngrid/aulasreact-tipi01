import ExibePerfil from '../ExibePerfil/ExibePerfil';
import './equipe.css';

function Equipe({titulo, listaP}){
    return(
        <>
        <h1>{titulo}</h1>
        <div className='div-exibe'>
            {listaP.map((p) => 
                <ExibePerfil nome={p.nome} img={p.imagem} crt={p.crt}/>
            )} 
        </div>
        </>
    )
}

export default Equipe;