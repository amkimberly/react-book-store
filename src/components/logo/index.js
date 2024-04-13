import logo from '../../images/logo.svg';
import styled from 'styled-components';

const MainLogo = styled.div`
    display: flex;
`
const LogoImg = styled.img`
    padding: 5px;
`
const LogoTitle = styled.p`
    display: flex;
    padding: 10px;
`

function Logo() {
    return(
        <MainLogo>
            <LogoImg src={logo} alt='logo'/>
            <LogoTitle>
                <strong>Laneway</strong>Books
            </LogoTitle>
        </MainLogo>
    );
}

export default Logo;