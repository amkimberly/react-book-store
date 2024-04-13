import styled from 'styled-components';
import profile from '../../images/profile.svg';
import cart from '../../images/cart.svg';

const HeaderIcons = styled.ul`
    display:flex;
    align-items: center;
    margin-right: 20px;
`
const Icon = styled.li`
    padding: 20px;
`
const icons = [profile, cart];


function MenuIcons(){
    return(
        <HeaderIcons>
            {icons.map((icon) => (
                <Icon>
                    <img src={icon} alt='icon'></img>
                </Icon>
            ) ) }
        </HeaderIcons>
    );
}

export default MenuIcons;