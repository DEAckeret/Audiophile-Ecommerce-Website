import Example from "../components/Alert";
import Navbar from "../components/Navbar";



function Home( ) {
    return (
        <>
            <Navbar />
            <div className="home-page">
                <h1>Home</h1>
            </div>
            <Example />
        </>
    );
}

export default Home;