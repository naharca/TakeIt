import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        
    
            <div className="jumbotron  shadow-lg">
                <h1>Welcome to Take - IT</h1>
                <p className="welcoming-text">Here you'll find the better options, sales offers and technologycal solutions</p>
                <p><Link to="/" className="btn btn-primary btn-lg">Just Take-IT</Link></p>
            </div>
        
    )
}

export default Home;