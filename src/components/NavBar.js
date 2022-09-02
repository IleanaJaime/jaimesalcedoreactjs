import foto from '../assets/logosweet.jpg';


const NavBar = () => {
return (
    <div>
        <img src={foto}/>
        <ul>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Importante</a></li>
            <li><a href="#">Quienes Somos</a></li>
            <li><a href="#">ComoComprar</a></li>
        </ul>
        <div>
            <CartWidget/>
        </div>
            </div>
) 
}


export default NavBar;
