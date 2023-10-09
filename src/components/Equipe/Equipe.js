import ExibePerfil from '../ExibePerfil/ExibePerfil';
import './equipe.css';

function Equipe({listaP}){
    return(
        <>
        <h1>Equipe</h1>
        <div className='div-exibe'>
            {listaP.map((p) => 
                <ExibePerfil nome={p.nome} img={p.imagem} crt={p.crt}/>
            )} 
        </div>
        </>
    )
}

export default Equipe;