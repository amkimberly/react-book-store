import logo from '../../images/logo.svg';
import './style.css';


{/* Creates a function to print logo and make the code reusable by calling the function in any page*/}
function Logo() {
    return(
        <div className='logo'>
            <img className='logo-img'src={logo}></img>
            <p className='logo-title'><strong>Laneway</strong>Books</p>
        </div>
    );
}

export default Logo;