
import './styles.css';

const Navbar = () => {
    return (
        <header>
            <nav className="container">
                <div className="games-nav-content">
                    <a href="/">
                        <div className="games-logo-container">
                            <h1>Games</h1>
                            <h1 className="text-2025"> 2025</h1>
                        </div>
                    </a>
                    <div>
                        <ul className="games-menu-container">
                            <li>
                                <a href="/" className="active">
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a href="/about">
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