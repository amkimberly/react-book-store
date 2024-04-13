import styled from 'styled-components';
import Logo from '../logo';
import MenuOptions from '../menuOptions';
import MenuIcons from '../menuIcons/';


const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: end;
    align-items: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <MenuOptions/>
            <MenuIcons/>
        </HeaderContainer>
    )
}

export default Header;