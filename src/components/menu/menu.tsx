import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__element">
                    <Link className="navbar__link" to={'/home'}>
                        {'Home'}
                    </Link>
                </li>
                <li className="navbar__element">
                    <Link className="navbar__link" to={'/robots'}>
                        {'Robots'}
                    </Link>
                </li>
                <li className="navbar__element">
                    <Link className="navbar__link" to={'/favorites'}>
                        {'Favorites'}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
