import Logo from '../../images/logoPng-removebg-preview.png';
import './header.css';

function Header() {
    return(
        <header className='header-menu'>
            <img src={Logo} className='img-logo' alt=''/> 
            <h3>Bem vindo, Pirata!</h3>
        </header>
    )
}

export default Header;