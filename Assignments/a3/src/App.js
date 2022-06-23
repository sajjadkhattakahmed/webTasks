import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Title from './components/title';
import DestinationList from './components/DestinationList';
import Footer from './components/footer';

function App() {
  return (
    <div className="App bg-secondary">
        <Navbar />
        <Title />
        <DestinationList />
        <Footer />
    </div>
  );
}

export default App;
