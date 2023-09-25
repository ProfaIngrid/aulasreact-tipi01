import Logo from '../../images/logo.png';
import './header.css';

function Header() {
    return(
        <header className="header-menu">
            <img src={Logo} alt='Logo' className="img-logo"/> 
            <h3>Bem vindo Ninja!</h3>
        </header>
    )
}

export default Header;