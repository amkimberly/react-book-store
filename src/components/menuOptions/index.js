import styled from "styled-components";

const MenuLinks = ['CATEGORIES', 'MY SHELF', 'FAVORITES'];
const Options = styled.ul`
display: flex;
`
const OptionStyle = styled.li`
font-size: 16px;
text-align: center;
height: 100%;
min-width: 120px;
padding: 0 5px;
cursor: pointer;
`
function MenuOptions() {
    return(
        <Options>
            {MenuLinks.map((text) => (
                <OptionStyle><p>{text}</p></OptionStyle>
            ) ) }
        </Options>
    );
}
export default MenuOptions;