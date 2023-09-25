import './exibePerfil.css';

function ExibePerfil({nome, img, caracteristica}){
    return(
        <div>
            <img className="img-exibe-perfil" src={img} alt={nome}/>
            <h1>Nome: {nome}</h1>
            <p>Habilidades: {caracteristica}</p>
        </div>
    )
}

export default ExibePerfil;