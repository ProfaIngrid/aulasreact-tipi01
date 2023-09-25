import './ExibirPerfil.css'

function ExibirPerfil({img,nome,caracteristicas}){
    return(
        <div className='organiza'>
            <img src={img} alt={nome}/>
            <h1>Nome: {nome}</h1>
            <p>Caracteristicas: {caracteristicas}</p>
        </div>
    )
}

export default ExibirPerfil;