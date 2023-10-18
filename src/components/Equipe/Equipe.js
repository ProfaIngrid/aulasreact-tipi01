import ExibePerfil from '../ExibePerfil/ExibePerfil';
import './equipe.css';

function Equipe({titulo, listaP}){
    return(
        <>
        <h1>{titulo}</h1>
        <div className='div-exibe'>
            {listaP.map((p) => 
                <div>
                    <img className="img-exibe-perfil" src={p.imagem} alt={p.nome}/>
                    <h1>Nome: {p.nome}</h1>
                    {
                        p.categoria === "professor" ? 
                            <div className='prof'>
                                <p>Professor</p>
                            </div>
                        :
                            <div className='aluno'>
                                <p>Aluno</p>
                            </div>
                    }
                    <p>Habilidades: {p.crt}</p>
                </div>
            )} 
        </div>
        </>
    )
}

export default Equipe;