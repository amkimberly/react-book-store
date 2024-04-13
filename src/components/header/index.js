import './style.css';
import Logo from '../logo';
import MenuOptions from '../menuOptions';
import MenuIcons from '../menuIcons/';

function Header(){
    return(
        <header className='App-header'>
            <Logo/>
            <MenuOptions/>
            <MenuIcons/>
        </header>
    )
}

export default Header;