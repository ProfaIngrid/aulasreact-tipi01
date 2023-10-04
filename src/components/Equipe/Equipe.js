import ExibePerfil from '../ExibePerfil/ExibePerfil';
import './equipe.css';

function Equipe({
        n1,n2,n3,n4,
        i1,i2,i3,i4,
        c1,c2,c3,c4,
        e
        }){
    return(
        <>
        <h1>Equipe {e}</h1>
        <div className='div-exibe'>
            <ExibePerfil nome={n1} img={i1} crt={c1}/>
            <ExibePerfil nome={n2} img={i2} crt={c2}/>
            <ExibePerfil nome={n3} img={i3} crt={c3}/>
            <ExibePerfil nome={n4} img={i4} crt={c4}/>       
        </div>
        </>
    )
}

export default Equipe;