
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="games-nav-content">
                    <a href="/home">
                        <div className="games-logo-container">
                            <h1>Games</h1>
                            <h1 className="text-2025"> 2025</h1>
                        </div>
                    </a>
                    <div>
                        <ul className="games-menu-container">
                            <li>
                                <a href="/home" className="active">
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a href="/sobre">
                                    SOBRE
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;