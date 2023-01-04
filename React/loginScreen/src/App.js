import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div class="card">
        <div class="card2">

        <form>  
          <div class="container">   
            <label>Login : </label>   
              <input type="text" placeholder="Insira seu email" name="text" required/>  
            <label>Senha : </label>  
              <input type="password" placeholder="Insira sua senha" name="password" required/>  
            <button type="submit">Acessar</button>
            <p id="forgot">Esqueceu da <a href="#"> senha? </a></p>
          </div> 
        </form>  


        </div>
      </div>
    </div>
  );
}

export default App;
