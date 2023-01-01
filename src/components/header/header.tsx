export function Header({ children }: { children: JSX.Element }) {
    const title = 'Robots Factory';

    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            {children}
        </header>
    );
}
