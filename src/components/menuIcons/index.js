import './style.css';
import profile from '../../images/profile.svg';
import cart from '../../images/cart.svg';

const icons = [profile, cart];


function MenuIcons(){
    return(
        <ul className='icons'>
            {icons.map((icon) => (
                <li className='icon'>
                    <img 
                        src={icon}
                        alt='icon'>
                    </img>
                </li>
            ) ) }
        </ul>
    );
}

export default MenuIcons;