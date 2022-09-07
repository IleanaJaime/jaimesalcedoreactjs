import Foto from '../assets/logosweet.jpg';
import CartWidget from "./CartWidget";


const NavBar = () => {
return (
    <div>
        <img src={Foto}/>
        <ul>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Importante</a></li>
            <li><a href="#">Quienes Somos</a></li>
            <li><a href="#">ComoComprar</a></li>
        </ul>
            <CartWidget/>
        </div>
) 
}


export default NavBar;
