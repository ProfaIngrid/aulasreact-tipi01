import Maca from "../../images/maca.jpg";
import Pera from "../../images/pera.webp";
import Uva from "../../images/uva.webp";

function ExercicioList({listas}) {
    return(
        <>
            <h2>Minha lista</h2>
            { listas.map((f) => 
                <>
                <p>Nome: {f.nome} Preço: {f.valor} </p>
                <img src={f.img}/>
                </>
            )
            }
        </>
    )
}

export default ExercicioList;