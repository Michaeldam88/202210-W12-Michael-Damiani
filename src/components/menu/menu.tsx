import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/home'}>{'Home'}</Link>
                </li>
                <li>
                    <Link to={'/robots'}>{'Robots'}</Link>
                </li>
                <li>
                    <Link to={'/favorites'}>{'Favorites'}</Link>
                </li>
            </ul>
        </nav>
    );
}
