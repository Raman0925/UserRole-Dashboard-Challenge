import { Link } from 'react-router-dom';
function Navigation() {
    return (
      <nav>
        <Link to="/">login</Link>
        
        <Link to="/dashboard">dashboard</Link>
      </nav>
    );
  }