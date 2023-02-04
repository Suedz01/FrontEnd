import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu>            
          </Menu>
        </BrowserRouter>        
    </div>
  );
}

export default App;
