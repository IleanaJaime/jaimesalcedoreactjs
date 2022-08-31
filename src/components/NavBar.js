import foto from '../assets/logosweet.jpg';
const NavBar = () => {
return (
    <div>
        <img src={foto}/>
        <ul>
            <li><a href="#">Productos</a>
            <a href="#">Importante</a>
            <a href="#">Quienes Somos</a>
            <a href="#">ComoComprar</a>
            </li>
        </ul>
    </div>
)
}

export default NavBar;
<script scr = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>