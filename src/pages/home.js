import Example from "../components/Alert";
import Navbar from "../components/Navbar";



function Home( ) {
    return (
        <>
            <Navbar />
            <div className="home-page">
                <h1>Home</h1>
                <a href="/headphones">Headphones</a>
            </div>
            <Example />
        </>
    );
}

export default Home;