export function Home() {
    const totalRobots = 'XXX';
    return (
        <section>
            <h2>Home</h2>
            <img
                src="https://robohash.org/factory.png"
                alt="Home Logo"
            ></img>
            <p role="totalRobots">
                Total robots disponibles {totalRobots}
            </p>
        </section>
    );
}
