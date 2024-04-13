import './style.css';

const options = ['CATEGORIES', 'MY SHELF', 'FAVORITES'];

function MenuOptions() {
    return(
        <ul className='options'>
            {options.map((text) => (
                <li className='option'><p>{text}</p></li>
            ) ) }
        </ul>
    );
}
export default MenuOptions;