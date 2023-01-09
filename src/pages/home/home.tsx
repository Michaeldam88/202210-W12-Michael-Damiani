export function Home() {
    const totalRobots = JSON.parse(
        sessionStorage.getItem('totalRobots') as string
    );
    
    return (
        <section className="home">
            <h2 className="home__title">Home</h2>
            <p className="home__text" data-testid="totalRobots">
                Total robots disponibles {totalRobots ? totalRobots : 0}
            </p>
        </section>
        
    );
}

