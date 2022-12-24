export function Header({ children }: { children: JSX.Element }) {
    const title = 'Robots Factory';

    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    );
}
