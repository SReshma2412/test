import { Link } from "react-router-dom";
export function Nav()
{
    return(
        <nav class="navbar">
            <Link to="/" class="navbar-brand">Ethunus</Link>
            <div class="nav">
                <Link to="/" class="nav-link">Home</Link>
                <Link to="/about" class="nav-link">About</Link>
           <Link to="/contact">contact</Link>
            </div>
        </nav>
    )
}