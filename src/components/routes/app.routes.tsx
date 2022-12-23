import { Navigate, Route, Routes } from 'react-router-dom';
import { Favorites } from '../../pages/favorites/favorites';
import { Home } from '../../pages/home/home';
import { Robots } from '../../pages/robots/robots';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={''} element={<Home></Home>}></Route>
            <Route path={'/home'} element={<Home></Home>}></Route>
            <Route path={'/robots'} element={<Robots></Robots>}></Route>
            <Route
                path={'/favorites'}
                element={<Favorites></Favorites>}
            ></Route>
            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
