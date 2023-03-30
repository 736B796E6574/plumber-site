import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Button from 'react-bootstrap/Button';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div className="App">
      <Homepage />
    <LoginButton />
    <LogoutButton />
    </div>
  );
}

export default App;
